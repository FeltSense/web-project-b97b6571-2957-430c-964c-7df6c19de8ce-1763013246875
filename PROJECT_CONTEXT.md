# TechBusiness - Modern Tech Solutions Website

## Overview
A professional, modern website for a technology business targeting general consumers. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Brand Identity
- **Industry**: Technology
- **Target Audience**: General consumers
- **Style**: Modern, professional, clean
- **Color Scheme**: Blue (trust, professionalism) with white/gray neutrals

## Key Features

### 1. Hero Section
- Full-screen hero with professional tech imagery
- Large, impactful typography
- Clear value proposition
- Dual CTAs (primary and secondary)
- Statistics showcase
- Smooth scroll indicator

### 2. Services Showcase
- 6 comprehensive tech services:
  - Cloud Solutions
  - Cybersecurity
  - Custom Development
  - Data Analytics
  - AI & Automation
  - IT Consulting
- Clean grid layout (3 columns on desktop)
- Icon-based cards with hover effects
- Professional color-coded gradients

### 3. Team Profiles
- 4 key team members with professional photos
- Role descriptions and expertise areas
- Hover effects on images
- Clean, organized presentation

### 4. Testimonials
- 3 client testimonials
- Star ratings
- Client photos and positions
- Horizontal scroll carousel on mobile
- Different layout from services (cards vs grid)

### 5. Pricing Section
- Single enterprise plan at $29/month
- Comprehensive feature list (8 features)
- Trust badges (money-back, secure payment, 24/7 support)
- Integrated Stripe payment button
- Clear value proposition

### 6. Contact Form
- Split layout: contact info + form
- Required fields: name, email, message
- Optional: phone
- Hidden fields for founder_id and project_id
- Form submission to API endpoint
- Success/error states
- Business hours and contact information

### 7. Navigation
- Sticky header with scroll effect
- Logo + navigation links
- CTA button
- Mobile responsive menu
- Smooth scroll to sections

### 8. Footer
- Comprehensive link structure
- Social media links
- 4 categories: Services, Company, Resources, Legal
- Newsletter signup area
- Copyright and legal links

## Technical Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (body), Poppins (headings)

### Key Dependencies
- react: ^18.3.1
- react-dom: ^18.3.1
- next: ^14.2.0
- lucide-react: ^0.344.0
- tailwindcss: ^3.4.1
- typescript: ^5

## Design Principles

### Typography
- Large headings (text-5xl to text-8xl)
- Clear hierarchy
- Generous line spacing
- Professional font pairing

### Colors
- Primary: Blue (#2563eb)
- Accent colors for service cards
- Neutral base: White, grays
- High contrast for readability

### Spacing
- Generous padding (p-8 to p-16)
- Section spacing (py-20 to py-24)
- Breathing room throughout

### Interactions
- Smooth transitions (300ms)
- Hover effects on cards
- Scale transforms on buttons
- Shadow elevation on hover

## API Integration

### Form Submission
- **Endpoint**: https://deep-api-server-2moiw.kinsta.app/api/form-submissions
- **Method**: POST
- **Fields**: name, email, phone, message, founder_id, project_id

### Payment
- **Stripe Link**: https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00
- **Price**: $29/month

## Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Mobile menu for navigation
- Touch-friendly interactions

## Performance Optimizations
- Next.js Image optimization
- Component-based architecture
- Lazy loading where appropriate
- Optimized fonts (Google Fonts)
- Minimal JavaScript bundle

## Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- High contrast ratios
- Focus states on interactive elements

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Future Enhancements
- Blog section
- Case studies
- Client portal
- Live chat integration
- Analytics dashboard

## Maintenance Notes
- Update testimonials quarterly
- Review pricing annually
- Keep team photos current
- Monitor form submissions
- Regular security updates

## Environment Variables
- FOUNDER_ID_PLACEHOLDER: Replace with actual founder ID
- PROJECT_ID_PLACEHOLDER: Replace with actual project ID

## Deployment
- Optimized for Vercel deployment
- Static generation where possible
- API routes for form handling
- CDN for asset delivery