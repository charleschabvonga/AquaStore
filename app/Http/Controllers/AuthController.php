<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Auth;
use Carbon\Carbon;

class AuthController extends Controller
{
    /**
     * @var UserService userService
     */
    private $userService;

    /**
     * AuthController Constructor
     *
     * @param UserService $userService
     */
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function register(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email',
            'password' => 'required|string',
            'confirm_password' => 'required|string|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
        }

        $data = $request->only(['name', 'email', 'password', 'confirm_password']);
        $email = $this->userService->findByEmail($data['email']);
        if ($email) {
            return response()->json(['message' => 'Email already exists.'],
            Response::HTTP_NOT_ACCEPTABLE);
        }

        $user = $this->userService->save($data);
        return response()->json(['message' => 'Successfully created user!', 'user' => $user],
        Response::HTTP_CREATED);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
        }

        $login = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if (!Auth::attempt($login)) {
            return response(['message' => 'The provided credentials are incorrect'],
            Response::HTTP_UNAUTHORIZED);
        }

        $user = $request->user();

        if($user->role == 'admin'){
            $tokenData = $user->createToken('Personal Access Token', ['admin']);
        } else {
            $tokenData = $user->createToken('Personal Access Token', ['user']);
        }

        $token = $tokenData->token;

        if($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }

        if ($token->save()) {
            return response()->json([
                'user' => $user,
                'access_token' => $tokenData->accessToken,
                'token_type' => 'Bearer',
                'token_scope' => $tokenData->token->scopes[0],
                'expires_at' => Carbon::parse($tokenData->token->expires_at)->toDateTimeString(),
                'status_code' => 200,
            ], Response::HTTP_OK);
        } else {
            return response()->json([
                'message' => 'Some error occured, Please try again'],Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function logout(Request $request) {
        $request->user()->token()->revoke();
        return response()->json(['message' => 'Logout successfully!'], Response::HTTP_OK);
    }
}
