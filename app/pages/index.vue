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
          <NuxtLink to="/menu" class="cta-button">VIEW MENU</NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

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

/* Home Page Styles */
.home-page {
  min-height: calc(
    100vh - 220px
  ); /* More conservative height to prevent scrolling */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin-top: 0; /* Remove negative margin */
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
}

.logo-container {
  flex-shrink: 0;
}

.dragon-logo {
  width: 400px;
  height: auto;
  max-width: 100%;
}

.branding {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.cta-button {
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
    padding: 0.25rem;
    margin-top: 0; /* Remove negative margin */
    min-height: calc(
      100vh - 240px
    ); /* Much tighter spacing so footer is visible */
  }

  .hero-section {
    gap: 1.5rem;
  }

  .dragon-logo {
    width: 280px;
  }

  .cta-button {
    padding: 0.875rem 1.75rem;
    font-size: 0.9rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .hero-section {
    gap: 1.75rem;
  }

  .dragon-logo {
    width: 350px;
  }
}

@media (min-width: 1200px) {
  .hero-section {
    gap: 3rem;
  }

  .dragon-logo {
    width: 450px;
  }

  .cta-button {
    padding: 1.25rem 2.5rem;
    font-size: 1.1rem;
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
