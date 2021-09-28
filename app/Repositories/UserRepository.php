<?php

namespace App\Repositories;

use App\Notifications\SignupActivate;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class UserRepository implements IRepository
{
    /**
     * Get all users.
     *
     * @return User[]|Collection
     */
    public function all(): Collection
    {
        $users = User::all();
        return $users;
    }

    /**
     * @param Model $client
     * @return Collection
     */
    public function retrieve(Model $client): Collection
    {
        $users = User::where('client_id', $client->id)->get();
        return $users;
    }

    /**
     * Save User
     *
     * @param $data
     * @return User
     */
    public function save(array $data): ?Model
    {
        // var_dump($data);
        $user = new User();
        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->password = bcrypt($data['password']);
        // $user = $user->fill($data);

        $user->save();

        // $user->notify(new SignupActivate());

        return $user->refresh();
    }

    /**
     * @param string $email
     * @return mixed
     */
    public function findByEmail(string $email): ?User
    {
        return User::firstWhere('email', $email);
    }

    /**
     * @param string $token
     * @return mixed
     */
    public function findByToken(string $token): ?User
    {
        return User::where('activation_token', $token)->first();
    }

    /**
     * @param Model $user
     * @param array $data
     * @return mixed
     */
    public function update(Model $user, array $data): ?Model
    {
        $user = $user->fill($data);
        $user->update();

        return $user->refresh();
    }

    /**
     * @param Model $user
     * @return mixed
     * @throws \Exception
     */
    public function delete(Model $user): ?bool
    {
        return $user->delete();
    }

    /**
     * @param $id
     * @return mixed
     */
    public function find(int $id): ?Model
    {
        return User::findOrFail($id);
    }

    public function activate(User $user): ?User
    {
        $user->active = true;
        $user->activation_token = null;
        $user->email_verified_at = Carbon::now();
        $user->save();

        return $user->refresh();
    }

    /**
     * Get logged in user.
     *
     * @return User|null
     */
    public function profile(): ?User
    {
        $user = auth()->user();
        return $user;
    }
}
