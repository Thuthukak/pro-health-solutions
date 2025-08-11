<template>
    <Navbar :seo="seo" />
    <Head>
      <title>{{ seo.title }}</title>
      <meta name="description" :content="seo.description" />
      <meta name="keywords" :content="seo.keywords" />
      
      <!-- Open Graph / Facebook -->
      <meta property="og:type" :content="seo.og_type" />
      <meta property="og:url" :content="seo.og_url" />
      <meta property="og:title" :content="seo.og_title" />
      <meta property="og:description" :content="seo.og_description" />
      <meta property="og:image" :content="seo.og_image" />
      <meta property="og:site_name" :content="seo.og_site_name" />
      
      <!-- Twitter -->
      <meta property="twitter:card" :content="seo.twitter_card" />
      <meta property="twitter:url" :content="seo.og_url" />
      <meta property="twitter:title" :content="seo.twitter_title || seo.og_title" />
      <meta property="twitter:description" :content="seo.twitter_description || seo.og_description" />
      <meta property="twitter:image" :content="seo.og_image" />
      
      <!-- Contact-specific meta tags -->
      <meta name="contact:phone" :content="contactInfo?.phone" />
      <meta name="contact:email" :content="contactInfo?.email" />
      <meta name="geo.region" content="ZA-GP" />
      <meta name="geo.placename" content="Kempton Park" />
      <meta name="geo.position" content="-26.052120488886704;28.182524335456343" />
      <meta name="ICBM" content="-26.052120488886704, 28.182524335456343" />
      
      <!-- Canonical URL -->
      <link rel="canonical" :href="seo.canonical_url" />
    </Head>

     <!-- Contact Section -->
    <section class="contact-section" id="contact">
      <div class="container">
        <div class="section-header">
          <h2>Get in Touch</h2>
          <p>Ready to transform your medical billing? Contact us today for a free consultation.</p>
        </div>
        <div class="contact-grid">
          <div class="contact-info">
            <h3>Contact Information</h3>
            <div class="contact-item">
              <div class="contact-icon"><font-awesome-icon :icon="['fas', 'envelope']" style="color: #1b3169;"></font-awesome-icon></div>
              <div>
                <h4>Email</h4>
                <p>info@probillsolutions.com</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon"><font-awesome-icon :icon="['fas', 'phone']" style="color: #1b3169;"></font-awesome-icon></div>
              <div>
                <h4>Phone</h4>
                <p>0634923419 | 0679358660</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon"><font-awesome-icon :icon="['fas', 'clock']" style="color: #1b3169;"></font-awesome-icon></div>
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <input v-model="form.name" type="text" placeholder="Your Name" required>
              </div>
              <div class="form-group">
                <input v-model="form.email" type="email" placeholder="Your Email" required>
              </div>
              <div class="form-group">
                <input v-model="form.practice" type="text" placeholder="Practice Name">
              </div>
              <div class="form-group">
                <select v-model="form.specialty" required>
                  <option value="">Select Your Specialty</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="family-medicine">Family Medicine</option>
                  <option value="chiropractic">Chiropractic</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <textarea v-model="form.message" placeholder="Tell us about your billing needs" rows="4"></textarea>
              </div>
              <button type="submit" class="btn-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
         

      
    <Footer :seo="seo" />
</template>

<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';
import Navbar from '@/components/Home/Navbar.vue';
import Footer from '@/components/Home/Footer.vue';
import { onMounted } from 'vue';

const props = defineProps({
  seo: Object,
  structuredData: String,
  contactInfo: Object
});


// Form data
const form = ref({
  name: '',
  email: '',
  practice: '',
  specialty: '',
  message: ''
});


onMounted(() => {
  if (props.structuredData) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = props.structuredData;
    document.head.appendChild(script);
  }
});

// Form submission
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

/* Contact Section */
.contact-section {
  padding: 100px 0;
  background: var(--light-gray);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.contact-info h3 {
  font-size: 1.8rem;
  color: var(--primary-blue);
  margin-bottom: 40px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 30px;
}

.contact-icon {
  font-size: 1.5rem;
  padding: 12px;
  background: var(--primary-yellow);
  border-radius: 20%;
  min-width: 48px;
  text-align: center;
}

.contact-item h4 {
  font-size: 1.2rem;
  color: var(--primary-blue);
  margin-bottom: 8px;
}

.contact-item p {
  color: var(--text-gray);
  font-size: 1rem;
}

.contact-form {
  background: var(--white);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 24px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 6px;
  border: 2px solid #e1e5e9;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-yellow);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.btn-submit {
  width: 100%;
  background: var(--primary-blue);
  color: var(--white);
  padding: 16px;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-submit:hover {
  background: var(--secondary-blue);
  transform: translateY(-2px);
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