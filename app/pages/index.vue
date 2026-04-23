<template>
  <div class="home-page">
    <!-- Main Content -->
    <main class="main-content">
      <div class="hero-section">
        <div class="logo-container">
          <img
            src="/golden-dragon-header.svg"
            alt="Golden Dragon Pho & Vietnamese Cuisine"
            class="dragon-logo"
          />
        </div>
        <div class="branding">
          <div class="button-group">
            <a
              v-if="settings?.orderOnlineUrl"
              :href="settings.orderOnlineUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="order-online-button"
            >
              ORDER ONLINE
            </a>
            <NuxtLink to="/menu" class="view-menu-button">VIEW MENU</NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const { settings } = useSanitySiteSettings()
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

/* Prevent mobile scroll issues */
* {
  -webkit-overflow-scrolling: touch;
}

/* Prevent mobile browser from adjusting viewport */
@supports (-webkit-touch-callout: none) {
  .home-page {
    min-height: -webkit-fill-available;
  }
}

/* Additional mobile viewport handling */
@media (max-width: 768px) {
  .home-page {
    min-height: calc(100vh - 140px);
    /* Ensure content fits within viewport accounting for browser UI */
    max-height: calc(100vh - 140px);
  }
}

/* Home Page Styles */
.home-page {
  min-height: calc(
    100vh - 150px
  ); /* Account for header (~70px) and footer (~80px) */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  margin-top: 0;
  position: relative;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  transform: translateZ(0); /* Force hardware acceleration */
  will-change: transform; /* Optimize for animations */
  gap: 1rem; /* Reduce gap between logo and button */
}

.logo-container {
  flex-shrink: 0;
}

.dragon-logo {
  width: 320px;
  height: auto;
  max-width: 100%;
}

.branding {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.order-online-button {
  background-color: var(--color-accent);
  color: var(--color-text-black);
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;
  transition: none;
  text-decoration: none;
  display: inline-block;
}

.view-menu-button {
  background-color: var(--color-background);
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;
  transition: none;
  text-decoration: none;
  display: inline-block;
}

.coming-soon {
  font-family: "Montserrat", serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .home-page {
    padding: 0.5rem 0.25rem;
    margin-top: 0;
    min-height: calc(
      100vh - 300px
    ); /* Account for mobile header (~65px) and footer (~75px) */
    padding-bottom: 1rem;
  }

  .hero-section {
    gap: 1rem;
  }

  .dragon-logo {
    width: 240px;
  }

  .button-group {
    flex-direction: column;
    gap: 0.75rem;
  }

  .order-online-button,
  .view-menu-button {
    padding: 0.75rem 1.5rem;
    font-size: 0.85rem;
    width: 100%;
    text-align: center;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .hero-section {
    gap: 1.5rem;
  }

  .dragon-logo {
    width: 300px;
  }
}

@media (min-width: 1200px) {
  .hero-section {
    gap: 2rem;
  }

  .dragon-logo {
    width: 380px;
  }

  .order-online-button,
  .view-menu-button {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
}

/* Animation for page load */
.hero-section {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
