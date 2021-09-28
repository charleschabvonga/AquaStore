<?php

namespace App\Http\Controllers;

use App\Models\Aquarium;
use App\Models\Fish;
use App\Services\FishService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Exception;

class FishController extends Controller
{
    /**
     * @var FishService fishService
     */
    private $fishService;

    /**
     * FishController constructor.
     * @param FishService $fishService
     */
    public function __construct(FishService $fishService)
    {
        $this->fishService = $fishService;
    }

    /**
     * @param Aquarium $aquarium
     * @return JsonResponse
     */
    public function index(Aquarium $aquarium): JsonResponse
    {
        $fishes = $this->fishService->all($aquarium);
        return response()->json(['fishes' => $fishes]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @param Aquarium $aquarium
     * @return JsonResponse
     */
    public function store(Request $request, Aquarium $aquarium): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'species' => 'required',
            'color' => 'required',
            'number_of_fins' => 'required',
            'aquarium_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
        }

        $data = $request->only(['species', 'color', 'number_of_fins', 'aquarium_id']);

        $guppyFish = Fish::where('aquarium_id', $aquarium->id)->where('species', 'Guppy')->first();
        $goldFish = Fish::where('aquarium_id', $aquarium->id)->where('species', 'Gold')->first();

        if($aquarium['size'] <= 75 && $request->number_of_fins >= 3 && $aquarium['location'] === 'South Africa') {
            return response()->json([
                'message' => 'Fish with 3 or more fins cannot go into aquariums of 75lts or less'],
                Response::HTTP_BAD_REQUEST);
        } else if ($aquarium['size'] <= 19.8129 && $request->number_of_fins >= 3 && $aquarium['location'] === 'United States of America') {
            return response()->json([
                'message' => 'Fish with 3 or more fins cannot go into aquariums of 20 gallons or less'],
                Response::HTTP_BAD_REQUEST);
        } else {
            if(isset($guppyFish) && $request->species === 'Gold') {
                return response()->json([
                    'message' => 'Goldfish cannot go in the same aquarium as Guppies'],
                    Response::HTTP_BAD_REQUEST);
            } else if(isset($goldFish) && $request->species === 'Guppy') {
                return response()->json([
                    'message' => 'Guppies cannot go in the same aquarium as Goldfish'],
                    Response::HTTP_BAD_REQUEST);
            } else {
                $fish = $this->fishService->save($aquarium, $data);
                return response()->json(
                    ['message' => 'Successfully created a fish!', 'fish' => $fish],
                    Response::HTTP_CREATED
                );
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Aquarium $aquarium
     * @param int $id
     * @return JsonResponse
     */
    public function show(Aquarium $aquarium, int $id): JsonResponse
    {
        $fish = $this->fishService->find($aquarium, $id);
        return response()->json(['fish' => $fish]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Aquarium $aquarium
     * @param Fish $fish
     * @return Response
     */
    public function update(Request $request, Aquarium $aquarium, Fish $fish): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'species' => 'required',
            'color' => 'required',
            'number_of_fins' => 'required',
            'aquarium_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
        }

        $data = $request->only(['species', 'color', 'number_of_fins', 'aquarium_id']);
        $fish = $this->fishService->update($aquarium, $fish, $data);

        return response()->json(['message' => 'Successfully updated fish!', 'fish' => $fish]);
    }

    /**
     * @param Aquarium $aquarium
     * @param Fish $fish
     * @return JsonResponse
     * @throws Exception
     */
    public function destroy(Aquarium $aquarium, Fish $fish): JsonResponse
    {
        if ($this->fishService->delete($aquarium, $fish)) {
            return response()->json(['message' => 'Successfully deleted a fish!'],
            Response::HTTP_NO_CONTENT);
        }

        return response()->json(['message' => 'Failed to delete the fish!'],
        Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
