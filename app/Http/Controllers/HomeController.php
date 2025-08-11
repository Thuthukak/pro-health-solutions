<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends BaseController
{
    public function Home()
    {
        // Define hero images for server-side rendering
        $heroImages = [
            'left' => asset('assets/images/left.png'),
            'top' => asset('assets/images/top.png'),
            'right' => asset('assets/images/right.png'),
        ];

        $aboutImage = asset('assets/images/p-logo.png');

        $serviceIcons = [
            'web_development' => asset('assets/gifs/worldwide.gif'),
            'product_design' => asset('assets/gifs/dairy-products.gif'),
            'graphic_design' => asset('assets/gifs/design.gif'),
            'identity_design' => asset('assets/gifs/passport.gif'),
            'ecommerce' => asset('assets/gifs/online-supermarket.gif'),
            'digital_marketing' => asset('assets/gifs/responsive-design.gif'),
        ];

        // Customize SEO data for home page
        $seoData = $this->mergeSeoData([
            'description' => 'We are a team of passionate designers and developers dedicated to creating exceptional digital experiences. Specializing in web development, graphic design, branding, and digital marketing.',
            'og_description' => 'Professional web design and development services. Create stunning websites, powerful branding, and effective digital marketing campaigns.',
        ]);

        // Services data for better SEO
        $services = [
            [
                'title' => 'Web Development',
                'description' => 'We incorporate the latest design trends, intuitive navigation, and engaging visuals to ensure that your website stands out.',
                'url' => '/services/web-design',
                'icon' => $serviceIcons['web_development'],
            ],
            [
                'title' => 'Product Design',
                'description' => 'We specialize in turning your innovative ideas into tangible products that resonate with your audience and drive success.',
                'url' => '/services/product-design',
                'icon' => $serviceIcons['product_design'],
            ],
            [
                'title' => 'Graphic Design',
                'description' => 'Posters, flyers, and banners, brochures, business cards, infographics, social media graphics, and packaging design.',
                'url' => '/services/graphic-design',
                'icon' => $serviceIcons['graphic_design'],
            ],
            [
                'title' => 'Identity Design',
                'description' => 'We help develop a strong brand identity through logo design, brand guidelines, brand strategy, and brand messaging.',
                'url' => '/services/identity-design',
                'icon' => $serviceIcons['identity_design'],
            ],
            [
                'title' => 'E-Commerce Solutions',
                'description' => 'We provide e-commerce design and development services, including online store setup, product listing, payment integration, and order management.',
                'url' => '/services/e-commerce',
                'icon' => $serviceIcons['ecommerce'],
            ],
            [
                'title' => 'Digital Marketing',
                'description' => 'We provide digital marketing services, including search engine optimization (SEO), social media marketing, content marketing, email marketing, etc.',
                'url' => '/services/digital-marketing',
                'icon' => $serviceIcons['digital_marketing'],
            ],
        ];

        // Structured Data for SEO
        $structuredData = [
            '@context' => 'https://schema.org',
            '@type' => 'Organization',
            'name' => 'Penda Graphics',
            'description' => $seoData['description'],
            'url' => $seoData['og_url'],
            'logo' => $seoData['og_image'],
            'contactPoint' => [
                '@type' => 'ContactPoint',
                'contactType' => 'customer service',
                'availableLanguage' => 'English'
            ],
            'sameAs' => [
                // Add your social media URLs here
                'https://web.facebook.com/Penda.graphix',
                'https://www.instagram.com/penda_graphics/',
                'https://www.youtube.com/@PendaGraphics',
                'https://www.tiktok.com/@pendagraphics?_t=ZM-8xCbzWLUJ7Q&_r=1',
            ],
            'service' => array_map(function($service) {
                return [
                    '@type' => 'Service',
                    'name' => $service['title'],
                    'description' => $service['description']
                ];
            }, $services)
        ];

        return Inertia::render('Home', [
            'heroImages' => $heroImages,
            'aboutImage' => $aboutImage,
            'services' => $services,
            'seo' => $seoData,
            'structuredData' => json_encode($structuredData),
        ]);
    }


    public function AdminAuth () {

        $seoData = $this->mergeSeoData([
            'title' => 'Admin Authentication - Pro Health Solutions',
            'description' => 'Admin Authentication page for Pro Health Solutions',
            'keywords' => 'Pro Health Solutions, medical billing South Africa, revenue cycle management, CPT coding, ICD-10 coding, HCPCS coding, claims submission, rejection management, payment posting, healthcare compliance, patient billing, medical billing services',
            'og_title' => 'Admin Authentication | Pro Health Solutions',
            'hero_image' => asset('assets/images/3436542.png'),
        ]);

        return Inertia::render('Admin', [
            'seo' => $seoData
        ]);
    }

    public function ServiceIndex () {
    {
        $seoData = $this->mergeSeoData([
        // Override specific SEO data for this page
        'title' => 'Medical Billing & Revenue Cycle Management Services | Pro Health Solutions',
        'description' => 'Pro Health Solutions provides efficient, accurate, and fully compliant medical billing and revenue cycle management services for healthcare providers across all specialties.',
        'keywords' => 'Pro Health Solutions, medical billing South Africa, revenue cycle management, CPT coding, ICD-10 coding, HCPCS coding, claims submission, denial management, payment posting, healthcare compliance, patient billing, medical billing services',
        'og_title' => 'Pro Health Solutions | Trusted Medical Billing Partner',
        'og_description' => 'Tailored medical billing solutions to maximize revenue, reduce administrative burden, and ensure compliance — so you can focus on patient care.',
        'canonical_url' => url('/service'),
        'sec_img' => asset('assets/images/color-bulb.jpg'),
    ]);

        return Inertia::render('Services', [
            'seo' => $seoData
        ])->with('seo', $seoData);
    }
    }

    public function whyUsIndex () {
        {
        $seoData = $this->mergeSeoData([
        // Override specific SEO data for this page
        'title' => 'Why Choose Pro Health Solutions | Trusted Medical Billing Experts',
        'description' => 'Discover why healthcare providers across all specialties trust Pro Health Solutions for efficient, accurate, and fully compliant medical billing and revenue cycle management services.',
        'keywords' => 'Pro Health Solutions, medical billing South Africa, revenue cycle management, healthcare compliance, patient billing, CPT coding, ICD-10 coding, HCPCS coding, claims submission, denial management, payment posting',
        'og_title' => 'Why Choose Pro Health Solutions | Your Partner in Medical Billing Excellence',
        'og_description' => 'We combine advanced technology, personalized support, and proven results to help healthcare providers maximize revenue and focus on patient care.',
        'canonical_url' => url('/why-us'),
        'sec_img' => asset('assets/images/color-bulb.jpg'),
    ]);

        return Inertia::render('WhyUs', [
            'seo' => $seoData
        ])->with('seo', $seoData);
    }
    }


    public function FaqIndex () {
    $seoData = $this->mergeSeoData([
        'title' => 'FAQ - Frequently Asked Questions About Our Web Design, Graphic Design, Branding, E-commerce, and Digital Marketing Services | Penda Graphics',
        'description' => 'Get answers to common questions about web design, graphic design, branding, e-commerce solutions, and digital marketing services. Expert advice from Penda Graphics South Africa.',
        'keywords' => 'FAQ, web design questions, graphic design FAQ, branding questions, e-commerce FAQ, digital marketing help, website design cost, logo design questions, South Africa web design',
        'og_title' => 'Frequently Asked Questions | Penda Graphics Design Services',
        'og_description' => 'Find answers to your questions about our web design, branding, and digital marketing services. Get expert insights from South Africa\'s leading creative agency.',
        'canonical_url' => config('app.url') . '/faq',
    ]);
    
    // Add structured data for FAQ
    $structuredData = [
        '@context' => 'https://schema.org',
        '@type' => 'FAQPage',
        'mainEntity' => [
            [
                '@type' => 'Question',
                'name' => 'Do you build responsive websites?',
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => 'Yes, all our websites are mobile-friendly and fully responsive across devices.'
                ]
            ],
            [
                '@type' => 'Question',
                'name' => 'How much does web design cost?',
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => 'The cost of web design can vary widely depending on factors such as the complexity of the project, the level of customization required, the experience of the design team, and additional services such as SEO or content creation. It\'s best to discuss your specific needs and budget with a web design agency to get an accurate quote.'
                ]
            ],
            [
                '@type' => 'Question',
                'name' => 'What types of designs do you offer?',
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => 'We offer everything from logos and flyers to packaging and promotional materials.'
                ]
            ],
            [
                '@type' => 'Question',
                'name' => 'Do you offer payment gateway integration?',
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => 'Yes, we integrate with major gateways like PayFast, PayPal, and Stripe.'
                ]
            ],
            [
                '@type' => 'Question',
                'name' => 'Do you manage social media accounts?',
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => 'Yes, we can manage and grow your social media presence across multiple platforms.'
                ]
            ],
            [
                '@type' => 'Question',
                'name' => 'What types of identity design services do you offer?',
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => 'We offer everything from logo design to brand guidelines.'
                ]
            ]
        ]
    ];
    
    return Inertia::render('Faq', [
        'seo' => $seoData, 
        'structuredData' => json_encode($structuredData),
    ]);
}

