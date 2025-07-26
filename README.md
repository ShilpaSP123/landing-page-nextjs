# SoloPackers Bali Landing Page - Next.js Conversion

This project is a Next.js conversion of the original static HTML landing page for SoloPackers' Bali tour packages. The conversion maintains the exact same UI and functionality while leveraging React components and Next.js features.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **SEO Optimized**: Complete meta tags, structured data, and Open Graph tags
- **Interactive Components**: FAQ accordion, mobile navigation, modal forms
- **Performance Optimized**: Next.js Image optimization and lazy loading
- **Modern React**: Uses React hooks and functional components
- **TypeScript**: Full TypeScript support for better development experience

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles (converted from original CSS)
│   ├── layout.tsx           # Root layout with SEO meta tags
│   └── page.tsx             # Main page component
└── components/
    ├── Header.tsx           # Navigation header with mobile menu
    ├── Hero.tsx             # Hero section with pricing and CTA
    ├── Packages.tsx         # Bali packages grid
    ├── Reviews.tsx          # Customer reviews section
    ├── FAQ.tsx              # FAQ accordion
    ├── Footer.tsx           # Footer with links and company info
    ├── EnquiryModal.tsx     # Enquiry form modal
    ├── CallbackModal.tsx    # Callback form modal
    └── WhatsAppFixed.tsx    # Fixed WhatsApp button
```

## 🛠️ Installation & Setup

1. **Install Node.js** (if not already installed):
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔄 Conversion Details

### What was converted:

1. **HTML Structure** → **React Components**
   - Split into reusable, maintainable components
   - Added TypeScript interfaces for props
   - Implemented proper React patterns

2. **Vanilla JavaScript** → **React Hooks**
   - Mobile menu toggle using `useState`
   - FAQ accordion using `useState`
   - Modal state management using `useState`
   - Form handling with controlled components

3. **Static CSS** → **Next.js Global Styles**
   - Preserved all original styling
   - Maintained responsive design
   - Kept animations and transitions

4. **SEO & Meta Tags** → **Next.js Layout**
   - Structured data (JSON-LD)
   - Open Graph tags
   - Twitter cards
   - Proper meta descriptions

### Key Features Preserved:

- ✅ Responsive navigation with mobile hamburger menu
- ✅ Hero section with social proof and pricing
- ✅ Package cards with hover effects
- ✅ Customer review carousel
- ✅ Interactive FAQ accordion
- ✅ Modal forms for enquiries
- ✅ Fixed WhatsApp button
- ✅ Complete footer with links
- ✅ All animations and transitions
- ✅ Font Awesome icons
- ✅ Google Fonts integration

## 🎨 Styling

The project uses the original CSS converted to Next.js global styles. All styling is preserved exactly as in the original design:

- Inter font family from Google Fonts
- Font Awesome icons for UI elements
- Responsive breakpoints for mobile/tablet/desktop
- Hover effects and animations
- Color scheme and branding

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- Mobile: ≤ 480px
- Tablet: ≤ 768px
- Desktop: > 768px

## 🔗 External Integrations

- **WhatsApp**: Direct chat integration
- **Phone**: Click-to-call functionality
- **Images**: Optimized loading from SoloPackers CDN
- **Forms**: Ready for backend integration

## 🚀 Deployment

To deploy this Next.js application:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Vercel** (recommended):
   ```bash
   npx vercel
   ```

3. **Or deploy to any hosting platform** that supports Node.js

## 📞 Contact Information

- **Phone**: +91-8105678808
- **Email**: info@solopackers.com
- **Website**: www.solopackers.com
- **WhatsApp**: Direct chat available

## 🔧 Customization

To customize the application:

1. **Update content**: Modify the data arrays in components
2. **Change styling**: Edit `src/app/globals.css`
3. **Add features**: Create new components in `src/components/`
4. **Update SEO**: Modify meta tags in `src/app/layout.tsx`

## 📄 License

This project is for SoloPackers Experiences Pvt Ltd. All rights reserved.
