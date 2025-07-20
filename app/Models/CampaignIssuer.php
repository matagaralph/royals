<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $campaign_id
 * @property int $user_id
 * @property string $assigned_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CampaignIssuer newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CampaignIssuer newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CampaignIssuer query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CampaignIssuer whereAssignedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CampaignIssuer whereCampaignId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CampaignIssuer whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CampaignIssuer whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CampaignIssuer whereUserId($value)
 * @mixin \Eloquent
 */
class CampaignIssuer extends Model
{
    //
}
