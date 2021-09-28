<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Fish extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = ['species','color','number_of_fins','aquarium_id'];

    /**
     * The relations to eager load on every query.
     *
     * @var array
     */
    protected $with = ['aquarium'];

    /**
     * @return BelongsTo
     */
    public function aquarium()
    {
        return $this->belongsTo(Aquarium::class, 'aquarium_id');
    }
}
