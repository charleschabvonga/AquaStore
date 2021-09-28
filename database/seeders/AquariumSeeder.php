<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Aquarium;

class AquariumSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $aquarium = new Aquarium();
        $aquarium->name = 'AG-1';
        $aquarium->glass_type = 'Glass';
        $aquarium->size = 65;
        $aquarium->shape = 'Rectangle';
        $aquarium->location = 'South Africa';
        $aquarium->save();

        $aquarium1 = new Aquarium();
        $aquarium1->name = 'AA-2';
        $aquarium1->glass_type = 'Acrylic';
        $aquarium1->size = 85;
        $aquarium1->shape = 'Square';
        $aquarium1->location = 'South Africa';
        $aquarium1->save();

        $aquarium2 = new Aquarium();
        $aquarium2->name = 'AG-3';
        $aquarium2->glass_type = 'Glass';
        $aquarium2->size = 85;
        $aquarium2->shape = 'Rectangle';
        $aquarium2->location = 'South Africa';
        $aquarium2->save();

        $aquarium3 = new Aquarium();
        $aquarium3->name = 'AG-4';
        $aquarium3->glass_type = 'Glass';
        $aquarium3->size = 65*0.264172;
        $aquarium3->shape = 'Rectangle';
        $aquarium3->location = 'United States of America';
        $aquarium3->save();

        $aquarium4 = new Aquarium();
        $aquarium4->name = 'AG-5';
        $aquarium4->glass_type = 'Glass';
        $aquarium4->size = 85*0.264172;
        $aquarium4->shape = 'Square';
        $aquarium4->location = 'United States of America';
        $aquarium4->save();

        $aquarium5 = new Aquarium();
        $aquarium5->name = 'AG-6';
        $aquarium5->glass_type = 'Glass';
        $aquarium5->size = 85*0.264172;
        $aquarium5->shape = 'Square';
        $aquarium5->location = 'United States of America';
        $aquarium5->save();
    }
}
