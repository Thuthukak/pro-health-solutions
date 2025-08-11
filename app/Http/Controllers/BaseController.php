<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

abstract class BaseController extends Controller
{
    /**
     * Get base SEO data that's common across all pages
     */
    protected function getBaseSeoData()
    {
        return [
            'title' => 'Pro Health Solutions | Medical Billing & Revenue Cycle Experts',
            'description' => 'Pro Health Solutions delivers efficient, accurate, and fully compliant medical billing and revenue cycle management services for healthcare providers across all specialties.',
            'keywords' => 'Pro Health Solutions, medical billing South Africa, revenue cycle management, CPT coding, ICD-10 coding, HCPCS coding, claims submission, rejection management, payment posting, healthcare compliance, patient billing, medical billing services',
            'og_title' => 'Pro Health Solutions | Trusted Medical Billing Partner for All Specialties',
            'og_description' => 'Pro Health Solutions offers tailored medical billing and revenue cycle solutions to help healthcare providers maximize revenue, reduce admin burden, and focus on patient care.',
            'og_image' => asset('assets/images/logo/phs_logo_color_hor@2x.png'),
            'og_type' => 'website',
            'og_site_name' => 'Pro Health Solutions',
            'og_url' => config('app.url'),
            'twitter_card' => 'summary_large_image',
            'canonical_url' => config('app.url'),
        ];
    }

    /**
     * Merge custom SEO data with base SEO data
     */
    protected function mergeSeoData(array $customData = [])
    {
        return array_merge($this->getBaseSeoData(), $customData);
    }

}
