# Consulting Website (Vite Edition)

Modern, fast consulting site for booking time and purchasing consulting hours.

## Features

- **About Me:** Minimal bio and contact info
- **Book Time:** Google Calendar booking (embed or API integration)
- **Checkout:** Stripe payment button to purchase consulting hours

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Development**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Deploy to GitHub Pages**
   - On push to `main` branch, site will deploy automatically via GitHub Actions.

## Customization

- **About Me:** Edit `src/components/AboutMe.jsx`
- **Google Calendar:** Replace `src/components/BookTime.jsx` iframe `src` with your calendar embed link.
- **Stripe Checkout:** Replace the checkout link in `src/components/Checkout.jsx` with your Stripe Checkout URL ([setup guide](https://stripe.com/docs/checkout)).

## Hosting

Site is automatically published to [https://pparedes1.github.io/consulting](https://pparedes1.github.io/consulting) after each push to `main`.

## Powered by [Vite](https://vitejs.dev/)
