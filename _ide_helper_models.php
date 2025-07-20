<?php

// @formatter:off
// phpcs:ignoreFile
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * @property int $id
 * @property int $company_id
 * @property string $name
 * @property string $start_date
 * @property string $end_date
 * @property int $min_points_per_voucher
 * @property string $set_points_value
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Campaign newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Campaign newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Campaign query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Campaign whereCompanyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Campaign whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Campaign whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Campaign whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Campaign whereMinPointsPerVoucher($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Campaign whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Campaign whereSetPointsValue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Campaign whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Campaign whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Campaign whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	class Campaign extends \Eloquent {}
}

namespace App\Models{
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
	class CampaignIssuer extends \Eloquent {}
}

namespace App\Models{
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
	class ClaimVoucher extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string $name
 * @property string $logo_url
 * @property int $owner_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereLogoUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereOwnerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	class Company extends \Eloquent {}
}

namespace App\Models{
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
	class Reward extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Laravel\Sanctum\PersonalAccessToken> $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	class User extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property int $campaign_id
 * @property int $company_id
 * @property string $code
 * @property int $points_value
 * @property string|null $reference
 * @property int|null $issued_by
 * @property int $is_used
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Voucher newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Voucher newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Voucher query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Voucher whereCampaignId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Voucher whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Voucher whereCompanyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Voucher whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Voucher whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Voucher whereIsUsed($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Voucher whereIssuedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Voucher wherePointsValue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Voucher whereReference($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Voucher whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	class Voucher extends \Eloquent {}
}

