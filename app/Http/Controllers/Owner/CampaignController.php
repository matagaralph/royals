<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class CampaignController extends Controller {
    public function index() {
        $company = auth()->user()->company()->firstOrFail();
        $campaigns = $company->campaigns()->orderBy('created_at')->get();
        return Inertia::render('admin/campaigns', ['campaigns' => $campaigns]);
    }
}
