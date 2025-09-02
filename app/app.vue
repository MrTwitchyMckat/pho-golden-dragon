<template>
  <div class="app-layout">
    <!-- Header Navigation -->
    <header class="header">
      <nav class="nav">
        <NuxtLink to="/" v-if="isMenuPage" class="nav-link">HOME</NuxtLink>
        <NuxtLink to="/menu" class="nav-link">MENU</NuxtLink>
      </nav>
    </header>

    <!-- Page Content -->
    <main class="page-content">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-column">
          <h3 class="footer-heading">ADDRESS</h3>
          <p class="footer-text">2309 Kietzke Ln Unit 15</p>
          <p class="footer-text">Reno, NV 89502</p>
        </div>
        <div class="footer-column">
          <h3 class="footer-heading">BUSINESS HOURS</h3>
          <p class="footer-text">Monday - Sunday</p>
          <p class="footer-text">10AM - 9PM</p>
        </div>
        <div class="footer-column">
          <h3 class="footer-heading">CONTACT US</h3>
          <p class="footer-text">775-622-0321</p>
          <p class="footer-text">phogoldendragon@gmail.com</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const route = useRoute();
const isMenuPage = computed(() => route.path === "/menu");
</script>

<style lang="scss">
/* CSS Variables */
:root {
  --color-background: #1a1a1a;
  --color-accent: #fdd835;
  --color-text-white: #ffffff;
  --color-text-black: #000000;
  --font-primary: "Montserrat", sans-serif;
  --font-secondary: "Quando", serif;
}

/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-primary);
  background-color: var(--color-background);
  color: var(--color-text-white);
  line-height: 1.6;
}

.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header Styles */
.header {
  position: fixed;
  top: 0;
  right: 0;
  padding: 2rem;
  z-index: 100;
}

.nav-link {
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: opacity 0.3s ease;
  margin-left: 1rem;

  &:hover {
    opacity: 0.8;
  }
}

/* Page Content */
.page-content {
  flex: 1;
  margin-top: 80px; /* Account for fixed header */
}

/* Footer Styles */
.footer {
  background-color: var(--color-background);
  padding: 3rem 2rem;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-column {
  text-align: center;
}

.footer-heading {
  color: var(--color-accent);
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.footer-text {
  color: var(--color-text-white);
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header {
    padding: 1rem;
  }

  .nav-link {
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }

  .page-content {
    margin-top: 60px;
  }

  .footer {
    padding: 2rem 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .footer-column {
    text-align: center;
  }

  .footer-heading {
    font-size: 1rem;
  }

  .footer-text {
    font-size: 0.9rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .footer-content {
    gap: 1.5rem;
  }
}
</style>
