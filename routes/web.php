<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/register', [UserController::class, 'create']);
Route::post('/register', [UserController::class, 'store']);

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('sets', function () {
    return Inertia::render('sets');
})->name('sets');

Route::get('login', function () {
    return Inertia::render('login');
})->name('login');

Route::get('signup', function () {
    return Inertia::render('signup');
})->name('signup');
