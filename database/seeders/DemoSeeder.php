<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\User;
use Bouncer;
use Illuminate\Database\Seeder;

class DemoSeeder extends Seeder {
    public function run(): void {
        $user = User::create([
            'name' => 'Ralph Mataga',
            'email' => 'test@example.com',
            'password' => bcrypt('password'),
        ]);
      
        Bouncer::assign('owner')->to($user);
        $company = Company::create([
            'name' => 'Acme Corporation',
            'owner_id' => $user->id
        ]);
        $user->company_id = $company->id;
        $user->save();
    }
}
