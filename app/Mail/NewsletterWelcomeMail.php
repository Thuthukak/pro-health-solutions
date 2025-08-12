<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewsletterWelcomeMail extends Mailable
{
    use Queueable, SerializesModels;

    public $subscriberEmail;

    public function __construct($subscriberEmail)
    {
        $this->subscriberEmail = $subscriberEmail;
    }

    public function build()
    {
        return $this->from(config('mail.from.address'), config('mail.from.name'))
                    ->to($this->subscriberEmail)
                    ->subject('Welcome to Our Newsletter!')
                    ->view('emails.newsletter-welcome');
    }
}