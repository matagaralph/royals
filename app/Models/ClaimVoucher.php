<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $campaign_id
 * @property int $reward_id
 * @property string $code
 * @property int|null $shopper_id
 * @property string $status
 * @property int|null $issued_by
 * @property string|null $issued_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClaimVoucher newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClaimVoucher newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClaimVoucher query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClaimVoucher whereCampaignId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClaimVoucher whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClaimVoucher whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClaimVoucher whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClaimVoucher whereIssuedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClaimVoucher whereIssuedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClaimVoucher whereRewardId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClaimVoucher whereShopperId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClaimVoucher whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ClaimVoucher whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ClaimVoucher extends Model
{
    //
}
