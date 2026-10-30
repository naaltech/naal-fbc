[![Netlify Status](https://api.netlify.com/api/v1/badges/bcaa3b4a-55ec-4b85-acf1-cba9cd501fe2/deploy-status)](https://app.netlify.com/projects/naalfbc/deploys)
# Science Workshop Website 🧬

A modern, responsive website for Nevzat Ayaz Anadolu Lisesi Science Workshop featuring 8 specialized scientific committees.

<img width="1914" height="947" alt="resim" src="https://github.com/user-attachments/assets/6d43ae2e-0681-4aec-9df4-edeef8641424" />

## 🚀 Tech Stack

- **Astro** - Static site framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Leaflet** - Interactive maps
- **Heroicons** - Icons
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
src/
├── pages/            # index, komiteler, 404
├── layouts/          # Base HTML layout
├── data/             # Committee data
├── styles/           # Global styles
└── components/
    ├── ui/           # Tailwind UI components
    ├── Header.astro  # Navigation
    ├── Footer.astro  # Footer
    ├── Map.astro     # Interactive map
    └── ...           # Other sections
```

## 🌐 Environment Variables

Create `.env.local`:

```bash
PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
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

