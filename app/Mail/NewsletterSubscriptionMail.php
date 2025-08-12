<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewsletterSubscriptionMail extends Mailable
{
    use Queueable, SerializesModels;

    public $email;
    public $subscriptionDate;

    public function __construct($email)
    {
        $this->email = $email;
        $this->subscriptionDate = now();
    }

    public function build()
    {
        return $this->from(config('mail.from.address'), config('mail.from.name'))
                    ->to(config('mail.from.admin_address'))
                    ->subject('New Newsletter Subscription')
                    ->view('emails.newsletter-subscription')
                    ->with([
                        'subscriberEmail' => $this->email,
                        'subscriptionDate' => $this->subscriptionDate
                    ]);
    }
}