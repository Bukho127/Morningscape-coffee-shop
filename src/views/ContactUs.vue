<template>
  <div class="contact-us-page">
    <section class="contact-us">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Reach out via email, social media, or the form below</p>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" required placeholder="Your Name" />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required placeholder="you@example.com" />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" required placeholder="Write your message here..." rows="6"></textarea>
        </div>

        <button type="submit" class="submit-btn">Send</button>
      </form>

      <!-- Social Media Links -->
      <div class="social-links">
        <p>Or reach us on:</p>
        <a href="https://wa.me/1234567890" target="_blank" class="social-btn whatsapp">WhatsApp</a>
        <a href="https://facebook.com/yourcoffee" target="_blank" class="social-btn facebook">Facebook</a>
        <a href="https://twitter.com/yourcoffee" target="_blank" class="social-btn twitter">Twitter</a>
      </div>
    </section>
  </div>
   <FooterComponent />
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "ContactUs",
  components: { FooterComponent },
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.form);

      this.form.name = "";
      this.form.email = "";
      this.form.message = "";

      alert("Thank you! Your message has been sent.");
    },
  },
};
</script>

<style scoped>
.contact-us-page {
  padding-top: 5rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.contact-us h2 {
  font-size: 2rem;
  color: rgb(75, 46, 46);
  margin-bottom: 0.5rem;
}

.contact-us p {
  margin-bottom: 2rem;
  color: #555;
  font-size: 1.1rem;
}


.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  text-align: left;
}

.form-group label {
  font-weight: 600;
  margin-bottom: 0.25rem;
  display: block;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: border 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: rgb(75, 46, 46);
}

.submit-btn {
  background-color: rgb(75, 46, 46);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  width: 8rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.submit-btn:hover {
  background-color: #5a2f2f;
}

/* Social Links */
.social-links {
  margin-top: 1rem;
}

.social-links p {
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.social-btn {
  display: inline-block;
  margin: 0.25rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: opacity 0.2s;
}

.social-btn.whatsapp {
  background-color: #25d366;
}

.social-btn.facebook {
  background-color: #1877f2;
}

.social-btn.twitter {
  background-color: #1da1f2;
}

.social-btn:hover {
  opacity: 0.8;
}
</style>

