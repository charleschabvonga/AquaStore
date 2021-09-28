<?php

namespace App\Http\Controllers;

use App\Models\Aquarium;
use App\Services\AquariumService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class AquariumController extends Controller
{
    /**
     * @var AquariumService aquariumService
     */
    private $aquariumService;

    /**
     * AquariumController constructor.
     * @param AquariumService $aquariumService
     */
    public function __construct(AquariumService $aquariumService)
    {
        $this->aquariumService = $aquariumService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $aquariums = $this->aquariumService->all();
        return response()->json(['aquariums' => $aquariums]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'glass_type' => 'required',
            'size' => 'required',
            'shape' => 'required',
            'location' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
        }

        $data = $request->only(['name', 'glass_type', 'size', 'shape', 'location',]);
        $aquarium = $this->aquariumService->save($data);

        if ($aquarium) {
            return response()->json(
                ['message' => 'Successfully created aquarium!', 'aquarium' => $aquarium],
                Response::HTTP_CREATED
            );
        } else {
            return response()->json(
                ['message' => 'Some error occurred, please try agian'],
                Response::HTTP_INTERNAL_SERVER_ERROR
            );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function show(int $id): JsonResponse
    {
        $aquarium = $this->aquariumService->find($id);
        return response()->json(['aquarium' => $aquarium]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Aquarium $aquarium
     * @return JsonResponse
     */
    public function update(Request $request, Aquarium $aquarium): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'glass_type' => 'required',
            'size' => 'required',
            'shape' => 'required',
            'location' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
        }

        $data = $request->only(['name', 'glass_type', 'size', 'shape', 'location']);
        $aquarium = $this->aquariumService->update($aquarium, $data);

        return response()->json(['message' => 'Successfully updated aquarium!', 'aquarium' => $aquarium]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Aquarium $aquarium
     * @return JsonResponse
     * @throws \Exception
     */
    public function destroy(Aquarium $aquarium): JsonResponse
    {
        if ($this->aquariumService->delete($aquarium)) {
            return response()->json(['message' => 'Successfully deleted the aquarium!'], Response::HTTP_NO_CONTENT);
        }

        return response()->json(['message' => 'Failed to delete the aquarium!'], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
