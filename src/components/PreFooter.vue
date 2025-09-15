<template>
  <section class="pre-footer">
    <div class="container">
      <div class="columns">
        <div class="column" v-for="(section, i) in sections" :key="i">
          <h4 @click="toggle(i)" class="accordion-title">
            {{ section.title }}

            <span class="arrow" v-if="isMobile">
              <FontAwesomeIcon
                :icon="isOpen(i) ? 'angle-down' : 'angle-right'"
              />
            </span>
          </h4>

          <transition name="accordion">
            <ul v-show="!isMobile || isOpen(i)">
              <li v-for="link in section.links" :key="link">
                <a href="#">{{ link }}</a>
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "PreFooter",
  components: { FontAwesomeIcon },
  data() {
    return {
      openIndex: null,
      isMobile: false,
      sections: [
        {
          title: "Product",
          links: ["Features", "Pricing", "Menu", "Reviews"],
        },
        {
          title: "Solutions",
          links: [
            "Special Diet Options",
            "Wholesale Coffee",
            "Delivery Service",
            "Training & Events",
          ],
        },
        { title: "Company", links: ["About Us", "Careers", "Blog", "Contact"] },
      ],
    };
  },
  mounted() {
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreen);
  },
  methods: {
    checkScreen() {
      this.isMobile = window.innerWidth <= 768;
      if (!this.isMobile) {
        this.openIndex = null;
      }
    },
    toggle(i) {
      if (!this.isMobile) return;
      this.openIndex = this.openIndex === i ? null : i;
    },
    isOpen(i) {
      return this.openIndex === i;
    },
  },
};
</script>

<style scoped>
.pre-footer {
  background:#4b2e2e;
  padding: 3rem 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.column {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.column h4 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: white;
}

.column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.column li {
  margin-bottom: 1.5rem;
}

.column a {
  color: white;
  text-decoration: none;
  transition: color 0.2s;
}
.column a:hover {
  color: white;
}

/* Mobile accordion styles */
@media screen and (max-width: 768px) {
  .columns {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .accordion-title {
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .column ul {
    margin-bottom: 1rem;
    padding-left: 1rem;
  }
}

/* Smooth collapse animation */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
