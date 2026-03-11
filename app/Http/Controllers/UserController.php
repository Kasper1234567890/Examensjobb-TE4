<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    public function create()
    {
        return Inertia::render('Register');
    }

    public function store(Request $request)
    {



        $validated = $request->validate([
            'username' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);




        User::create([
            'username' => $validated['username'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password'])
        ]);


        return redirect('/register');
    }
}
