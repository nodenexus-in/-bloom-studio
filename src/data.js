// ---------------------------------------------------------------
// Bloom Studio — business details (Google Business listing)
// ---------------------------------------------------------------
export const business = {
  name: "Bloom Studio",
  tagline: "Newborn, Maternity, Toddler & Family Photography",
  address: "M P K Towers, 26/1 Saratha College Road, 5th Road, Salem, Tamil Nadu 636016",
  addressShort: "Saratha College Road, Salem, Tamil Nadu",
  phoneDisplay: "063803 74339",
  phoneTel: "+916380374339",
  whatsappNumber: "916380374339",
  hoursNote: "Open daily · Closes 8:00 PM",
  rating: "4.9",
  reviewCount: "78",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bloom+Studio+Salem+Tamil+Nadu",
  email: "hello@bloomstudio.in",
  instagram: "https://instagram.com/",
};

function imgs(category, count) {
  return Array.from({ length: count }, (_, i) => ({
    src: `${import.meta.env.BASE_URL}images/gallery/${category}/${String(i + 1).padStart(2, "0")}.jpg`,
    title: category,
  }));
}

export const galleryCategories = [
  { slug: "newborn", name: "Newborn", images: imgs("newborn", 21) },
  { slug: "maternity", name: "Maternity", images: imgs("maternity", 42) },
  { slug: "toddlers", name: "Toddlers", images: imgs("toddlers", 14) },
  { slug: "family", name: "Family", images: imgs("family", 13) },
];

export const featuredImages = [
  ...imgs("newborn", 21).slice(0, 5),
  ...imgs("maternity", 42).slice(0, 5),
  ...imgs("toddlers", 14).slice(0, 4),
  ...imgs("family", 13).slice(0, 4),
];

export const services = [
  {
    number: "01",
    title: "Newborn Photography",
    text: "Gentle, safe and beautifully styled sessions that capture your baby's very first days — swaddles, tiny details and pure calm.",
  },
  {
    number: "02",
    title: "Maternity Photoshoot",
    text: "Elegant, glowing portraits that celebrate the beauty of pregnancy, with flowing gowns, soft light and dreamy sets.",
  },
  {
    number: "03",
    title: "Toddler Shoots",
    text: "Playful, colourful and full of personality — themed sets designed around your little one's energy and curiosity.",
  },
  {
    number: "04",
    title: "Family Portraits",
    text: "Warm, natural photographs of the people who matter most — full of laughter, closeness and real connection.",
  },
];
