<?php

namespace App\Providers;

use Bouncer;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider {
    public function register(): void {
        //
    }

    public function boot(): void {
        Bouncer::useRoleModel(\App\Models\Role::class);
        Bouncer::useAbilityModel(\App\Models\Ability::class);
    }
}
