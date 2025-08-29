<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Silber\Bouncer\BouncerFacade as Bouncer;

class RolesAndAbilitiesSeeder extends Seeder {

    public function run(): void {
        Bouncer::role()->firstOrCreate([
            'name' => 'admin',
            'title' => 'Administrator',
        ]);

        Bouncer::role()->firstOrCreate([
            'name' => 'owner',
            'title' => 'Organisation Owner',
        ]);

        Bouncer::role()->firstOrCreate([
            'name' => 'issuer',
            'title' => 'Campaign Issuer',
        ]);

        Bouncer::role()->firstOrCreate([
            'name' => 'shopper',
            'title' => 'Customer',
        ]);
    }
}
