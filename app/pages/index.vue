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
        <!-- <div class="branding">
          <NuxtLink to="/menu" class="cta-button">VIEW MENU</NuxtLink>
        </div> -->
        <div class="coming-soon">
          <h2>Coming Soon</h2>
        </div>
      </div>
    </main>
  </div>
</template>

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

/* Home Page Styles */
.home-page {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: -80px;
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
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(253, 216, 53, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
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
    padding: 1rem;
    margin-top: -60px; /* Adjust for smaller header on mobile */
    min-height: 50vh;
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
