<?php

namespace App\Services;

use App\Models\Fish;
use App\Repositories\FishRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class FishService implements IResourceService
{
    /**
     * @var $fishRepository
     */
    protected $fishRepository;

    /**
     * FishService constructor.
     *
     * @param FishRepository $fishRepository
     */
    public function __construct(FishRepository $fishRepository)
    {
        $this->fishRepository = $fishRepository;
    }

    /**
     *
     * @param Model $aquarium
     * @param array $data
     * @return Model|null
     */
    public function save(Model $aquarium, array $data): ?Model
    {
        return $this->fishRepository->save($aquarium, $data);
    }

    /**
     * Get all fish.
     *
     * @param Model $aquarium
     * @return Collection
     */
    public function all(Model $aquarium): Collection
    {
        return $this->fishRepository->all($aquarium);
    }

    /**
     * @param Model $aquarium
     * @param Model $fish
     * @return bool|null
     * @throws \Exception
     */
    public function delete(Model $aquarium, Model $fish): ?bool
    {
        return $this->fishRepository->delete($aquarium, $fish);
    }

    /**
     * @param Model $aquarium
     * @param Model $fish
     * @param array $data
     * @return Fish
     */
    public function update(Model $aquarium, Model $fish, array $data): ?Model
    {
        return $this->fishRepository->update($aquarium, $fish, $data);
    }

    /**
     * @param Model $aquarium
     * @param int $id
     * @return Fish
     */
    public function find(Model $aquarium, int $id): ?Model
    {
        return $this->fishRepository->find($aquarium, $id);
    }
}
