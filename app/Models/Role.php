<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Silber\Bouncer\Database\Role as BouncerRole;

class Role extends BouncerRole {
    use HasUlids;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $casts = [
        // Remove 'id' => 'int' cast
    ];
}
