<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;

class ContactController extends Controller
{
    public function contactForm(Request $request)
    {
        Log::info('in contact form method');
        
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'practice' => 'required',
            'specialty' => 'required',
            'message' => 'required',
        ]);
        
        Log::info('data', $validated);
        
        // Create the contact record
        Contact::create($validated);
        Log::info('contact created successfully');
        
        // Send email to admin
        try {
            Mail::send(new ContactFormMail($validated));
            Log::info('Admin notification email sent successfully');
        } catch (\Exception $e) {
            Log::error('Failed to send admin notification email: ' . $e->getMessage());
            // Note: We don't fail the request if email fails, just log it
        }
        
        return response()->json([
            'message' => 'Message sent successfully',
        ], 201);
    }
}
