<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property int $points_required
 * @property int $campaign_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Reward newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Reward newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Reward query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Reward whereCampaignId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Reward whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Reward whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Reward whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Reward wherePointsRequired($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Reward whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Reward extends Model
{
    //
}
