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
            <button class="btn-primary" @click="scrollToContact">Get Started Today</button>
            <button class="btn-secondary" @click="scrollToServices">Our Services</button>
          </div>
        </div>
        <div class="hero-visual">
          <img src="/assets/images/logo/calculator-stethoscope-medicine-bottles-white-background.jpg" alt="Hero Image" class="rounded">
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="about-section" id="about">
      <div class="container">
        <div class="section-header">
          <h2>About Pro Bill Solutions</h2>
          <p>Your trusted partner in medical billing excellence</p>
        </div>
        <div class="about-content">
          <div class="about-text">
            <h3 class="fw-bold">Our Mission</h3>
            <p>
              Our mission is to deliver dependable, compliant, and tailored medical billing services to doctors of every specialty. We are committed to maximizing your revenue through precise and timely billing, reducing your administrative burden, supporting your growth with personalized solutions, and staying ahead of healthcare regulations and industry changes.
            </p>
            <h3 class="fw-bold">Our Vision</h3>
            <p>
              We aim to be the most trusted and innovative medical billing partner for healthcare providers across all specialties. We empower practices with seamless, transparent, and accurate revenue cycle solutions—so you can focus on delivering exceptional patient care while we handle the business side with excellence.
            </p>
          </div>
          <div class="about-stats">
            <div class="stat-card">
              <div class="stat-number">100%</div>
              <div class="stat-label">Compliance Rate</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Support Available</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">All</div>
              <div class="stat-label">Specialties Welcome</div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
                <p>(555) 123-4567</p>
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
  </Layout>
 
</template>

<script setup>
import { Head } from '@inertiajs/vue3'
import Layout from "../Layouts/HomeLayout.vue";
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
const scrollToServices = () => {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
};

const scrollToContact = () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
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

/* About Section */
.about-section {
  padding: 100px 0;
  background: var(--light-gray);
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: start;
}

.about-text h3 {
  font-size: 1.5rem;
  color: var(--primary-blue);
  margin-bottom: 16px;
  margin-top: 32px;
}

.about-text h3:first-child {
  margin-top: 0;
}

.about-text p {
  line-height: 1.7;
  color: var(--text-gray);
  font-size: 1.1rem;
}

.about-stats {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.stat-card {
  background: var(--white);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary-yellow);
  margin-bottom: 8px;
}

.stat-label {
  font-size: 1rem;
  color: var(--primary-blue);
  font-weight: 600;
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


/* banner section */
/* .banner-image {
  position: relative;
  background-image: url(/public/assets/images/faq-BG.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

.banner-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(13, 91, 91, 0.05);
  z-index: 1;
}

.banner-image > * {
  position: relative;
  z-index: 2;
} */

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