<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AquariumController;
use App\Http\Controllers\FishController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth'], function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);

    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('logout', [AuthController::class, 'logout']);
    });
});

Route::group(['middleware' => 'auth:api'], function () {
    Route::group(['middleware' => 'scope:user'], function () {
        Route::prefix('aquariums/user')->group(function () {
            Route::get('', [AquariumController::class, 'index']);
            Route::get('{aquarium}', [AquariumController::class, 'show']);
        
            Route::prefix('{aquarium}/fishes')->group(function () {
                Route::get('', [FishController::class, 'index']);
                Route::get('{fish}', [FishController::class, 'show']);
            });
        });
    });

    Route::group(['middleware' => 'scope:admin'], function () {
        Route::prefix('aquariums')->group(function () {
            Route::get('', [AquariumController::class, 'index']);
            Route::post('', [AquariumController::class, 'store']);
            Route::get('{aquarium}', [AquariumController::class, 'show']);
            Route::put('{aquarium}', [AquariumController::class, 'update']);
            Route::delete('{aquarium}', [AquariumController::class, 'destroy']);
        
            Route::prefix('{aquarium}/fishes')->group(function () {
                Route::get('', [FishController::class, 'index']);
                Route::post('', [FishController::class, 'store']);
                Route::get('{fish}', [FishController::class, 'show']);
                Route::put('{fish}', [FishController::class, 'update']);
                Route::delete('{fish}', [FishController::class, 'destroy']);
            });
        });
    });
});