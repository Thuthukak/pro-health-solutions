<!DOCTYPE html>
<html>
<head>
    <title>Welcome to Our Newsletter</title>
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
            background-color: #007bff;
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .content {
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 5px;
        }
        .welcome-message {
            text-align: center;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 Welcome!</h1>
            <p>Thank you for subscribing to our newsletter</p>
        </div>

        <div class="content">
            <div class="welcome-message">
                <h2>You're all set!</h2>
                <p>Welcome to the {{ config('app.name') }} newsletter family!</p>
            </div>

            <p>Thank you for subscribing to our newsletter. You'll receive updates about:</p>
            <ul>
                <li>Latest news and updates</li>
                <li>Special offers and promotions</li>
                <li>Industry insights and tips</li>
                <li>Exclusive content just for subscribers</li>
            </ul>

            <p>We respect your privacy and will never share your email address with third parties.</p>
            
            <p>If you ever want to unsubscribe, there will be an unsubscribe link at the bottom of every newsletter email.</p>
        </div>

        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
        
        <p style="text-align: center; color: #666; font-size: 12px;">
            Thank you for joining us!<br>
            {{ config('app.name') }} Team
        </p>
    </div>
</body>
</html>