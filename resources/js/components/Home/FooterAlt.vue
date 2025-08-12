<template>
  <footer class="bg-shape-primary text-custom-blue py-5">
    <div class="container px-4">
      
      <!-- Row for Layout -->
      <div class="row">

        <!-- Column 1: Logo & Slogan -->
        <div class="col-md-4 mb-4 mb-md-0">
          <img src="/assets/images/logo/phs_logo_black_hor@2x.png" 
          alt="Logo" 
          class="w-60 mb-3" 
          />
          <p class="text-custom-blue">Billing made simple for every specialty</p>
        </div>

        <!-- Column 2: Contact Info -->
        <div class="col-md-4 mb-4 mb-md-0">
          <h5 class="mb-3 fw-bold">Contact Us</h5>
          <ul class="list-unstyled">
            <li class="d-flex align-items-center mb-2">
              <div class="text-custom-blue p-2 d-flex align-items-center justify-content-center me-2" style="width: 40px; height: 40px;">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <span>Johannesburg</span>
            </li>
            <li class="d-flex align-items-center mb-2">
              <div class="text-custom-blue p-2 d-flex align-items-center justify-content-center me-2" style="width: 40px; height: 40px;">
                <i class="fas fa-phone"></i>
              </div>
              <span>
                <a class="text-custom-blue" href="tel:+27634923419">0634923419 | 0679358660</a>
              </span>
            </li>
            <li class="d-flex align-items-center">
              <div class="text-custom-blue p-2 d-flex align-items-center justify-content-center me-2" style="width: 40px; height: 40px;">
                <i class="fas fa-envelope"></i>
              </div>
              <span>
                <a class="text-custom-blue" href="mailto:info@probillsolutions.co.za">info@probillsolutions.co.za</a>
              </span>
            </li>
          </ul>
        </div>

        <!-- Column 3: Social Media -->
        <div class="col-md-4">
          <h5 class="mb-3 fw-bold">Find us on social media</h5>
          <div class="d-flex gap-2">
            <a href="https://web.facebook.com" class="text-custom-blue p-2 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
            <a href="https://www.instagram.com" class="text-custom-blue p-2 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
            <a href="https://www.youtube.com" class="text-custom-blue p-2 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </a>
            <a href="https://www.tiktok.com" class="text-custom-blue p-2 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
              <font-awesome-icon :icon="['fab', 'tiktok']" />
            </a> 
          </div>
          <div class="mt-3 fw-bold"> Subscribe to our newsletter</div>

          <!-- Newsletter Form -->
          <form @submit.prevent="subscribe">
            <div class="input-group mb-3 mt-2">
              <input 
                type="email" 
                v-model="form.email"
                class="form-control" 
                placeholder="Enter your email"
                :disabled="isLoading">
              <button 
                class="btn btn-primary" 
                type="submit"
                :disabled="isLoading || !form.email">
                <span v-if="isLoading" class="spinner-border spinner-border-sm me-1" role="status"></span>
                {{ isLoading ? 'Subscribing...' : 'Subscribe' }}
              </button>
            </div>
          </form>

          <!-- Success Message -->
          <div v-if="successMessage" class="alert alert-success alert-dismissible fade show mt-2" role="alert">
            <i class="fas fa-check-circle me-2"></i>
            {{ successMessage }}
            <button type="button" class="btn-close btn-close-white" @click="clearMessages"></button>
          </div>

          <!-- Error Message -->
          <div v-if="errorMessage" class="alert alert-warning alert-dismissible fade show mt-2" role="alert">
            <i class="fas fa-exclamation-triangle me-2"></i>
            {{ errorMessage }}
            <button type="button" class="btn-close btn-close-white" @click="clearMessages"></button>
          </div>

        </div>

      </div>

    </div>
  </footer>
  <!-- Bottom Bar -->
  <div class="bg-white text-black text-center py-3 ">
    <p class="mb-0">Pro Health Solutions &copy; {{ currentYear }}. All rights reserved.</p>
    </div>
</template>

<script setup>
  import { ref } from 'vue';
  import axios from 'axios';

  const props = defineProps({
    seo: Object,
  });

  const form = ref({
    email: '',
  });

  const isLoading = ref(false);
  const successMessage = ref('');
  const errorMessage = ref('');

  const clearMessages = () => {
    successMessage.value = '';
    errorMessage.value = '';
  };

  const subscribe = async () => {
    if (!form.value.email) return;

    isLoading.value = true;
    clearMessages();

    try {
      const response = await axios.post('/newsletter', form.value);
      
      // Success response
      successMessage.value = response.data.message || 'Successfully subscribed to our newsletter!';
      
      // Reset form on success
      form.value.email = '';
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        successMessage.value = '';
      }, 5000);

    } catch (error) {
      // Handle different error scenarios
      if (error.response) {
        const status = error.response.status;
        const data = error.response.data;
        
        if (status === 409 || status === 422) {
          // Email already exists or validation error
          errorMessage.value = data.message || 'This email is already subscribed to our newsletter.';
        } else {
          // Other server errors
          errorMessage.value = 'An error occurred. Please try again later.';
        }
      } else {
        // Network or other errors
        errorMessage.value = 'Network error. Please check your connection and try again.';
      }
      
      console.error('Newsletter subscription error:', error);
      
      // Auto-hide error message after 7 seconds
      setTimeout(() => {
        errorMessage.value = '';
      }, 7000);
    } finally {
      isLoading.value = false;
    }
  };

  const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
/* Color Variables */
:root {
  --primary-blue: #ffd400;
  --secondary-blue:#d99800 ;
  --primary-yellow: #1b3169;
  --secondary-yellow: #14244d;
  --white: #ffffff;
  --light-gray: #f8f9fa;
  --dark-gray: #333333;
  --text-gray: #666666;
}
.bg-shape-primary {
  background: linear-gradient(135deg, #ffd400 0%, #ffd400 100%);
}
h5 {
  color: #1b3169;

}
.text-custom-blue {
  color: #1b3169;

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
  background: #1b3169;
  color: #ffffff;
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

/* Custom alert styles for better visibility on dark background */
  .alert-success {
    background-color: rgba(25, 135, 84, 0.9);
    border-color: rgba(25, 135, 84, 0.9);
    color: white;
  }
  
  .alert-warning {
    background-color: rgba(255, 168, 7, 0.849);
    border-color: rgba(255, 147, 7, 0.9);
    color: #000;
  }
  
  .btn-close-white {
    filter: invert(1) grayscale(100%) brightness(200%);
  }
  
  .spinner-border-sm {
    width: 1rem;
    height: 1rem;
  }

</style>
