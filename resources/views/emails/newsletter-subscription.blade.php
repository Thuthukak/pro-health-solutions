<!DOCTYPE html>
<html>
<head>
    <title>New Newsletter Subscription</title>
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
            background-color: #28a745;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .content {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .subscriber-info {
            background-color: white;
            padding: 15px;
            border-left: 4px solid #28a745;
            margin: 15px 0;
        }
        .field {
            margin-bottom: 10px;
        }
        .field strong {
            color: #555;
        }
        .icon {
            font-size: 24px;
            margin-right: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>📧 New Newsletter Subscription!</h2>
            <p>Someone just subscribed to your newsletter</p>
        </div>

        <div class="content">
            <h3>Subscription Details</h3>
            
            <div class="subscriber-info">
                <div class="field">
                    <strong>Email Address:</strong> {{ $subscriberEmail }}
                </div>
                
                <div class="field">
                    <strong>Subscription Date:</strong> {{ $subscriptionDate->format('F j, Y') }}
                </div>
                
                <div class="field">
                    <strong>Subscription Time:</strong> {{ $subscriptionDate->format('g:i A') }}
                </div>
            </div>

            <p>This subscriber has been automatically added to your newsletter list.</p>
        </div>

        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
        
        <p style="text-align: center; color: #666; font-size: 12px;">
            This notification was sent from {{ config('app.name') }} on {{ now()->format('Y-m-d H:i:s') }}
        </p>
    </div>
</body>
</html>