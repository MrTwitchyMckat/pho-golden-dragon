/**
 * Generates app/data/sanity-seed.json for local fallbacks and studio seeding.
 * Run: node scripts/generate-sanity-seed-json.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const outDir = join(root, 'app', 'data')
const outFile = join(outDir, 'sanity-seed.json')

function item(name, price, description) {
  return { _type: 'menuItem', name, price, ...(description ? { description } : {}) }
}

function section(title, slugCurrent, extra, itemsOrLayout) {
  const base = {
    _type: 'menuSection',
    title,
    slug: { _type: 'slug', current: slugCurrent },
    ...extra,
  }
  if (itemsOrLayout?.layout === 'boba') {
    return { ...base, layout: 'boba', boba: itemsOrLayout.boba }
  }
  return { ...base, layout: 'grid', items: itemsOrLayout }
}

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  orderOnlineUrl:
    'https://order.spoton.com/so-golden-dragon-21672/reno-nv/673e69761411de7ad9e82ef4',
  footerAddressLine1: '2309 Kietzke Ln',
  footerAddressLine2: 'Reno, NV 89502',
  footerHoursLine1: 'Open Daily 10:00 AM – 9:00 PM',
  footerHoursLine2: 'Closed Wednesday',
  footerPhone: '775-622-0321',
  footerEmail: 'phogoldendragon@gmail.com',
  seoTitle: 'Golden Dragon - Pho & Vietnamese Cuisine',
  seoDescription:
    'Experience authentic pho and Vietnamese cuisine at Golden Dragon in Reno, NV. Fresh ingredients, traditional recipes, and exceptional service.',
  seoOgImagePath: '/golden-dragon-og.jpg',
  seoSiteUrl: 'https://phogoldendragon.com',
}

const menuPage = {
  _id: 'menuPage',
  _type: 'menuPage',
  title: 'Menu',
  navTitle: 'Menu Categories',
  gratuityNotice:
    '18% gratuity will be automatically added to parties of six or more.',
  sections: [
    section('Appetizers', 'appetizers', {}, [
      item('Pot Stickers (6)', '$8.99', 'Pan-seared dumplings with pork and vegetables'),
      item('Grilled Pork Rolls (2)', '$8.99', 'Fresh rolls with grilled pork and herbs'),
      item(
        'Chicken Wings (6)',
        '$12.99',
        'Vietnamese-style Wings or Ghost Wings 🔥🔥',
      ),
      item(
        'Egg Rolls (5)',
        '$8.99',
        'Crispy Vietnamese-style rolls with pork, shrimp, and vegetables',
      ),
      item(
        'Bo Bia (2)',
        '$8.99',
        'Fresh rolls with chinese sausage, jicama, herbs, and dried shrimp',
      ),
      item('Seasoned Fries', '$8.99', 'Golden fries tossed in savory seasonings'),
      item(
        'Spring Rolls (2)',
        '$8.99',
        'Fresh rolls with shrimp, pork, herbs, and noodles',
      ),
      item('Crab Rangoon (6)', '$8.99', 'Crispy wontons filled with creamy crab mix'),
      item(
        'Popcorn Chicken',
        '$10.99',
        'Crispy, spiced chicken bites with fried basil',
      ),
    ]),
    section('Pho & Noodle Soups', 'pho-noodles', {}, [
      item(
        'House Special Pho',
        '$14.99',
        'Special pho with rare steak, brisket, tripe, tendon, and meatballs',
      ),
      item('Rare Steak Pho', '$14.99', 'Pho with thinly sliced rare steak'),
      item('Beef Meatball Pho', '$14.99', 'Pho with savory beef meatballs'),
      item('Roast Duck Noodle Soup', '$16.99', 'Egg noodle soup with flavorful duck'),
      item('Rare Steak & Tripe Pho', '$14.99', 'Pho with rare steak and crunchy tripe'),
      item(
        'Seafood Egg Noodle Soup',
        '$14.99',
        'Soup with shrimp, crab, and calamari with rice noodle or egg noodle',
      ),
      item('Rare Steak & Tendon Pho', '$14.99', 'Pho with rare steak and soft tendon'),
      item('Chicken Pho', '$14.99', 'Classic pho with tender chicken slices'),
      item('Rare Steak & Brisket Pho', '$14.99', 'Pho with rare steak and tender brisket'),
    ]),
    section('Specialty', 'specialty', {}, [
      item(
        'Bun Bo Hue',
        '$16.99',
        'Spicy Beef Noodle Soup. Bold and spicy broth with beef and pork',
      ),
      item(
        'Banh Xeo',
        '$17.99',
        'Crispy crepe with pork, shrimp, mung bean, beansprout, and carrot',
      ),
      item(
        'Beef Stew Noodle Soup',
        '$16.99',
        'Vietnamese stew with tender beef with rice noodle or egg noodle',
      ),
      item(
        'Beef Stew Soup + Bread',
        '$16.99',
        'Vietnamese stew with tender beef and Vietnamese baguette',
      ),
      item(
        'Banh Canh Cua',
        '$16.99',
        'Thick, savory broth with crab and chewy udon noodles',
      ),
    ]),
    section(
      'Vermicelli',
      'vermicelli',
      { modifierText: 'Grilled Shrimp +$4 Egg Rolls +$3 Fried Egg +$3' },
      [
        item(
          'Bun Thit Nuong',
          '$15.99',
          'Rice vermicelli topped with grilled pork and fresh herbs',
        ),
        item(
          'Bun Bo Nuong',
          '$16.99',
          'Rice vermicelli with marinated, grilled beef and herbs',
        ),
        item(
          'Bun Tom Nuong',
          '$16.99',
          'Rice vermicelli topped with grilled shrimp and fresh herbs',
        ),
        item(
          'Bun Bo Xao',
          '$16.99',
          'Rice vermicelli with stir-fried beef, vegetables, and herbs',
        ),
      ],
    ),
    section(
      'Rice Dishes',
      'rice-dishes',
      { modifierText: 'Grilled Shrimp +$4 Egg Rolls +$3 Fried Egg +$3' },
      [
        item('Com Thit Nuong', '$15.99', 'Steamed rice served with grilled pork'),
        item(
          'Korean Shortribs Over Rice',
          '$19.99',
          'Tender, marinated short ribs served over steamed rice',
        ),
        item(
          'Com Bo Nuong',
          '$16.99',
          'Steamed rice topped with marinated, grilled beef',
        ),
        item(
          'Beef Stew Over Rice',
          '$16.99',
          'Hearty Vietnamese beef stew served with steamed rice',
        ),
        item(
          'Roast Duck Over Rice',
          '$16.99',
          'Savory roast duck served with baby bok choy over rice with a tangy sauce',
        ),
        item(
          'Heart Stopper',
          '$21.99',
          'Shrimp and pork fried rice with grilled pork and fried egg',
        ),
        item(
          'Crispy Salted Chicken',
          '$15.99',
          'Tender chicken braised and fried to crispy perfection seated over steamed rice',
        ),
        item(
          '★ Heaven & Earth',
          '$24.99',
          'Roast duck and tender roast pork over rice, drizzled with savory-sweet soy sauce',
        ),
      ],
    ),
    section('Entree', 'entree', {}, [
      item(
        'Lemongrass Chicken',
        '$14.99',
        'Stir-fried chicken with onion, and fragrant lemongrass',
      ),
      item(
        'Mapo Tofu',
        '$15.99',
        'Silken tofu in a spicy, flavorful Sichuan-style sauce with ground pork',
      ),
      item(
        'Honey Walnut Shrimp',
        '$19.99',
        'Crispy shrimp coated in a sweet honey glaze, topped with candied walnuts',
      ),
      item(
        'Salt & Pepper Calamari',
        '$16.99',
        'Crispy calamari stir-fried with salt, pepper, and scallions',
      ),
      item(
        'Salt & Pepper Shrimp',
        '$16.99',
        'Shrimp stir-fried with salt, pepper, and scallions',
      ),
    ]),
    section('Fried Rice', 'fried-rice', {}, [
      item('Pork Fried Rice', '$14.99', 'Wok-fried rice with seasoned pork and green onion'),
      item(
        'Shrimp & Pork Fried Rice',
        '$14.99',
        'Fried rice with shrimp, pork, and green onion',
      ),
      item('Chicken Fried Rice', '$14.99', 'Wok-fried rice with chicken and green onion'),
      item('Duck Fried Rice', '$16.99', 'Savory fried rice with tender, flavorful duck'),
      item('Beef Fried Rice', '$14.99', 'Flavorful fried rice with tender beef and onion'),
      item('Shrimp Fried Rice', '$14.99', 'Fried rice with juicy shrimp and green onion'),
      item('Vegetable Fried Rice', '$14.99', 'Fried rice with mixed vegetables'),
      item(
        'Yang Chow Fried Rice',
        '$16.99',
        'Classic fish sauce fried rice with dried shrimp, chinese sausage, prawns, and green onion',
      ),
    ]),
    section('Banh Mi', 'banh-mi', { subHeader: 'Vietnamese Sandwiches' }, [
      item(
        'Grilled Pork',
        '$8.99',
        'Baguette filled with grilled pork, pickled vegetables, and herbs',
      ),
      item(
        'BBQ Pork',
        '$8.99',
        'Baguette stuffed with sweet and savory char siu pork, pickled vegetables, and fresh herbs',
      ),
      item(
        'Grilled Chicken',
        '$8.99',
        'Baguette filled with flavorful chicken, pickled vegetables, and herbs',
      ),
    ]),
    section('Sides', 'sides', {}, [
      item('Rice/Egg Noodles', '$3.00'),
      item('Steamed Rice', '$3.00'),
      item('Extra Broth', '$3.00'),
    ]),
    section('Drinks', 'drinks', {}, [
      item(
        'Cold Drinks',
        '$2.99',
        'Coke, Sprite, Root Beer, Red Bull, Arizona, Sunny D, Apple Juice',
      ),
      item(
        'Juice',
        '$3.99',
        'Rambutan, guava, passion fruit, lychee, mango, pineapple, dragon fruit',
      ),
      item(
        'Fresh Squeezed Juice',
        '$5.99',
        'Orange juice, Lime juice (vietnamese limeade)',
      ),
      item('Ca Phe Sua Da', '$4.99', 'Traditional Vietnamese iced coffee drink'),
      item('Thai Iced Tea', '$4.99'),
      item('Hot Tea', '$1.99'),
      item('Soy Milk Can', '$2.99'),
      item('Soy Milk Bottle', '$3.99'),
      item('Herbal Tea Can', '$2.99'),
      item('Grass Jelly', '$2.99'),
      item('Aloe Vera', '$2.99'),
      item('Jarritos', '$3.99'),
      item('Bottled Water', '$1.99'),
      item('Coconut Water', '$3.99'),
    ]),
    section('Boba', 'boba', {}, {
      layout: 'boba',
      boba: {
        title: 'Boba',
        price: '$5.99',
        flavorsSubtitle: 'Available Flavors',
        flavors: [
          'Mango',
          'Pineapple',
          'Passion Fruit',
          'Strawberry',
          'Cantaloupe',
          'Ube/Taro',
          'Cappuccino',
          'Coffee',
          'Lychee',
          'Durian',
          'Peach',
          'Watermelon',
          'Banana',
        ],
      },
    }),
    section(
      'Sugar Cane',
      'sugar-cane',
      { modifierText: 'Nuoc Mia (Sugar Cane Juice)' },
      [
        item('Dragon Fruit', '$6.99'),
        item('Passion Fruit', '$6.99'),
        item('Mango', '$6.99'),
        item('Orange', '$6.99'),
        item('Kumquat', '$6.99'),
      ],
    ),
    section('Desserts', 'desserts', {}, [
      item(
        'Sugar Donuts (10)',
        '$7.99',
        'Donut with crispy outside, soft inside, and coated in sugar',
      ),
      item(
        'Sesame Balls (9)',
        '$4.99',
        'Crispy, chewy pastry with red bean filling',
      ),
    ]),
  ],
}

mkdirSync(outDir, { recursive: true })
writeFileSync(
  outFile,
  JSON.stringify({ siteSettings, menuPage }, null, 2),
  'utf8',
)
console.log('Wrote', outFile)
