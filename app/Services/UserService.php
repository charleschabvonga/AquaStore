<?php

namespace App\Services;

use App\Repositories\UserRepository;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class UserService implements IService
{
    /**
     * @var UserRepository $userRepository
     */
    private $userRepository;

    /**
     * UserService constructor.
     *
     * @param UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * Get all users.
     *
     * @return Collection
     */
    public function all(): Collection
    {
        return $this->userRepository->all();
    }

    /**
     * Validate user data.
     * Store to DB if there are no errors.
     *
     * @param array $data
     * @return Model|null
     */
    public function save(array $data): ?Model
    {
        return $this->userRepository->save($data);
    }

    /**
     * @param Model $client
     * @return Collection
     */
    public function retrieve(Model $client): Collection
    {
        return $this->userRepository->retrieve($client);
    }

    /**
     * @param string $email
     * @return mixed
     */
    public function findByEmail(string $email): ?Model
    {
        return $this->userRepository->findByEmail($email);
    }

    /**
     * @param string $token
     * @return mixed
     */
    public function findByToken(string $token): ?Model
    {
        return $this->userRepository->findByToken($token);
    }

    /**
     * @param Model $user
     * @param array $data
     * @return mixed
     */
    public function update(Model $user, array $data): ?Model
    {
        return $this->userRepository->update($user, $data);
    }

    /**
     * @param Model $user
     * @return mixed
     * @throws \Exception
     */
    public function delete(Model $user): ?bool
    {
        return $this->userRepository->delete($user);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function find(int $id): ?Model
    {
        return $this->userRepository->find($id);
    }

    public function activate(User $user): ?User
    {
        // prevents the password from being updated by the observer
        return User::withoutEvents(function () use ($user) {
            return $this->userRepository->activate($user);
        });
    }

    /**
     * @return User|null
     */
    public function profile(): ?User
    {
        return $this->userRepository->profile();
    }
}
