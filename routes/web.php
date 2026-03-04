<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('sets', function () {
    return Inertia::render('sets');
});

Route::get('login', function () {
    return Inertia::render('login');
});

Route::get('signup', function () {
    return inertia::render('signup');
});

require __DIR__ . '/settings.php';
