<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Aquarium extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = ['name','glass_type','size','shape', 'location'];

    /**
     * @return HasMany
     */
    public function fish()
    {
        return $this->hasMany(Fish::class);
    }
}
