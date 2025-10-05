# Ambitieus Nederland Website

A minimalist and elegant marketing website for Ambitieus Nederland, showcasing the ambitious vision to polder the North Sea and reconnect the Dutch people with their historical spirit of innovation.

## Features

- **Hero Section**: Full-screen legendary image with text overlay about Dutch ambition
- **Image Carousels**: Beautiful carousel components for showcasing Dutch history
- **Responsive Design**: Mobile-friendly layout
- **Minimalist Styling**: Elegant design using orange, gold, and black color scheme
- **Contact Form**: Integrated email functionality using EmailJS
- **Pages**: Home, Visie, Over Ons, Contact

## Setup Instructions

### 1. Install Dependencies

```bash
cd ambiteus-nederland-site
npm install
```

### 2. Add Your Images

Place your historical Dutch images in the `src/assets/images/` folder. You'll need:
- `hero.jpg` - The main legendary image for the homepage hero section
- `image1.jpg`, `image2.jpg`, `image3.jpg`, etc. - Images for the carousels

Update the image paths in `src/pages/Home.jsx` to match your actual image filenames.

### 3. Set Up EmailJS for Contact Form

The contact form uses EmailJS to send emails. To set it up:

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{to_email}}`
4. Get your Service ID, Template ID, and Public Key
5. Update these values in `src/pages/Contact.jsx`:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```

### 4. Run the Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Customization

### Colors

The color scheme is defined in `src/index.css`:
- Orange: `#FF6B00`
- Gold: `#D4AF37`
- Black: `#0A0A0A`
- White: `#FAFAFA`

### Fonts

The website uses:
- **Cormorant Garamond** - Body text
- **Playfair Display** - Headings

### Content

You can edit the content in:
- `src/pages/Home.jsx` - Homepage content and text sections
- `src/pages/Visie.jsx` - Vision page content
- `src/pages/OverOns.jsx` - About Us page content
- `src/pages/Contact.jsx` - Contact page introduction

## Project Structure

```
ambiteus-nederland-site/
├── src/
│   ├── assets/
│   │   └── images/          # Place your images here
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Hero.jsx         # Hero section with image
│   │   ├── ImageCarousel.jsx # Carousel component
│   │   └── TextSection.jsx  # Text content sections
│   ├── pages/
│   │   ├── Home.jsx         # Homepage
│   │   ├── Visie.jsx        # Vision page
│   │   ├── OverOns.jsx      # About Us page
│   │   └── Contact.jsx      # Contact page
│   ├── App.jsx              # Main app component with routing
│   ├── App.css              # App-level styles
│   ├── index.css            # Global styles and theme
│   └── main.jsx             # Entry point
├── package.json
└── README.md
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **EmailJS** - Contact form email functionality
- **Google Fonts** - Cormorant Garamond & Playfair Display

## Contact

For questions about this website, contact: ambitieusnederland@gmail.com
