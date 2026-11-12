// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // From Logo: Deep Authority
        'irsc-purple': '#4c1d95',    // Deep Violet (Logo base)
        
        // The New Matte Color: Professional & Grounded
        'irsc-slate': '#475569',     // Matte Slate Blue (Replaces Pink)
        
        // From Logo: Community & Clarity
        'irsc-cyan': '#0e7490',      // Matte Cyan
        
        // Earthy Highlights
        'irsc-amber': '#d97706',     // Matte Gold (Replaces bright orange)
        'irsc-emerald': '#065f46',   // Matte Green (For Growth/Success)
        
        // Backgrounds
        'neutral-ivory': '#fdfbf7',  // Calm Paper-like background
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'], // Used for Headlines (Authority)
        'sans': ['"Inter"', 'sans-serif'],        // Used for Body & UI (Clarity)
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(76, 29, 149, 0.05)', // Subtle purple-tinted shadow
      }
    }
  }
}