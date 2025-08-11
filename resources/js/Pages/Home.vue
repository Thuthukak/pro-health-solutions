<template>
  <Navbar :seo="seo" />
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
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Pro Bill Solutions" />
     
      <!-- Twitter Card -->
      <meta name="twitter:card" :content="seo.twitter_card" />
      <meta name="twitter:title" :content="seo.og_title" />
      <meta name="twitter:description" :content="seo.og_description" />
      <meta name="twitter:image" :content="seo.og_image" />
     
      <!-- Additional SEO -->
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1b3169" />
     
      <!-- Structured Data will be added via JavaScript -->
    </Head>
   
    <!-- Hero Section -->
    <section class="hero-section banner-image">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            Streamline Your <span class="highlight">Medical Billing</span>
            <br>Focus on Your Patients
          </h1>
          <p class="hero-description">
            At Pro Bill Solutions, we deliver efficient, accurate, and fully compliant medical billing services tailored to healthcare providers of all specialties. Let us handle your revenue cycle so you can focus on what matters most.
          </p>
          <div class="hero-buttons">
            <button class="btn-primary" @click="goToContact">Get Started Today</button>
            <button class="btn-secondary" @click="goToServices">Our Services</button>
          </div>
        </div>
        <div class="hero-visual">
          <img src="/assets/images/logo/calculator-stethoscope-medicine-bottles-white-background.jpg" alt="Hero Image" class="rounded">
        </div>
      </div>
    </section>

   
  <FooterAlt :seo="seo" />
 
</template>

<script setup>
import { Head } from '@inertiajs/vue3'
import Navbar from '../components/Home/Navbar.vue';
import FooterAlt from '../components/Home/FooterAlt.vue';
import { ref, onMounted } from "vue";
import axios from "axios";

// Props from server
const props = defineProps({
  seo: Object,
  structuredData: String,
});

// Form data
const form = ref({
  name: '',
  email: '',
  practice: '',
  specialty: '',
  message: ''
});

// Add structured data to head on component mount
onMounted(() => {
  if (props.structuredData) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = props.structuredData;
    document.head.appendChild(script);
  }
});

// Methods
const goToServices = () => {
  // go to "/service"
  window.location.href = "/service"
};

const goToContact = () => {
  window.location.href = "/contact-us"
};

const submitForm = async () => {
  try {
    const response = await axios.post('/contact-form', form.value);
    console.log('Form submitted:', form.value);
    // Reset form
    form.value = {
      name: '',
      email: '',
      practice: '',
      specialty: '',
      message: ''
    };
    alert('Thank you for your message! We will contact you soon.');
  } catch (error) {
    console.error('Form submission error:', error);
    alert('There was an error sending your message. Please try again.');
  }
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

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%23ffffff" opacity="0.05"/><circle cx="50" cy="50" r="1.5" fill="%23ffffff" opacity="0.03"/><circle cx="80" cy="20" r="1" fill="%23ffffff" opacity="0.04"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.1;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
}

.highlight {
  color: var(--primary-yellow);
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--primary-yellow);
  border-radius: 2px;
}

.hero-description {
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 40px;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
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

.hero-visual {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.hero-card:hover {
  transform: translateX(10px);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.hero-card h3 {
  font-size: 1.3rem;
  margin-bottom: 8px;
  color: var(--primary-yellow);
}

.hero-card p {
  opacity: 0.8;
  line-height: 1.5;
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