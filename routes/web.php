<?php

use App\Http\Controllers\Owner\CampaignController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    if (Auth::check()) {
        $user = Auth::user();
        $userRole = $user->getRoleNames()->first();
        if ($userRole == 'owner') return redirect()->route('admin');
        else return redirect()->route('ma');
    }
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::middleware('role:shopper')->group(function () {
        Route::get('ma', function () {
            return Inertia::render('ma');
        })->name('ma');
    });

    Route::middleware('role:owner|issuer')->group(function () {
        Route::prefix('admin')->group(function () {
            Route::get('/', [CampaignController::class, 'index'])->name('admin');

        });
    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
