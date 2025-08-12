<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #f8f9fa;
            padding: 20px;
            text-align: center;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .field {
            margin-bottom: 15px;
        }
        .field strong {
            display: inline-block;
            width: 100px;
            color: #555;
        }
        .message-box {
            background-color: #f8f9fa;
            padding: 15px;
            border-left: 4px solid #007bff;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Contact Form Submission</h2>
            <p>You have received a new message from your website contact form.</p>
        </div>

        <div class="field">
            <strong>Name:</strong> {{ $data['name'] }}
        </div>

        <div class="field">
            <strong>Email:</strong> {{ $data['email'] }}
        </div>

        <div class="field">
            <strong>Practice:</strong> {{ $data['practice'] }}
        </div>

        <div class="field">
            <strong>Specialty:</strong> {{ $data['specialty'] }}
        </div>

        <div class="message-box">
            <strong>Message:</strong><br>
            {{ $data['message'] }}
        </div>

        <hr style="margin: 20px 0;">
        
        <p><small>This email was sent from {{ config('app.name') }} contact form on {{ now()->format('Y-m-d H:i:s') }}</small></p>
    </div>
</body>
</html>