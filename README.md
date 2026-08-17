# Bloom Studio — Website

A React + Vite website for **Bloom Studio**, a newborn, maternity, toddler &
family photography studio in Salem, Tamil Nadu.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Structure

- `src/data.js` — business details (address, phone, hours, rating) and the
  gallery categories/services. Edit this file first if anything changes.
- `src/pages/` — Home, About, Services, Gallery, Contact
- `src/components/` — Header, Footer, sliders, WhatsApp button, etc.
- `public/images/gallery/{newborn,maternity,toddlers,family}/` — photos,
  organised by category and numbered `01.jpg`, `02.jpg`, ...
- `public/images/logo/bloom-logo.png` — the studio logo (used in the header
  and as the favicon source).

## Things to double-check before launch

- `src/data.js` → confirm the phone number, WhatsApp number, email, opening
  time (only the closing time — 8 PM — was confirmed) and Google review count.
- The homepage hero slides every **3 seconds** through one photo from each
  category (Newborn, Maternity, Toddlers, Family) — edit the `homeSlides`
  array in `src/pages/Home.jsx` to change which photos are featured.
- Add real Instagram / Facebook links in `src/data.js`.
