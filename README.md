# Science Workshop Website 🧬

A modern, responsive website for Nevzat Ayaz Anadolu Lisesi Science Workshop featuring 8 specialized scientific committees.

## 🚀 Tech Stack

- **Next.js 19** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Leaflet** - Interactive maps
- **shadcn/ui** - UI components
- **Web3Forms** - Contact form handling

## ✨ Features

- 8 Science committees with expert speakers
- Interactive location maps
- Mobile-responsive design
- Contact form integration
- Team member profiles
- Event scheduling

## 🏃‍♂️ Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
app/
├── page.tsx           # Homepage
├── komiteler/         # Committees page
├── layout.tsx         # Root layout
└── globals.css        # Global styles

components/
├── ui/               # shadcn/ui components
├── header.tsx        # Navigation
├── footer.tsx        # Footer
├── hero-section.tsx  # Hero section
├── team-section.tsx  # Team profiles
├── map.tsx          # Interactive map
└── ...              # Other sections
```

## 🌐 Environment Variables

Create `.env.local`:

```bash
WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
```

## 📝 Committees

1. **Modern Physics** - Quantum & Relativity
2. **Ecology & Climate** - Environmental science
3. **AI & Technology** - Machine learning & robotics
4. **Astronomy** - Space sciences
5. **Biotechnology** - Genetics & DNA
6. **Cancer Research** - Oncology & treatments
7. **Psychology** - Behavioral science
8. **Chemistry** - Molecular science

## 🎯 Key Pages

- `/` - Homepage with all sections
- `/komiteler` - Detailed committee information

