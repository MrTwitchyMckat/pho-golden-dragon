<template>
  <div class="app-layout">
    <!-- Header Navigation -->
    <header class="header">
      <nav class="navbar">
        <div class="navbar-content">
          <div class="navbar-logo">
            <NuxtLink to="/">
              <img
                src="/logo-text-horizontal.svg"
                alt="Golden Dragon"
                class="logo-image logo-desktop"
              />
              <img
                src="/logo-winking-face.svg"
                alt="Golden Dragon"
                class="logo-image logo-mobile"
              />
            </NuxtLink>
          </div>
          <div class="navbar-menu">
            <NuxtLink to="/" v-if="isMenuPage" class="nav-button"
              >HOME</NuxtLink
            >
            <NuxtLink to="/menu" v-if="!isMenuPage" class="nav-button"
              >VIEW MENU</NuxtLink
            >
          </div>
        </div>
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
          <p class="footer-text">2309 Kietzke Ln</p>
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
  --color-accent: #ffce03;
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

html {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

body {
  font-family: var(--font-primary);
  background-color: var(--color-background);
  color: var(--color-text-white);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-text-size-adjust: 100%;
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
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
}

.navbar {
  width: 100%;
  max-width: 1000px;
  max-height: 50px;
  background-color: var(--color-accent);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 0 1rem;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.navbar-logo {
  display: flex;
  align-items: center;
}

.logo-image {
  height: 28px;
  width: auto;
}

.logo-mobile {
  display: none;
}

.logo-desktop {
  display: block;
}

.navbar-menu {
  display: flex;
  align-items: center;
}

.nav-button {
  background-color: var(--color-text-black);
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: none;
}

/* Page Content */
.page-content {
  flex: 1;
  margin-top: 70px; /* Account for fixed header */
}

/* Footer Styles */
.footer {
  background-color: var(--color-background);
  padding: 1.5rem 2rem;
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
    padding: 0.75rem;
  }

  .navbar {
    margin: 0 0.5rem;
    padding: 0.375rem 0.75rem;
  }

  .logo-image {
    height: 24px;
  }

  .logo-desktop {
    display: none;
  }

  .logo-mobile {
    display: block;
  }

  .nav-button {
    font-size: 0.75rem;
    padding: 0.375rem 0.75rem;
  }

  .page-content {
    margin-top: 65px;
  }

  .footer {
    padding: 1rem 1rem;
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