public function AboutUsIndex()
{
    $seoData = $this->mergeSeoData([
        // Basic SEO
        'title' => 'About Us | Pro Health Solutions - Medical Billing & Revenue Cycle Experts',
        'description' => 'Learn about Pro Health Solutions, a trusted South African partner delivering efficient, accurate, and compliant medical billing and revenue cycle management services for healthcare providers across all specialties.',
        'keywords' => 'about Pro Health Solutions, medical billing South Africa, revenue cycle management, CPT coding, ICD-10 coding, HCPCS coding, claims submission, denial management, payment posting, healthcare compliance, patient billing, medical billing services',
        'canonical_url' => url('/about-us'),

        // Open Graph (Facebook, LinkedIn, etc.)
        'og_title' => 'About Pro Health Solutions - Trusted Medical Billing Partner',
        'og_description' => 'Pro Health Solutions empowers healthcare providers with seamless, transparent, and accurate revenue cycle solutions so they can focus on exceptional patient care.',
        'og_image' => asset('assets/images/logo/phs_logo_color_hor@2x.png'),
        'og_url' => url('/about-us'),
        'og_type' => 'website',
        'og_site_name' => 'Pro Health Solutions',

        // Twitter Card
        'twitter_card' => 'summary_large_image',
        'twitter_title' => 'About Pro Health Solutions - Medical Billing Experts',
        'twitter_description' => 'Delivering dependable, compliant, and tailored medical billing services for doctors of every specialty.',
        'twitter_image' => asset('assets/images/logo/phs_logo_color_hor@2x.png'),

        // Additional SEO data
        'author' => 'Pro Health Solutions',
        'robots' => 'index, follow',
        'revisit_after' => '7 days',
        'language' => 'en-US',
        'geo_region' => 'ZA-GP',
        'geo_placename' => 'Johannesburg, Gauteng, South Africa',
        'geo_position' => '-26.1186;28.2294',
        'ICBM' => '-26.1186, 28.2294',


        // Breadcrumbs
        'breadcrumbs' => [
            ['name' => 'Home', 'url' => url('/')],
            ['name' => 'About Us', 'url' => url('/about-us')]
        ],

        // Additional meta tags
        'theme_color' => '#043550ff',
        'msapplication_TileColor' => '#f6e211ff',
        'apple_mobile_web_app_capable' => 'yes',
        'apple_mobile_web_app_status_bar_style' => 'default',

        // Performance and technical SEO
        'preload_images' => [
            asset('assets/images/logo/phs_logo_color_hor@2x.png'),
            
        ],

        // Content freshness
        'last_modified' => now()->toISOString(),
        'published_time' => '2025-01-01T00:00:00+00:00',
        'modified_time' => now()->toISOString(),
    ]);

    // Structured Data for Schema.org
    $structuredData = [
        '@context' => 'https://schema.org',
        '@type' => 'Organization',
        'name' => 'Pro Health Solutions',
        'description' => 'Pro Health Solutions provides efficient, accurate, and fully compliant medical billing and revenue cycle management services to healthcare providers across all specialties.',
        'url' => url('/'),
        'logo' => asset('assets/images/logo/phs_logo_color_hor@2x.png'),
        'address' => [
            '@type' => 'PostalAddress',
            'addressLocality' => 'Johannesburg',
            'addressRegion' => 'Gauteng',
            'addressCountry' => 'ZA'
        ],
        'contactPoint' => [
            '@type' => 'ContactPoint',
            'telephone' => ['063 492 3419', '067 935 8660'],
            'email' => 'info@prohealthsolutions.co.za',
            'contactType' => 'customer service'
        ],
        'foundingDate' => '2025',
        'sameAs' => [
            'https://www.facebook.com/prohealthsolutions',
            'https://www.instagram.com/prohealthsolutions/',
        ],
        'hasOfferCatalog' => [
            '@type' => 'OfferCatalog',
            'name' => 'Medical Billing & Revenue Cycle Services',
            'itemListElement' => [
                ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Service', 'name' => 'Medical Billing & Coding']],
                ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Service', 'name' => 'Claims Submission & Follow-Up']],
                ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Service', 'name' => 'Payment Posting & Reconciliation']],
                ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Service', 'name' => 'Denial Management & Appeals']],
                ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Service', 'name' => 'Patient Billing & Support']],
                ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Service', 'name' => 'Customized Reporting & Analytics']],
            ]
        ],
        'openingHoursSpecification' => [
            [
                '@type' => 'OpeningHoursSpecification',
                'dayOfWeek' => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                'opens' => '08:00',
                'closes' => '17:00'
            ],
            [
                '@type' => 'OpeningHoursSpecification',
                'dayOfWeek' => 'Saturday',
                'opens' => '09:00',
                'closes' => '13:00'
            ]
        ]
    ];

    // Business information for component use
    $businessInfo = [
        'hours' => [
            'monday' => '08:00-17:00',
            'tuesday' => '08:00-17:00',
            'wednesday' => '08:00-17:00',
            'thursday' => '08:00-17:00',
            'friday' => '08:00-17:00',
            'saturday' => '09:00-13:00',
            'sunday' => 'closed'
        ],
        'contact' => [
            'phone' => ['063 492 3419', '067 935 8660'],
            'email' => 'info@probillsolutions.co.za'
        ],
        'location' => [
            'address' => 'Johannesburg, Gauteng, South Africa',
            'coordinates' => [
                'lat' => -26.1186,
                'lng' => 28.2294
            ]
        ],
        'founded' => '2025',
        'services' => [
            'Medical Billing & Coding',
            'Claims Submission & Follow-Up',
            'Payment Posting & Reconciliation',
            'Denial Management & Appeals',
            'Patient Billing & Support',
            'Customized Reporting & Analytics'
        ]
    ];

    // Social media links
    $socialMedia = [
        'facebook' => 'https://www.facebook.com/prohealthsolutions',
        'instagram' => 'https://www.instagram.com/prohealthsolutions/',
    ];

    // Images for the component
    $images = [
        'logo' => asset('assets/images/logo/phs_logo_color_hor@2x.png'),
        'approach' => asset('assets/images/approach.png'),
        'team' => asset('assets/images/color-bulb.jpg'),
        'company_logo' => asset('assets/images/phs_logo_color_hor@2x.png')
    ];

    return Inertia::render('AboutUS', [
        'seo' => $seoData,
        'structuredData' => $structuredData,
        'businessInfo' => $businessInfo,
        'socialMedia' => $socialMedia,
        'images' => $images
    ]);
}


   public function ContactIndex()
{
    // Customize SEO data for contact page
    $seoData = $this->mergeSeoData([
        'title' => 'Contact Us | Pro Health Solutions - Medical Billing & Revenue Cycle Experts',
        'description' => 'Get in touch with Pro Health Solutions for professional medical billing and revenue cycle management services. Call 063 492 3419 or 067 935 8660 for a consultation.',
        'keywords' => 'contact Pro Health Solutions, medical billing South Africa, revenue cycle management contact, healthcare billing services, CPT coding contact, ICD-10 coding contact, claims submission contact',
        'og_title' => 'Contact Pro Health Solutions | Medical Billing Specialists',
        'og_description' => 'Contact our expert team for tailored medical billing and revenue cycle solutions. Serving healthcare providers across South Africa.',
        'og_type' => 'website',
        'og_url' => url('/contact-us'),
        'canonical_url' => url('/contact-us'),
        'twitter_title' => 'Contact Pro Health Solutions | Medical Billing & Revenue Cycle Experts',
        'twitter_description' => 'Get in touch with Pro Health Solutions for professional medical billing and revenue cycle management services.',
    ]);

    // Structured Data for SEO
    $structuredData = [
        '@context' => 'https://schema.org',
        '@type' => 'ContactPage',
        'mainEntity' => [
            '@type' => 'LocalBusiness',
            'name' => 'Pro Health Solutions',
            'description' => 'Efficient, accurate, and fully compliant medical billing and revenue cycle management services.',
            'url' => config('app.url'),
            'telephone' => ['+27634923419', '+27679358660'],
            'email' => 'info@prohealthsolutions.co.za',
            'address' => [
                '@type' => 'PostalAddress',
                'addressLocality' => 'Johannesburg',
                'addressRegion' => 'Gauteng',
                'addressCountry' => 'ZA'
            ],
            'geo' => [
                '@type' => 'GeoCoordinates',
                'latitude' => -26.2041,
                'longitude' => 28.0473
            ],
            'openingHours' => 'Mo-Fr 08:00-17:00',
            'sameAs' => [
                'https://www.facebook.com/prohealthsolutions',
                'https://www.instagram.com/prohealthsolutions/'
            ],
            'priceRange' => '$$',
            'areaServed' => [
                '@type' => 'Country',
                'name' => 'South Africa'
            ],
            'serviceType' => [
                'Medical Billing & Coding',
                'Claims Submission & Follow-Up',
                'Payment Posting & Reconciliation',
                'Denial Management & Appeals',
                'Patient Billing & Support',
                'Customized Reporting & Analytics'
            ]
        ]
    ];

    // Additional contact-specific data
    $contactInfo = [
        'phone' => ['063 492 3419', '067 935 8660'],
        'email' => 'info@prohealthsolutions.co.za',
        'address' => 'Johannesburg, Gauteng, South Africa',
        'business_hours' => 'Monday - Friday: 8am - 5pm'
    ];

    return Inertia::render('ContactUs', [
        'seo' => $seoData,
        'structuredData' => json_encode($structuredData),
        'contactInfo' => $contactInfo,
    ]);
}
}