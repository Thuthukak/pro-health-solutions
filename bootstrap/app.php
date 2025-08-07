<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {

        // Apply CSP to all HTTP requests
        //$middleware->append(\App\Http\Middleware\ContentSecurityPolicy::class);

        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            // \App\Http\Middleware\ContentSecurityPolicy::class,
        ]);
        
        $middleware->alias([
            // 'auth' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();