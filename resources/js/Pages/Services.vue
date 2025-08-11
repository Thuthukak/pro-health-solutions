<template>
  <Layout :seo="seo">
  <Head>
      <title>{{ seo.title }}</title>
      <meta name="description" :content="seo.description" />
      <meta name="keywords" :content="seo.keywords" />
      <link rel="canonical" :href="seo.canonical_url" />
     
      <!-- Open Graph -->
      <meta property="og:title" :content="seo.og_title" />
      <meta property="og:description" :content="seo.og_description" />
      <meta property="og:image" :content="seo.og_image" />
      <meta property="og:url" :content="seo.og_url" />
      <meta property="og:type" :content="seo.og_type" />
      <meta property="og:site_name" :content="seo.og_site_name" />
     
      <!-- Twitter Card -->
      <meta name="twitter:card" :content="seo.twitter_card" />
      <meta name="twitter:title" :content="seo.twitter_title" />
      <meta name="twitter:description" :content="seo.twitter_description" />
      <meta name="twitter:image" :content="seo.twitter_image" />
     
      <!-- Additional SEO -->
      <meta name="robots" :content="seo.robots" />
      <meta name="author" :content="seo.author" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" :content="seo.theme_color" />
      <meta name="msapplication-TileColor" :content="seo.msapplication_TileColor" />
      <meta name="apple-mobile-web-app-capable" :content="seo.apple_mobile_web_app_capable" />
      <meta name="apple-mobile-web-app-status-bar-style" :content="seo.apple_mobile_web_app_status_bar_style" />
      
      <!-- Geo tags -->
      <meta name="geo.region" :content="seo.geo_region" />
      <meta name="geo.placename" :content="seo.geo_placename" />
      <meta name="geo.position" :content="seo.geo_position" />
      <meta name="ICBM" :content="seo.ICBM" />
      
      <!-- Content freshness -->
      <meta name="last-modified" :content="seo.last_modified" />
      <meta property="article:published_time" :content="seo.published_time" />
      <meta property="article:modified_time" :content="seo.modified_time" />
      
      <!-- Preload important images -->
      <link v-for="image in seo.preload_images" :key="image" rel="preload" :href="image" as="image" />
      
      <!-- Structured Data will be added via JavaScript -->
    </Head>

      <!-- Services Section -->
    <section class="services-section" id="services">
      <div class="container">
        <div class="section-header">
          <h2>Our Comprehensive Services</h2>
          <p>End-to-end medical billing and revenue cycle management solutions</p>
        </div>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon"><font-awesome-icon :icon="['fas', 'receipt']" style="color: #1b3169;"></font-awesome-icon></div>
            <h3>Medical Billing & Coding</h3>
            <p>Accurate CPT, ICD-10, and HCPCS coding to ensure maximum reimbursement and compliance with payer requirements.</p>
          </div>
          <div class="service-card">
            <div class="service-icon"><font-awesome-icon :icon="['fas', 'inbox']" style="color: #1b3169;"></font-awesome-icon></div>
            <h3>Claims Submission & Follow-Up</h3>
            <p>We handle all aspects of claims processing, including electronic submission, tracking, and follow-up to minimize rejections and delays.</p>
          </div>
          <div class="service-card">
            <div class="service-icon"><font-awesome-icon :icon="['fas', 'credit-card']" style="color: #1b3169;"></font-awesome-icon></div>
            <h3>Payment Posting & Reconciliation</h3>
            <p>Our team ensures all payments are posted accurately and reconciled against claims to keep your accounts balanced and transparent.</p>
          </div>
          <div class="service-card">
            <div class="service-icon"><font-awesome-icon :icon="['fas', 'arrows-rotate']" style="color: #1b3169;"></font-awesome-icon></div>
            <h3>Rejection Management & Appeals</h3>
            <p>We identify the root cause of rejections and aggressively pursue appeals to recover lost revenue.</p>
          </div>
          <div class="service-card">
            <div class="service-icon"><font-awesome-icon :icon="['fas', 'users']" style="color: #1b3169;"></font-awesome-icon></div>
            <h3>Patient Billing & Support</h3>
            <p>We offer clear, compassionate patient statements and support for any billing questions—reducing confusion and improving satisfaction.</p>
          </div>
          <div class="service-card">
            <div class="service-icon"><font-awesome-icon :icon="['fas', 'chart-column']" style="color: #1b3169;"></font-awesome-icon></div>
            <h3>Customized Reporting & Analytics</h3>
            <p>Gain insights into your financial performance with real-time, customized reports tailored to your practice's goals.</p>
          </div>
        </div>
      </div>
    </section> 

  
  </Layout>
</template>

<script>
// import Navbar from '@/components/Home/Navbar.vue';
import Layout from "../Layouts/HomeLayout.vue";
import { onMounted, computed } from 'vue'
import { Head } from '@inertiajs/vue3'

export default {
  name: 'Services',
  components: { Layout, Head },
  props: {
    seo: {
      type: Object,
      required: true
    },
    structuredData: {
      type: Object,
      required: true
    },
    businessInfo: {
      type: Object,
      required: true
    },
    socialMedia: {
      type: Object,
      required: true
    },
    images: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    // Computed property to JSON encode structured data
    const structuredDataJson = computed(() => {
      return JSON.stringify(props.structuredData)
    })
    
    onMounted(() => {
      // You can now use the structured data in your component logic
      // console.log('Structured Data:', props.structuredData)
      // console.log('Business Info:', props.businessInfo)
      // console.log('Social Media:', props.socialMedia)
      // console.log('Images:', props.images)
      
      // Example: Initialize a map with the coordinates
      if (props.businessInfo.location.coordinates) {
        const { lat, lng } = props.businessInfo.location.coordinates
        // Initialize your map here
        // console.log(`Map coordinates: ${lat}, ${lng}`)
      }
      
      // Example: Set up social media tracking
      Object.entries(props.socialMedia).forEach(([platform, url]) => {
        // console.log(`${platform}: ${url}`)
      })
    })
    
    return {
      structuredDataJson
    }
  },

  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style>
/* Color Variables */
:root {
  --primary-blue: #1b3169;
  --secondary-blue: #14244d;
  --primary-yellow: #ffd400;
  --secondary-yellow: #d99800;
  --white: #ffffff;
  --light-gray: #f8f9fa;
  --dark-gray: #333333;
  --text-gray: #666666;
}
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-blue);
  margin-bottom: 16px;
}

.section-header p {
  font-size: 1.2rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto;
}

.btn-primary, .btn-secondary {
  padding: 16px 32px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: var(--primary-yellow);
  color: var(--primary-blue);
}

.btn-primary:hover {
  background: var(--secondary-yellow);
  transform: translateY(-2px);

}

.btn-secondary {
  background: transparent;
  color: var(--white);
  border: 2px solid var(--white);
}

.btn-secondary:hover {
  background: var(--white);
  color: var(--primary-blue);
  transform: translateY(-2px);
}
/* Services Section */
.services-section {
  padding: 100px 0;
  background: var(--white);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.service-card {
  background: var(--white);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(27, 49, 105, 0.1);
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(27, 49, 105, 0.15);
  border-color: var(--primary-yellow);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 24px;
}

.service-card h3 {
  font-size: 1.4rem;
  color: var(--primary-blue);
  margin-bottom: 16px;
  font-weight: 700;
}

.service-card p {
  color: var(--text-gray);
  line-height: 1.6;
  font-size: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 15px;
  }
  
  .service-card,
  .contact-form {
    padding: 30px 20px;
  }
}

</style>


