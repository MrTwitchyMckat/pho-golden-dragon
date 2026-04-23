<template>
  <div class="menu-container">
    <nav class="menu-nav">
      <div class="menu-nav-content">
        <div class="menu-nav-header">
          <span class="menu-nav-title">{{ menu.navTitle }}</span>
        </div>
        <div class="menu-nav-links">
          <a
            v-for="sec in menu.sections"
            :key="sec.slug"
            :href="`#${sec.slug}`"
            class="menu-nav-link"
            :class="{ active: activeSection === sec.slug }"
            >{{ sec.title }}</a
          >
        </div>
      </div>
    </nav>

    <div class="menu-content">
      <div class="gratuity-notice">
        <p>{{ menu.gratuityNotice }}</p>
      </div>

      <div
        v-for="sec in menu.sections"
        :key="sec.slug"
        :id="sec.slug"
        class="menu-section"
      >
        <h2 class="section-header">{{ sec.title }}</h2>
        <p v-if="sec.modifierText" class="modifier-text">
          {{ sec.modifierText }}
        </p>
        <p v-if="sec.subHeader" class="sub-header">{{ sec.subHeader }}</p>

        <div v-if="sec.layout === 'boba' && sec.boba" class="boba-container">
          <div class="boba-header">
            <span class="boba-title">{{ sec.boba.title || "Boba" }}</span>
            <span class="boba-price">{{ sec.boba.price }}</span>
          </div>
          <p v-if="sec.boba.flavorsSubtitle" class="boba-subtitle">
            {{ sec.boba.flavorsSubtitle }}
          </p>
          <ul v-if="sec.boba.flavors?.length" class="flavors-list">
            <li v-for="(flavor, i) in sec.boba.flavors" :key="i">
              {{ flavor }}
            </li>
          </ul>
        </div>

        <div v-else class="menu-grid">
          <div
            v-for="(it, idx) in sec.items || []"
            :key="`${sec.slug}-${idx}`"
            class="menu-item"
          >
            <div class="item-header">
              <span class="item-name">{{ it.name }}</span>
              <span v-if="it.price" class="item-price">{{ it.price }}</span>
            </div>
            <p v-if="it.description" class="item-description">
              {{ it.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from "vue";

const { menu } = useSanityMenuPage();

const sectionIds = computed(
  () => menu.value.sections?.map((s) => s.slug).filter(Boolean) as string[],
);

const activeSection = ref("");
let isClickScrolling = false;

const updateActiveSection = () => {
  if (isClickScrolling) return;

  const sections = sectionIds.value;
  const scrollPosition = window.scrollY + 150;

  for (let i = sections.length - 1; i >= 0; i--) {
    const id = sections[i];
    const element = document.getElementById(id);
    if (element && scrollPosition >= element.offsetTop) {
      if (activeSection.value !== id) {
        activeSection.value = id;
        scrollToActiveNavButton(id);
      }
      break;
    }
  }
};

const scrollToActiveNavButton = (sectionId: string) => {
  const navLinks = document.querySelector(".menu-nav-links");
  const activeButton = document.querySelector(`a[href="#${sectionId}"]`);

  if (navLinks && activeButton) {
    const containerRect = navLinks.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();

    const isLeftOfContainer = buttonRect.left < containerRect.left;
    const isRightOfContainer = buttonRect.right > containerRect.right;

    if (isLeftOfContainer || isRightOfContainer) {
      const scrollLeft =
        (activeButton as HTMLElement).offsetLeft -
        navLinks.clientWidth / 2 +
        (activeButton as HTMLElement).clientWidth / 2;
      navLinks.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }
};

const handleNavClick = (sectionId: string) => {
  activeSection.value = sectionId;
  isClickScrolling = true;

  setTimeout(() => {
    isClickScrolling = false;
  }, 1000);
};

onMounted(() => {
  window.addEventListener("scroll", updateActiveSection);

  const navLinks = document.querySelectorAll(".menu-nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        const sectionId = href.substring(1);
        handleNavClick(sectionId);
      }
    });
  });

  updateActiveSection();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateActiveSection);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Quando&display=swap");

html {
  scroll-behavior: smooth;
}

.menu-container {
  background-color: #1a1a1a;
  min-height: 100vh;
  padding: 0;
  color: white;
  font-family: "Montserrat", sans-serif;
}

/* Menu Navigation */
.menu-nav {
  position: sticky;
  top: 70px;
  z-index: 50;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
}

.menu-nav-content {
  width: 100%;
  max-width: 1000px;
  background-color: #2a2a2a;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.menu-nav-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.menu-nav-title {
  color: #ffce03;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.menu-nav-links {
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.menu-nav-links::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Opera */
}

.menu-nav-link {
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: #1a1a1a;
  border: 2px solid transparent;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.menu-nav-link:hover,
.menu-nav-link.active {
  background-color: #ffce03;
  color: #000;
  border-color: #ffce03;
}

/* Menu Content */
.menu-content {
  padding: 2rem;
}

/* Gratuity Notice */
.gratuity-notice {
  text-align: center;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  background-color: #2a2a2a;
  border-radius: 8px;
  border-left: 4px solid #e23e52;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.gratuity-notice p {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #e23e52;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.menu-section {
  margin-bottom: 3rem;
  padding-top: 6rem;
}

.section-header {
  font-family: "Montserrat", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffce03;
  text-align: center;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  letter-spacing: 2px;
}

.sub-header {
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #e23e52;
  text-align: center;
  margin-bottom: 1.5rem;
  text-transform: capitalize;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.menu-item {
  padding: 1.5rem;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.item-name {
  font-family: "Quando", serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  flex: 1;
  text-align: left;
}

.item-price {
  font-family: "Quando", serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffce03;
  margin-left: 1rem;
  align-self: flex-start;
}

.item-description {
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  color: #e0e0e0;
  line-height: 1.4;
  margin: 0;
  text-align: left;
}

.modifier-text {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  color: #e23e52;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;
}

.boba-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1.5rem;
}

.boba-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.boba-title {
  font-family: "Quando", serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
}

.boba-price {
  font-family: "Quando", serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffce03;
}

.boba-subtitle {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.flavors-list {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  color: #e0e0e0;
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0;
  columns: 3;
  column-gap: 2rem;
}

.flavors-list li {
  margin-bottom: 0.25rem;
  break-inside: avoid;
}

/* Responsive design */
@media (max-width: 768px) {
  .menu-nav {
    top: 65px;
    padding: 0.75rem 1.25rem;
  }

  .menu-nav-content {
    gap: 0.375rem;
    padding: 0.375rem 0.75rem;
    margin: 0;
  }

  .menu-nav-title {
    font-size: 0.9rem;
  }

  .menu-nav-links {
    gap: 0.5rem;
  }

  .menu-nav-link {
    font-size: 0.75rem;
    padding: 0.375rem 0.75rem;
    flex-shrink: 0;
  }

  .menu-content {
    padding: 1rem;
  }

  .gratuity-notice {
    padding: 0.75rem 1rem;
    margin-bottom: 1.5rem;
  }

  .gratuity-notice p {
    font-size: 0.9rem;
  }

  .menu-section {
    padding-top: 4rem; /* Proportional padding for mobile */
  }

  .section-header {
    font-size: 2rem;
  }

  .menu-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .item-name,
  .item-price {
    font-size: 1.1rem;
  }

  .item-description {
    font-size: 0.85rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1025px) {
  .menu-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
