<?php

namespace App\Services;

use App\Repositories\AquariumRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class AquariumService implements IService
{
    /**
     * @var AquariumRepository aquariumRepository
     */
    private $aquariumRepository;

    /**
     * Service constructor.
     *
     * @param AquariumRepository $aquariumRepository
     */
    public function __construct(AquariumRepository $aquariumRepository)
    {
        $this->aquariumRepository = $aquariumRepository;
    }

    /**
     * Get all aquaria.
     *
     * @return Collection
     */
    public function all(): Collection
    {
        return $this->aquariumRepository->all();
    }

    /**
     *
     * @param array $data
     * @return Model|null
     */
    public function save(array $data): ?Model
    {
        return $this->aquariumRepository->save($data);
    }

    /**
     * @param Model $aquarium
     * @param array $data
     * @return mixed
     */
    public function update(Model $aquarium, array $data): ?Model
    {
        return $this->aquariumRepository->update($aquarium, $data);
    }

    /**
     * @param Model $aquarium
     * @return mixed
     * @throws \Exception
     */
    public function delete(Model $aquarium): ?bool
    {
        return $this->aquariumRepository->delete($aquarium);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function find(int $id): ?Model
    {
        return $this->aquariumRepository->find($id);
    }
}
