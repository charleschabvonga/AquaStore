<?php

namespace App\Repositories;

use App\Models\Aquarium;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class AquariumRepository implements IRepository
{
    /**
     * Get all aquari.
     *
     * @return Aquarium[]|Collection
     */
    public function all(): Collection
    {
        $aquariums = Aquarium::all();
        return $aquariums;
    }

    /**
     * @param $data
     * @return Aquarium
     */
    public function save(array $data): ?Model
    {
        $aquarium = new Aquarium();
        $aquarium = $aquarium->fill($data);
        $aquarium->save();

        return $aquarium->refresh();
    }

    /**
     * @param Model $aquarium
     * @param array $data
     * @return mixed
     */
    public function update(Model $aquarium, array $data): ?Model
    {
        $aquarium = $aquarium->fill($data);
        $aquarium->save();

        return $aquarium->refresh();
    }

    /**
     * @param Model $aquarium
     * @return mixed
     * @throws \Exception
     */
    public function delete(Model $aquarium): ?bool
    {
        $aquarium = Aquarium::findOrFail($aquarium->id);

        return $aquarium->delete();
    }

    /**
     * @param $id
     * @return mixed
     */
    public function find(int $id): ?Model
    {
        return Aquarium::findOrFail($id);
    }
}
