<template>
  <div
    v-if="pending"
    class="site-loader"
    aria-live="polite"
    aria-busy="true"
  >
    <div class="site-loader-inner">
      <img
        src="/logo-winking-face.svg"
        alt=""
        class="site-loader-dragon"
        width="120"
        height="120"
      />
      <p class="site-loader-title">Golden Dragon</p>
      <p class="site-loader-sub">Warming up the kitchen…</p>
    </div>
  </div>

  <div v-else-if="!ready" class="site-error">
    <img
      src="/logo-winking-face.svg"
      alt=""
      class="site-error-dragon"
      width="96"
      height="96"
    />
    <p class="site-error-title">We couldn’t load the menu</p>
    <p class="site-error-sub">
      {{
        errorMessage ||
          "Check your connection, or try again in a moment."
      }}
    </p>
    <button type="button" class="site-error-retry" @click="refresh()">
      Try again
    </button>
  </div>

  <div v-else class="app-layout">
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
            <NuxtLink to="/" v-if="isMenuPage" class="nav-link">HOME</NuxtLink>
            <NuxtLink to="/menu" v-if="!isMenuPage" class="nav-link"
              >VIEW MENU</NuxtLink
            >
            <a
              :href="settings.orderOnlineUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="order-button"
            >
              ORDER ONLINE
            </a>
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
          <p class="footer-text">{{ settings.footerAddressLine1 }}</p>
          <p class="footer-text">{{ settings.footerAddressLine2 }}</p>
        </div>
        <div class="footer-column">
          <h3 class="footer-heading">BUSINESS HOURS</h3>
          <p class="footer-text">{{ settings.footerHoursLine1 }}</p>
          <p class="footer-text">
            <strong>{{ settings.footerHoursLine2 }}</strong>
          </p>
        </div>
        <div class="footer-column">
          <h3 class="footer-heading">CONTACT US</h3>
          <p class="footer-text">{{ settings.footerPhone }}</p>
          <p class="footer-text">{{ settings.footerEmail }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const isMenuPage = computed(() => route.path === '/menu')

const { site: settings, ready, pending, error, refresh } = useSanityContent()

const errorMessage = computed(() => {
  const e = error.value
  if (!e) return ""
  const message = e instanceof Error ? e.message : String(e)

  // Browser-side Sanity requests fail with an opaque network error when CORS
  // is not configured for the current origin.
  if (
    /attempting to reach/i.test(message) &&
    /sanity\.io/i.test(message)
  ) {
    return "Sanity blocked this origin. Add this site's URL to Sanity API CORS origins (localhost and production), then retry."
  }

  return message
})

useSanitySeo(settings)
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

/* Full-screen load & error (Sanity-only; no seed fallback) */
.site-loader,
.site-error {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
  padding: 2rem 1.5rem;
}

.site-loader-inner {
  text-align: center;
  max-width: 320px;
}

.site-loader-dragon {
  display: block;
  margin: 0 auto 1.25rem;
  animation: loader-wiggle 1.1s ease-in-out infinite;
}

.site-loader-title {
  font-family: var(--font-secondary), serif;
  font-size: 1.5rem;
  color: var(--color-accent);
  margin: 0 0 0.35rem;
}

.site-loader-sub {
  font-family: var(--font-primary), sans-serif;
  font-size: 0.95rem;
  color: #c8c8c8;
  margin: 0;
}

.site-error {
  flex-direction: column;
  text-align: center;
}

.site-error-dragon {
  opacity: 0.85;
  margin-bottom: 1rem;
}

.site-error-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-accent);
  margin: 0 0 0.5rem;
}

.site-error-sub {
  font-size: 0.9rem;
  color: #c8c8c8;
  margin: 0 0 1.25rem;
  max-width: 280px;
}

.site-error-retry {
  font-family: var(--font-primary), sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0.65rem 1.25rem;
  border-radius: 5px;
  border: 2px solid var(--color-accent);
  background: transparent;
  color: var(--color-accent);
  cursor: pointer;
}

.site-error-retry:hover {
  background: var(--color-accent);
  color: var(--color-text-black);
}

@keyframes loader-wiggle {
  0%,
  100% {
    transform: rotate(-4deg) translateY(0);
  }
  50% {
    transform: rotate(4deg) translateY(-4px);
  }
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

.nav-link {
  color: var(--color-text-black);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.5rem 1rem;
  transition: none;
}

.order-button {
  background-color: var(--color-text-black);
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid var(--color-accent);
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

  .nav-link {
    font-size: 0.75rem;
    padding: 0.375rem 0.75rem;
  }

  .order-button {
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
    gap: 1rem;
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

/* Additional mobile footer positioning */
@media (max-width: 768px) {
  .footer {
    position: relative;
    z-index: 10;
    margin-bottom: env(safe-area-inset-bottom, 0);
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .footer-content {
    gap: 1.5rem;
  }
}
</style>
