<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DemoSeeder extends Seeder {

    public function run(): void {
        $roles = ['shopper', 'owner', 'issuer', 'admin'];
        foreach ($roles as $roleName) {
            Role::create([
                'name' => $roleName,
            ]);
        }

        DB::transaction(function () {
            $user = User::create([
                'name' => 'Ralph Mataga',
                'email' => 'test@someone.com',
                'password' => bcrypt('password'),
            ]);


            $user->assignRole('owner');

            $company = Company::create([
                'name' => 'Acme Corporation',
                'owner_id' => $user->id,
            ]);

            $user->company_id = $company->id;
            $user->save();
        });
    }
}
