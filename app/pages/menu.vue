<template>
  <div class="menu-container">
    <!-- Menu Navigation -->
    <nav class="menu-nav">
      <div class="menu-nav-content">
        <div class="menu-nav-header">
          <span class="menu-nav-title">Menu Categories</span>
        </div>
        <div class="menu-nav-links">
          <a
            href="#appetizers"
            class="menu-nav-link"
            :class="{ active: activeSection === 'appetizers' }"
            >Appetizers</a
          >
          <a
            href="#pho-noodles"
            class="menu-nav-link"
            :class="{ active: activeSection === 'pho-noodles' }"
            >Pho & Noodles</a
          >
          <a
            href="#specialty"
            class="menu-nav-link"
            :class="{ active: activeSection === 'specialty' }"
            >Specialty</a
          >
          <a
            href="#vermicelli"
            class="menu-nav-link"
            :class="{ active: activeSection === 'vermicelli' }"
            >Vermicelli</a
          >
          <a
            href="#rice-dishes"
            class="menu-nav-link"
            :class="{ active: activeSection === 'rice-dishes' }"
            >Rice Dishes</a
          >
          <a
            href="#entree"
            class="menu-nav-link"
            :class="{ active: activeSection === 'entree' }"
            >Entree</a
          >
          <a
            href="#fried-rice"
            class="menu-nav-link"
            :class="{ active: activeSection === 'fried-rice' }"
            >Fried Rice</a
          >
          <a
            href="#banh-mi"
            class="menu-nav-link"
            :class="{ active: activeSection === 'banh-mi' }"
            >Banh Mi</a
          >
          <a
            href="#sides"
            class="menu-nav-link"
            :class="{ active: activeSection === 'sides' }"
            >Sides</a
          >
          <a
            href="#drinks"
            class="menu-nav-link"
            :class="{ active: activeSection === 'drinks' }"
            >Drinks</a
          >
          <a
            href="#boba"
            class="menu-nav-link"
            :class="{ active: activeSection === 'boba' }"
            >Boba</a
          >
          <a
            href="#sugar-cane"
            class="menu-nav-link"
            :class="{ active: activeSection === 'sugar-cane' }"
            >Sugar Cane</a
          >
          <a
            href="#desserts"
            class="menu-nav-link"
            :class="{ active: activeSection === 'desserts' }"
            >Desserts</a
          >
        </div>
      </div>
    </nav>

    <div class="menu-content">
      <!-- Appetizers Section -->
      <div id="appetizers" class="menu-section">
        <h2 class="section-header">Appetizers</h2>
        <div class="menu-grid">
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Pot Stickers (6)</span>
              <span class="item-price">$8.99</span>
            </div>
            <p class="item-description">
              Pan-seared dumplings with pork and vegetables
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Grilled Pork Rolls (2)</span>
              <span class="item-price">$8.99</span>
            </div>
            <p class="item-description">
              Fresh rolls with grilled pork and herbs
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Chicken Wings (6)</span>
              <span class="item-price">$12.99</span>
            </div>
            <p class="item-description">
              Vietnamese-style Wings or Ghost Wings 🔥🔥
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Egg Rolls (5)</span>
              <span class="item-price">$8.99</span>
            </div>
            <p class="item-description">
              Crispy Vietnamese-style rolls with pork, shrimp, and vegetables
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Bo Bia (2)</span>
              <span class="item-price">$8.99</span>
            </div>
            <p class="item-description">
              Fresh rolls with chinese sausage, jicama, herbs, and dried shrimp
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Seasoned Fries</span>
              <span class="item-price">$8.99</span>
            </div>
            <p class="item-description">
              Golden fries tossed in savory seasonings
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Spring Rolls (2)</span>
              <span class="item-price">$8.99</span>
            </div>
            <p class="item-description">
              Fresh rolls with shrimp, pork, herbs, and noodles
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Crab Rangoon (6)</span>
              <span class="item-price">$8.99</span>
            </div>
            <p class="item-description">
              Crispy wontons filled with creamy crab mix
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Popcorn Chicken</span>
              <span class="item-price">$10.99</span>
            </div>
            <p class="item-description">
              Crispy, spiced chicken bites with fried basil
            </p>
          </div>
        </div>
      </div>

      <!-- Pho & Noodle Soups Section -->
      <div id="pho-noodles" class="menu-section">
        <h2 class="section-header">Pho & Noodle Soups</h2>
        <div class="menu-grid">
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">House Special Pho</span>
              <span class="item-price">$14.99</span>
            </div>
            <p class="item-description">
              Special pho with rare steak, brisket, tripe, tendon, and meatballs
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Rare Steak Pho</span>
              <span class="item-price">$14.99</span>
            </div>
            <p class="item-description">Pho with thinly sliced rare steak</p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Beef Meatball Pho</span>
              <span class="item-price">$14.99</span>
            </div>
            <p class="item-description">Pho with savory beef meatballs</p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Roast Duck Noodle Soup</span>
              <span class="item-price">$16.99</span>
            </div>
            <p class="item-description">Egg noodle soup with flavorful duck</p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Rare Steak & Tripe Pho</span>
              <span class="item-price">$14.99</span>
            </div>
            <p class="item-description">
              Pho with rare steak and crunchy tripe
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Seafood Egg Noodle Soup</span>
              <span class="item-price">$14.99</span>
            </div>
            <p class="item-description">
              Soup with shrimp, crab, and calamari with rice noodle or egg
              noodle
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Rare Steak & Tendon Pho</span>
              <span class="item-price">$14.99</span>
            </div>
            <p class="item-description">Pho with rare steak and soft tendon</p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Chicken Pho</span>
              <span class="item-price">$14.99</span>
            </div>
            <p class="item-description">
              Classic pho with tender chicken slices
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Rare Steak & Brisket Pho</span>
              <span class="item-price">$14.99</span>
            </div>
            <p class="item-description">
              Pho with rare steak and tender brisket
            </p>
          </div>
        </div>
      </div>

      <!-- Specialty Section -->
      <div id="specialty" class="menu-section">
        <h2 class="section-header">Specialty</h2>
        <div class="menu-grid">
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Bun Bo Hue</span>
              <span class="item-price">$16.99</span>
            </div>
            <p class="item-description">
              Spicy Beef Noodle Soup. Bold and spicy broth with beef and pork
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Banh Xeo</span>
              <span class="item-price">$17.99</span>
            </div>
            <p class="item-description">
              Crispy crepe with pork, shrimp, mung bean, beansprout, and carrot
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Beef Stew Noodle Soup</span>
              <span class="item-price">$16.99</span>
            </div>
            <p class="item-description">
              Vietnamese stew with tender beef with rice noodle or egg noodle
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Beef Stew Soup + Bread</span>
              <span class="item-price">$16.99</span>
            </div>
            <p class="item-description">
              Vietnamese stew with tender beef and Vietnamese baguette
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Banh Canh Cua</span>
              <span class="item-price">$16.99</span>
            </div>
            <p class="item-description">
              Thick, savory broth with crab and chewy udon noodles
            </p>
          </div>
        </div>
      </div>

      <!-- Vermicelli Section -->
      <div id="vermicelli" class="menu-section">
        <h2 class="section-header">Vermicelli</h2>
        <p class="modifier-text">
          Grilled Shrimp +$4 Egg Rolls +$3 Fried Egg +$3
        </p>
        <div class="menu-grid">
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Bun Thit Nuong</span>
              <span class="item-price">$15.99</span>
            </div>
            <p class="item-description">
              Rice vermicelli topped with grilled pork and fresh herbs
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Bun Bo Nuong</span>
              <span class="item-price">$16.99</span>
            </div>
            <p class="item-description">
              Rice vermicelli with marinated, grilled beef and herbs
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Bun Tom Nuong</span>
              <span class="item-price">$16.99</span>
            </div>
            <p class="item-description">
              Rice vermicelli topped with grilled shrimp and fresh herbs
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Bun Bo Xao</span>
              <span class="item-price">$16.99</span>
            </div>
            <p class="item-description">
              Rice vermicelli with stir-fried beef, vegetables, and herbs
            </p>
          </div>
        </div>
      </div>

      <!-- Rice Dishes Section -->
      <div id="rice-dishes" class="menu-section">
        <h2 class="section-header">Rice Dishes</h2>
        <p class="modifier-text">
          Grilled Shrimp +$4 Egg Rolls +$3 Fried Egg +$3
        </p>
        <div class="menu-grid">
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Com Thit Nuong</span>
              <span class="item-price">$15.99</span>
            </div>
            <p class="item-description">
              Steamed rice served with grilled pork
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Korean Shortribs Over Rice</span>
              <span class="item-price">$19.99</span>
            </div>
            <p class="item-description">
              Tender, marinated short ribs served over steamed rice
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Com Bo Nuong</span>
              <span class="item-price">$16.99</span>
            </div>
            <p class="item-description">
              Steamed rice topped with marinated, grilled beef
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Beef Stew Over Rice</span>
              <span class="item-price">$16.99</span>
            </div>
            <p class="item-description">
              Hearty Vietnamese beef stew served with steamed rice
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Roast Duck Over Rice</span>
              <span class="item-price">$16.99</span>
            </div>
            <p class="item-description">
              Savory roast duck served with baby bok choy over rice with a tangy
              sauce
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Heart Stopper</span>
              <span class="item-price">$21.99</span>
            </div>
            <p class="item-description">
              Shrimp and pork fried rice with grilled pork and fried egg
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Crispy Salted Chicken</span>
              <span class="item-price">$15.99</span>
            </div>
            <p class="item-description">
              Tender chicken braised and fried to crispy perfection seated over
              steamed rice
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">★ Heaven & Earth</span>
              <span class="item-price">$24.99</span>
            </div>
            <p class="item-description">
              Roast duck and tender roast pork over rice, drizzled with
              savory-sweet soy sauce
            </p>
          </div>
        </div>
      </div>

      <!-- Entree Section -->
      <div id="entree" class="menu-section">
        <h2 class="section-header">Entree</h2>
        <div class="menu-grid">
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Lemongrass Chicken</span>
              <span class="item-price">$14.99</span>
            </div>
            <p class="item-description">
              Stir-fried chicken with onion, and fragrant lemongrass
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Mapo Tofu</span>
              <span class="item-price">$15.99</span>
            </div>
            <p class="item-description">
              Silken tofu in a spicy, flavorful Sichuan-style sauce with ground
              pork
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Honey Walnut Shrimp</span>
              <span class="item-price">$19.99</span>
            </div>
            <p class="item-description">
              Crispy shrimp coated in a sweet honey glaze, topped with candied
              walnuts
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Salt & Pepper Calamari</span>
              <span class="item-price">$16.99</span>
            </div>
            <p class="item-description">
              Crispy calamari stir-fried with salt, pepper, and scallions
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Salt & Pepper Shrimp</span>
              <span class="item-price">$16.99</span>
            </div>
            <p class="item-description">
              Shrimp stir-fried with salt, pepper, and scallions
            </p>
          </div>
        </div>
      </div>

      <!-- Fried Rice Section -->
      <div id="fried-rice" class="menu-section">
        <h2 class="section-header">Fried Rice</h2>
        <div class="menu-grid">
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Pork Fried Rice</span>
              <span class="item-price">$14.99</span>
            </div>
            <p class="item-description">
              Wok-fried rice with seasoned pork and green onion
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Shrimp & Pork Fried Rice</span>
              <span class="item-price">$14.99</span>
            </div>
            <p class="item-description">
              Fried rice with shrimp, pork, and green onion
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Chicken Fried Rice</span>
              <span class="item-price">$14.99</span>
            </div>
            <p class="item-description">
              Wok-fried rice with chicken and green onion
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Duck Fried Rice</span>
              <span class="item-price">$16.99</span>
            </div>
            <p class="item-description">
              Savory fried rice with tender, flavorful duck
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Beef Fried Rice</span>
              <span class="item-price">$14.99</span>
            </div>
            <p class="item-description">
              Flavorful fried rice with tender beef and onion
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Shrimp Fried Rice</span>
              <span class="item-price">$14.99</span>
            </div>
            <p class="item-description">
              Fried rice with juicy shrimp and green onion
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Vegetable Fried Rice</span>
              <span class="item-price">$14.99</span>
            </div>
            <p class="item-description">Fried rice with mixed vegetables</p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Yang Chow Fried Rice</span>
              <span class="item-price">$16.99</span>
            </div>
            <p class="item-description">
              Classic fish sauce fried rice with dried shrimp, chinese sausage,
              prawns, and green onion
            </p>
          </div>
        </div>
      </div>

      <!-- Banh Mi Section -->
      <div id="banh-mi" class="menu-section">
        <h2 class="section-header">Banh Mi</h2>
        <p class="sub-header">Vietnamese Sandwiches</p>
        <div class="menu-grid">
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Grilled Pork</span>
              <span class="item-price">$8.99</span>
            </div>
            <p class="item-description">
              Baguette filled with grilled pork, pickled vegetables, and herbs
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">BBQ Pork</span>
              <span class="item-price">$8.99</span>
            </div>
            <p class="item-description">
              Baguette stuffed with sweet and savory char siu pork, pickled
              vegetables, and fresh herbs
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Grilled Chicken</span>
              <span class="item-price">$8.99</span>
            </div>
            <p class="item-description">
              Baguette filled with flavorful chicken, pickled vegetables, and
              herbs
            </p>
          </div>
        </div>
      </div>

      <!-- Sides Section -->
      <div id="sides" class="menu-section">
        <h2 class="section-header">Sides</h2>
        <div class="menu-grid">
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Rice/Egg Noodles</span>
              <span class="item-price">$3.00</span>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Steamed Rice</span>
              <span class="item-price">$3.00</span>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Extra Broth</span>
              <span class="item-price">$3.00</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Drinks Section -->
      <div id="drinks" class="menu-section">
        <h2 class="section-header">Drinks</h2>
        <div class="menu-grid">
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Cold Drinks</span>
              <span class="item-price">$2.99</span>
            </div>
            <p class="item-description">
              Coke, Sprite, Root Beer, Red Bull, Arizona, Sunny D, Apple Juice
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Juice</span>
              <span class="item-price">$3.99</span>
            </div>
            <p class="item-description">
              Rambutan, guava, passion fruit, lychee, mango, pineapple, dragon
              fruit
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Fresh Squeezed Juice</span>
              <span class="item-price">$5.99</span>
            </div>
            <p class="item-description">
              Orange juice, Lime juice (vietnamese limeade)
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Ca Phe Sua Da</span>
              <span class="item-price">$4.99</span>
            </div>
            <p class="item-description">
              Traditional Vietnamese iced coffee drink
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Thai Iced Tea</span>
              <span class="item-price">$4.99</span>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Hot Tea</span>
              <span class="item-price">$1.99</span>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Soy Milk Can</span>
              <span class="item-price">$2.99</span>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Soy Milk Bottle</span>
              <span class="item-price">$3.99</span>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Herbal Tea Can</span>
              <span class="item-price">$2.99</span>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Grass Jelly</span>
              <span class="item-price">$2.99</span>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Aloe Vera</span>
              <span class="item-price">$2.99</span>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Jarritos</span>
              <span class="item-price">$3.99</span>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Bottled Water</span>
              <span class="item-price">$1.99</span>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Coconut Water</span>
              <span class="item-price">$3.99</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Boba Section -->
      <div id="boba" class="menu-section">
        <h2 class="section-header">Boba</h2>
        <div class="boba-container">
          <div class="boba-header">
            <span class="boba-title">Boba</span>
            <span class="boba-price">$5.99</span>
          </div>
          <p class="boba-subtitle">Available Flavors</p>
          <ul class="flavors-list">
            <li>Mango</li>
            <li>Pineapple</li>
            <li>Passion Fruit</li>
            <li>Strawberry</li>
            <li>Cantaloupe</li>
            <li>Ube/Taro</li>
            <li>Cappuccino</li>
            <li>Coffee</li>
            <li>Lychee</li>
            <li>Durian</li>
            <li>Peach</li>
            <li>Watermelon</li>
            <li>Banana</li>
          </ul>
        </div>
      </div>

      <!-- Sugar Cane Section -->
      <div id="sugar-cane" class="menu-section">
        <h2 class="section-header">Sugar Cane</h2>
        <p class="modifier-text">Nuoc Mia (Sugar Cane Juice)</p>
        <div class="menu-grid">
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Dragon Fruit</span>
              <span class="item-price">$6.99</span>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Passion Fruit</span>
              <span class="item-price">$6.99</span>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Mango</span>
              <span class="item-price">$6.99</span>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Orange</span>
              <span class="item-price">$6.99</span>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Kumquat</span>
              <span class="item-price">$6.99</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Desserts Section -->
      <div id="desserts" class="menu-section">
        <h2 class="section-header">Desserts</h2>
        <div class="menu-grid">
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Sugar Donuts (10)</span>
              <span class="item-price">$7.99</span>
            </div>
            <p class="item-description">
              Donut with crispy outside, soft inside, and coated in sugar
            </p>
          </div>
          <div class="menu-item">
            <div class="item-header">
              <span class="item-name">Sesame Balls (9)</span>
              <span class="item-price">$4.99</span>
            </div>
            <p class="item-description">
              Crispy, chewy pastry with red bean filling
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const activeSection = ref("");
let isClickScrolling = false;

