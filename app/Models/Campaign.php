<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Campaign extends Model {

    protected $fillable = [
        'company_id',
        'name',
        'start_date',
        'end_date',
        'min_points_per_voucher',
        'set_points_value',
        'status'
    ];
}
