<?php

namespace App\Repositories;

use App\Models\Fish;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class FishRepository implements IResourceRepository
{
    /**
     * Get all fish.
     *
     * @param Model $aquarium
     * @return Fish[]|Collection
     */
    public function all(Model $aquarium): Collection
    {
        $fishes = Fish::where('aquarium_id', $aquarium->id)->get();
        return $fishes;
    }

    /**
     * @param Model $aquarium
     * @param array $data
     * @return Model|null
     */
    public function save(Model $aquarium, array $data): ?Model
    {
        $fish = new Fish();
        $fish->species = $data['species'];
        $fish->color = implode(', ', $data['color']);
        $fish->number_of_fins = $data['number_of_fins'];
        // $fish->aquarium_id = $data['aquarium_id'];
        $fish->aquarium_id = $aquarium->id;
        $fish->save();

        return $fish->refresh();
    }

    /**
     * @param Model $aquarium
     * @param Model $fish
     * @param array $data
     * @return mixed
     */
    public function update(Model $aquarium, Model $fish, array $data): ?Model
    {
        $fish = $fish->fill(['species' => $data['species']]);
        $fish = $fish->fill(['color' => implode(', ', $data['color'])]);
        $fish = $fish->fill(['number_of_fins' => $data['number_of_fins']]);
        // $fish = $fish->fill(['aquarium_id' => $data['aquarium_id']]);
        $fish->aquarium_id = $aquarium->id;
        $fish->save();

        return $fish->refresh();
    }

    /**
     * @param Model $aquarium
     * @param Model $fish
     * @return bool|null
     * @throws Exception
     */
    public function delete(Model $aquarium, Model $fish): ?bool
    {
        return $fish->delete();
    }

    /**
     * @param Model $aquarium
     * @param int $id
     * @return mixed
     */
    public function find(Model $aquarium, int $id): ?Model
    {
        return Fish::where('aquarium_id', $aquarium->id)
            ->findOrFail($id);
    }
}
