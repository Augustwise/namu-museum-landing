# NAMU — National Art Museum of Ukraine Landing Page

A responsive landing page for the National Art Museum of Ukraine (NAMU), presenting the current exhibition, upcoming events, museum news, and visitor information in a clean, gallery-inspired layout.

## Live Preview

Experience the live website: [NAMU Landing Demo](https://augustwise.github.io/namu-museum-landing/)

## Design Reference

Figma design file: [NAMU Landing Design](https://www.figma.com/file/HL3XGt5ZatvJoYBhOaWY5x/museum-prototype?node-id=323%3A1957)

## Technologies Used

**Core**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

- HTML5 — semantic markup
- SCSS — styling
- JavaScript (Vanilla) — interactivity

**Development & Tooling**

![Parcel](https://img.shields.io/badge/Parcel-21374B?style=for-the-badge&logo=parcel&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Stylelint](https://img.shields.io/badge/Stylelint-263238?style=for-the-badge&logo=stylelint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

- Parcel — build tool and dev server
- ESLint — JavaScript linting
- Stylelint — SCSS linting
- LintHTML — HTML linting
- Prettier — code formatting

**Deployment**

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

- GitHub Pages — hosting

## Getting Started

Follow these steps to set up the project locally:

1. Clone the repository:

    ```
    git clone https://github.com/Augustwise/namu-museum-landing.git
    cd namu-museum-landing
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Run the project locally:

    ```
    npm start
    ```

4. Build for production:

    ```
    npm run build
    ```

## Features

- **Responsive Design**: Adapts to screens from mobile (up to 767px) through tablet (768–1279px) to desktop (1280px+).
- **Mobile Navigation**: Slide-out menu with language switcher (`#menu`), accessible via the header burger icon.
- **Language Switcher**: Site language selector available in both the header and the mobile menu.
- **Current Exhibition**: Hero section highlighting the active exhibition dates and title.
- **Event Registration Modal**: Dynamically generated modal with a name/email form, triggered from the header and events section, closable via overlay click, close button, or `Esc`.
- **Events & News Sections**: Dedicated sections for upcoming events (`#events`) and museum news (`#news`).
- **Newsletter Subscription**: Email subscription form for museum updates.
- **Optimized Images**: WebP images with PNG fallbacks for faster load times.
- **Accessibility**: Semantic structure, `aria-label`s, and visually hidden labels for form controls.
- **Reduced Motion Support**: Respects `prefers-reduced-motion` for users sensitive to animations.

