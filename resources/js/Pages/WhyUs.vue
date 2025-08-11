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

    <!-- Why Choose Us Section -->
    <section class="why-choose-section" id="why">
      <div class="container">
        <div class="section-header">
          <h2>Why Choose Pro Bill Solutions?</h2>
          <p>We deliver results that matter to your practice</p>
        </div>
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon"><font-awesome-icon :icon="['fas', 'hospital']" style="color: #ffffff;"></font-awesome-icon></div>
            <h3>All Specialties Welcome</h3>
            <p>From cardiology to chiropractic, family medicine to dermatology—we understand the unique billing nuances of every specialty.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon"><font-awesome-icon :icon="['fas', 'circle-check']" style="color: #ffffff;"></font-awesome-icon></div>
            <h3>Compliance You Can Trust</h3>
            <p>We stay up-to-date with HIPAA, CMS, and payer regulations so you don't have to.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon"><font-awesome-icon :icon="['fas', 'handshake']" style="color: #ffffff;"></font-awesome-icon></div>
            <h3>Personalized Support</h3>
            <p>You'll never be just another account. Our dedicated team knows your practice and is always just a call or message away.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon"><font-awesome-icon :icon="['fas', 'cloud']" style="color: #ffffff;"></font-awesome-icon></div>
            <h3>Advanced Technology</h3>
            <p>We use secure, cloud-based platforms that integrate smoothly with your existing systems for fast, accurate billing.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon"><font-awesome-icon :icon="['fas', 'chart-line']" style="color: #ffffff;"></font-awesome-icon></div>
            <h3>Proven Results</h3>
            <p>We help providers increase collections, shorten payment cycles, and reduce claim rejections—consistently.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Streamline Your Revenue Cycle?</h2>
          <p>Join countless healthcare providers who trust Pro Bill Solutions with their medical billing needs. Let us help you focus on what you do best—caring for your patients.</p>
          <button class="btn-cta" @click="scrollToContact">Start Your Partnership Today</button>
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
  name: 'WhyUs',
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
/* Why Choose Section */
.why-choose-section {
  padding: 100px 0;
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
  color: var(--white);
}

.why-choose-section .section-header h2 {
  color: var(--white);
}

.why-choose-section .section-header p {
  color: rgba(255, 255, 255, 0.8);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.feature-item {
  text-align: center;
  padding: 40px 20px;
}

.feature-icon {
  font-size: 3.5rem;
  margin-bottom: 24px;
}

.feature-item h3 {
  font-size: 1.4rem;
  margin-bottom: 16px;
  color: var(--primary-yellow);
}

.feature-item p {
  line-height: 1.6;
  opacity: 0.9;
  font-size: 1rem;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: var(--primary-yellow);
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  color: var(--primary-blue);
  margin-bottom: 20px;
  font-weight: 700;
}

.cta-content p {
  font-size: 1.2rem;
  color: var(--secondary-blue);
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.btn-cta {
  background: var(--primary-blue);
  color: var(--white);
  padding: 20px 40px;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-cta:hover {
  background: var(--secondary-blue);
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(27, 49, 105, 0.3);
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


