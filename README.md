<div align="center">

# 🎀 Sweet-Bday — Interactive Celebration Reel ✨

<p align="center">
  <strong>A heartwarming, cinematic, multi-scene interactive birthday greeting web experience.</strong>
  <br />
  <em>Crafted with pure Vanilla JavaScript, hardware-accelerated CSS3, tactile 3D interactions, and love.</em>
</p>

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sweet-bday.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Performance: 60FPS](https://img.shields.io/badge/Performance-60FPS_Silky-4cc9f0?style=for-the-badge)](#-performance--engineering-highlights)
[![Mobile: Responsive](https://img.shields.io/badge/Mobile-100%25_Responsive-9b5de5?style=for-the-badge)](#-responsive--mobile-first-design)

<br />

[Explore Demo](https://sweet-bday.vercel.app) • [Key Features](#-interactive-scenes--features) • [Customization Guide](#-customization-guide) • [Quick Start](#-quick-start) • [Report Bug](https://github.com/saklincodes/Sweet-Bday/issues)


---

</div>

## 📖 Table of Contents

- [🌸 Overview](#-overview)
- [✨ Interactive Scenes & Features](#-interactive-scenes--features)
  - [Scene 1: Acoustic Welcome & Custom Audio Player](#scene-1-acoustic-welcome--custom-audio-player)
  - [Scene 2: Vintage Gingham Cake & Candle Wishes](#scene-2-vintage-gingham-cake--candle-wishes)
  - [Scene 3: 3D Flip Polaroid Photo Album](#scene-3-3d-flip-polaroid-photo-album)
  - [Scene 4: Pastel Balloons & Interactive Wishlist](#scene-4-pastel-balloons--interactive-wishlist)
  - [Scene 5: Grand Finale 3D Unboxing & Fireworks](#scene-5-grand-finale-3d-unboxing--fireworks)
- [⚡ Performance & Engineering Highlights](#-performance--engineering-highlights)
- [📱 Responsive & Mobile-First Design](#-responsive--mobile-first-design)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [🎨 Customization Guide (Personalize It!)](#-customization-guide-personalize-it)
- [🚀 Quick Start & Local Setup](#-quick-start--local-setup)
- [🌐 Deploy to GitHub Pages](#-deploy-to-github-pages)
- [🌐 Browser Compatibility](#-browser-compatibility)
- [👤 Author & Acknowledgments](#-author--acknowledgments)
- [💖 License](#-license)

---

## 🌸 Overview

**Sweet-Bday** reimagines static digital greeting cards into an immersive, storybook-style interactive journey. Built specifically for mobile and desktop screens alike, it guides the recipient through 5 lovingly animated chapters—combining custom audio, tactile 3D cards, celebratory physics, and aerial fireworks.

### Why Sweet-Bday?
- **Zero Bloatware / Zero Dependencies**: No React, no Tailwind, no heavy node packages. Instant sub-second initial load.
- **Cinematic Pacing**: Designed like an Instagram/TikTok interactive story reel with intuitive chapter navigation.
- **Deep Personalization**: Swap photos, personalized heartfelt notes, custom playlist tracks, and custom checklist wishes in minutes.

---

## ✨ Interactive Scenes & Features

| Scene | Theme | Key Interactions |
| :---: | :--- | :--- |
| **01** | **Welcome & Music** | Calligraphy entry, swinging washi-tape cat portrait, fully-featured music player with custom track scrubbing |
| **02** | **Vintage Cake** | Pastel pink gingham tablecloth, bouncing cake physics, soaring floating balloons |
| **03** | **Polaroid Trio** | True 3D card flips (180°), organic hover tilts, handwritten stationery notes on the reverse |
| **04** | **Helium & Wishes** | 5 glossy floating balloons, animated dancing bunny, interactive stationery checklist with sparkling stamps |
| **05** | **Grand Finale** | Tap-to-unwrap 3D gift box, queen crown reveal, multi-colored starburst fireworks & confetti cannon |

---

### Scene 1: Acoustic Welcome & Custom Audio Player
* **Calligraphy Greeting**: Bouncing character typography entrance with pastel gradient highlights.
* **Washi-Tape Frame**: Dynamic swinging pendulum animation holding an aesthetic kitten greeting.
* **Custom Glassmorphic Music Player**:
  * Real-time duration counter & interactive scrubbable progress bar.
  * Smooth play/pause toggling with auto-updating timestamps.
  * Plays a soothing acoustic birthday track right out of the box.

### Scene 2: Vintage Gingham Cake & Candle Wishes
* **Checkered Tablecloth & Scalloped Lace**: Coquette aesthetic tablecloth with warm lighting effects.
* **Joyful Cake Bounce**: Tap or click the vintage cherry cake to trigger dynamic squash-and-stretch bounce physics.
* **Rising Balloons**: Continuous stream of pastel balloons ascending into the sky.

### Scene 3: 3D Flip Polaroid Photo Album
* **Realistic 3D Perspective**: Built using CSS `transform-style: preserve-3d` and `perspective: 1000px`.
* **Tap-to-Flip**: Each card flips 180 degrees upon tapping to reveal hidden handwritten messages on vintage ruled paper.
* **Tactile Physics**: Micro-rotations on hover and touch simulate holding real physical polaroid prints.

### Scene 4: Pastel Balloons & Interactive Wishlist
* **Quilted Diamond Backdrop**: Elegant textured scrapbook lattice background.
* **Bobbing Balloon Bouquet**: 5 glossy pastel helium balloons with natural floating drift animations.
* **Interactive Ruled Checklist**: Spiral notebook stationery where each birthday wish can be checked off, triggering sparkling celebratory badges (`✨` / `💖`).
* **Viewport Lock (`vh` / `dvh`)**: Strict zero-scroll mobile layout prevents clumsy overflowing.

### Scene 5: Grand Finale 3D Unboxing & Fireworks
* **Interactive Ribbon Box**: 3D gift box with ribbon that unwraps and springs open upon user click.
* **The Royal Reveal**: Queen crown illustration, celebratory cake GIF, and personalized celebration tribute.
* **Particle Fireworks System**:
  * Dual-layer particle explosions: aerial starburst shells + falling metallic confetti streamers.
  * Shockwave expansion rings and gravity simulation.
  * **"Fire Again" Button**: Re-launch infinite fireworks on demand!

---

## ⚡ Performance & Engineering Highlights

```
⚡ 100% Vanilla JS (0 KB framework overhead)
🎯 60 FPS smooth animations using GPU-promoted layers
🧩 Reflow-Free Particle Math: Calculated via O(1) polar coordinates
📦 DocumentFragment Batching: Confetti and sparks committed in a single composite pass
```

1. **Composite-Only Animations**: All transitions utilize `transform` and `opacity` to avoid costly layout recalculations (reflows).
2. **Zero Layout Thrashing**: Coordinates for bursts and particle trajectories are calculated mathematically without polling DOM geometry (`getBoundingClientRect()`).
3. **Memory Friendly**: Particle elements are automatically culled and dereferenced from the DOM once animations complete.

---

## 📱 Responsive & Mobile-First Design

Sweet-Bday was meticulously calibrated across screen viewports:
- **Smart Fluid Clamping**: Typography and padding dynamically interpolate between 320px mobile screens and 4K ultra-wide monitors using CSS `clamp()`.
- **Dynamic Viewport Unit Handling**: Uses modern viewport units (`dvh` / `vh`) to prevent address-bar jitter on mobile Safari and Chrome.
- **Touch-Optimized Hit Targets**: Generous minimum touch targets (48px+) ensure comfortable tapping on any smartphone.

---

## 🛠️ Tech Stack

<div align="left">

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, accessible button roles, and audio markup |
| **CSS3** | 3D transforms, keyframe sequences, glassmorphism, flex/grid layouts |
| **JavaScript (ES6+)** | State management, scene navigation, Web Audio control, particle generation |
| **Google Fonts** | Elegant typography (*Outfit*, *Playfair Display*, *Caveat*) |

</div>

---

## 📂 Project Structure

```bash
Sweet-Bday/
├── assets/
│   ├── birthday-cat.gif          # Scene 1 washi-framed aesthetic kitten
│   ├── kawaii-cake.gif           # Scene 2 vintage cherry cake illustration
│   ├── marin-1.jpg               # Scene 3 Polaroid photo 1
│   ├── marin-2.jpg               # Scene 3 Polaroid photo 2
│   ├── marin-3.jpg               # Scene 3 Polaroid photo 3
│   ├── cute-bunny.gif            # Scene 4 cheering sticker animation
│   ├── celebration-cake.gif      # Scene 5 unboxed celebration cake
│   └── Happy Birthday Song 🎂.mp3 # High-quality acoustic birthday track
├── index.html                    # 5-scene semantic HTML layout
├── style.css                     # Complete design system, 3D cards & animations
├── script.js                     # Audio player logic, navigation, particle physics
├── .gitignore                    # Git cleanliness rules
├── LICENSE                       # MIT open-source license
└── README.md                     # Documentation
```

---

## 🎨 Customization Guide (Personalize It!)

You can easily adapt Sweet-Bday for your loved one, best friend, or family member:

### 1. Change the Name and Headings
Open [`index.html`](index.html) and search for the placeholder names or titles (e.g., `Princess`, `Queen`, or custom messages) and update them with the recipient's name.

### 2. Replace the Photos
Replace the files inside [`assets/`](assets/):
- `marin-1.jpg`
- `marin-2.jpg`
- `marin-3.jpg`

*Tip: For best polaroid aesthetics, use square or 4:5 aspect ratio photos.*

### 3. Personalize the Handwritten Polaroid Notes
In [`index.html`](index.html), locate the `<div class="polaroid-back">` sections in Scene 3 to personalize the heartfelt secret notes.

### 4. Customize the Wishlist Items
In [`index.html`](index.html) under Scene 4 (`#scene4`), edit the wishlist items in the `<ul class="wish-checklist">` to add personal jokes, bucket-list items, or dreams.

### 5. Change the Background Music
Place your desired `.mp3` file in the [`assets/`](assets/) folder and update the `src` attribute in the `<audio id="audioPlayer">` element in [`index.html`](index.html):
```html
<audio id="audioPlayer" src="assets/YourSong.mp3" preload="metadata"></audio>
```

---

## 🚀 Quick Start & Local Setup

Sweet-Bday requires **no installations, compilers, or Node packages**.

### 1. Clone the repository
```bash
git clone https://github.com/saklincodes/Sweet-Bday.git
cd Sweet-Bday
```

### 2. Run locally
- **Option A (Instant)**: Simply double-click `index.html` in your file explorer to open it in any web browser.
- **Option B (VS Code Live Server)**: Right-click `index.html` inside VS Code and select **"Open with Live Server"**.
- **Option C (Python local server)**:
  ```bash
  python -m http.server 8000
  ```
  Then visit `http://localhost:8000` in your browser.

---

## 🌐 Deploy to GitHub Pages

### Option A: Vercel (Recommended — Live Production)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsaklincodes%2FSweet-Bday)

Sweet-Bday is live in production on Vercel:
```
https://sweet-bday.vercel.app
```
To deploy your own copy via Vercel CLI:
```bash
npm i -g vercel
vercel --prod
```

### Option B: GitHub Pages
1. Push this repository to your GitHub account.
2. Go to your repository on GitHub: `Settings` > `Pages`.
3. Under **Branch**, select `main` and folder `/ (root)`.
4. Click **Save**.
5. Your live link will be ready at:
   ```
   https://saklincodes.github.io/Sweet-Bday/
   ```

---

## 🌐 Browser Compatibility

| Browser | Supported Version | Status |
| :--- | :--- | :---: |
| **Google Chrome** | 80+ | Full Support |
| **Mozilla Firefox** | 78+ | Full Support |
| **Apple Safari** (macOS & iOS) | 13+ | Full Support |
| **Microsoft Edge** | 80+ | Full Support |
| **Mobile Browsers** (Chrome, Safari, Samsung Internet) | Latest | Full Support |

---

## 👤 Author & Acknowledgments

Crafted with care, creativity, and joy by **Saklin**:

- **GitHub**: [@saklincodes](https://github.com/saklincodes)
- **Instagram**: [@saklin_01](https://instagram.com/saklin_01)
- **Project Repository**: [saklincodes/Sweet-Bday](https://github.com/saklincodes/Sweet-Bday)

⭐ **If you enjoyed this project or used it to make someone smile, please give it a star on GitHub!**

---

## 💖 License

This project is licensed under the **[MIT License](LICENSE)** — feel free to use, modify, and distribute it to bring joy to birthdays everywhere.
