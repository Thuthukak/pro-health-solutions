<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Newsletter;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewsletterSubscriptionMail;
use App\Mail\NewsletterWelcomeMail;
use Validator;

class NewsletterController extends Controller
{
    public function store(Request $request)
    {
        try {
        // Validate the email
        $request->validate([
            'email' => 'required|email|unique:newsletter,email'
        ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
        // Handle unique email validation failure
        if (isset($e->errors()['email'])) {
            return response()->json([
                'message' => 'This email is already subscribed to our newsletter'
            ], 409);
        }
        throw $e; // Re-throw other validation errors
    }

        $email = $request->input('email');
        

        // Create new newsletter subscription
        $newsletter = new Newsletter();
        $newsletter->email = $email;
        $newsletter->save();

        Log::info('Newsletter subscription created', ['email' => $email]);

        // Send email notification to admin
        try {
            Mail::send(new NewsletterSubscriptionMail($email));
            Log::info('Admin notification email sent for newsletter subscription', ['email' => $email]);
        } catch (\Exception $e) {
            Log::error('Failed to send newsletter subscription notification email: ' . $e->getMessage(), [
                'email' => $email,
                'error' => $e->getMessage()
            ]);
        }

        // Send welcome email to subscriber (optional)
        try {
            Mail::send(new NewsletterWelcomeMail($email));
            Log::info('Welcome email sent to newsletter subscriber', ['email' => $email]);
        } catch (\Exception $e) {
            Log::error('Failed to send welcome email to newsletter subscriber: ' . $e->getMessage(), [
                'email' => $email,
                'error' => $e->getMessage()
            ]);
        }

        return response()->json(['message' => 'Subscribed successfully']);
    }
}