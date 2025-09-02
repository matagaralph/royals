<?php

namespace App\Http\Middleware;

use App\Enums\UserRole;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckUserRole {
    public function handle(Request $request, Closure $next, string $roles): Response {
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $allowedRoles = collect(explode('|', $roles))
            ->map(fn(string $role) => UserRole::from($role)->value);

        $userRole = $request->user()->getRoleNames()->first();

        if (!$allowedRoles->contains($userRole)) {
            abort(403, 'Access denied.');
        }

        return $next($request);
    }
}
