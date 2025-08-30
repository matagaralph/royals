<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;

class Ability extends \Silber\Bouncer\Database\Ability {
    use HasUlids;

    public $incrementing = false;
    protected $keyType = 'string';
}