const updateActiveSection = () => {
  // Skip scroll detection if user just clicked a link
  if (isClickScrolling) return;

  const sections = [
    "appetizers",
    "pho-noodles",
    "specialty",
    "vermicelli",
    "rice-dishes",
    "entree",
    "fried-rice",
    "banh-mi",
    "sides",
    "drinks",
    "boba",
    "sugar-cane",
    "desserts",
  ];

  const scrollPosition = window.scrollY + 150;

  for (let i = sections.length - 1; i >= 0; i--) {
    const element = document.getElementById(sections[i]);
    if (element && scrollPosition >= element.offsetTop) {
      if (activeSection.value !== sections[i]) {
        activeSection.value = sections[i];
        scrollToActiveNavButton(sections[i]);
      }
      break;
    }
  }
};

const scrollToActiveNavButton = (sectionId) => {
  const navLinks = document.querySelector(".menu-nav-links");
  const activeButton = document.querySelector(`a[href="#${sectionId}"]`);

  if (navLinks && activeButton) {
    const containerRect = navLinks.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();

    // Calculate if button is outside visible area
    const isLeftOfContainer = buttonRect.left < containerRect.left;
    const isRightOfContainer = buttonRect.right > containerRect.right;

    if (isLeftOfContainer || isRightOfContainer) {
      // Scroll to center the active button
      const scrollLeft =
        activeButton.offsetLeft -
        navLinks.clientWidth / 2 +
        activeButton.clientWidth / 2;
      navLinks.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }
};

const handleNavClick = (sectionId) => {
  activeSection.value = sectionId;
  isClickScrolling = true;

  // Re-enable scroll detection after scroll animation completes
  setTimeout(() => {
    isClickScrolling = false;
  }, 1000);
};

onMounted(() => {
  window.addEventListener("scroll", updateActiveSection);

  // Add click listeners to all navigation links
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
