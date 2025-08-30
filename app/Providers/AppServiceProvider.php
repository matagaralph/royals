<?php

namespace App\Providers;

use Bouncer;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider {
    public function register(): void {
        //
    }

    public function boot(): void {
        if ($this->app->environment('production')) {
            \URL::forceScheme('https');
        }
        Bouncer::useRoleModel(\App\Models\Role::class);
        Bouncer::useAbilityModel(\App\Models\Ability::class);
    }
}
