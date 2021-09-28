<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Fish;

class FishSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fish = new Fish();
        $fish->species = 'Silver Dollar';
        $fish->color = 'Silver';
        $fish->number_of_fins = 2;
        $fish->aquarium_id = 1;
        $fish->save();

        $fish1 = new Fish();
        $fish1->species = 'Gold';
        $fish1->color = 'Gold, White';
        $fish1->number_of_fins = 6;
        $fish1->aquarium_id = 2;
        $fish1->save();

        $fish = new Fish();
        $fish->species = 'Guppy';
        $fish->color = 'Red, Black, Yellow';
        $fish->number_of_fins = 6;
        $fish->aquarium_id = 3;
        $fish->save();

        $fish = new Fish();
        $fish->species = 'Rainbow';
        $fish->color = 'Red, Orange, Yellow, Green, Blue, Indigo, Violet';
        $fish->number_of_fins = 6;
        $fish->aquarium_id = 5;
        $fish->save();

        $fish = new Fish();
        $fish->species = 'Siamese Fighting';
        $fish->color = 'Red, Black';
        $fish->number_of_fins = 2;
        $fish->aquarium_id = 4;
        $fish->save();

        $fish = new Fish();
        $fish->species = 'Guppy';
        $fish->color = 'Red, Black, Yellow';
        $fish->number_of_fins = 6;
        $fish->aquarium_id = 5;
        $fish->save();

        $fish = new Fish();
        $fish->species = 'Gold';
        $fish->color = 'Gold, White';
        $fish->number_of_fins = 6;
        $fish->aquarium_id = 6;
        $fish->save();
    }
}
