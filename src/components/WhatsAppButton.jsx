import "./WhatsAppButton.css";
import { business } from "../data";

// ---------------------------------------------------------------
// Central place to configure WhatsApp contact details.
// Pulls the studio's real WhatsApp number from data.js.
// ---------------------------------------------------------------
const PHONE = business.whatsappNumber;
const DEFAULT_MESSAGE =
  "Hi Bloom Studio, I'd like to enquire about a photoshoot.";

export function buildWhatsAppLink(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-fab"
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Bloom Studio on WhatsApp"
    >
      <span className="whatsapp-fab-ring" aria-hidden="true" />
      <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M16.02 3C9.4 3 4 8.37 4 14.98c0 2.15.57 4.24 1.65 6.08L3 29l8.15-2.6a12.9 12.9 0 0 0 4.87.96h.01c6.62 0 12.02-5.37 12.02-11.98C28 8.37 22.64 3 16.02 3zm0 21.9h-.01a10.87 10.87 0 0 1-5.55-1.53l-.4-.24-4.83 1.55 1.58-4.71-.26-.48a9.93 9.93 0 0 1-1.52-5.31C5.03 9.47 9.98 4.9 16.02 4.9c2.9 0 5.63 1.14 7.68 3.19a10.77 10.77 0 0 1 3.18 7.65c0 5.9-4.95 10.16-10.86 10.16zm5.94-7.61c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.26-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.6-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.5.14-.65.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.55-.73-.56h-.62c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.68 0 1.58 1.15 3.11 1.31 3.32.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37z"
        />
      </svg>
    </a>
  );
}
