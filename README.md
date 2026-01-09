# Dr. Suresh Kumar Devaraj - Pulmonologist Website

A modern, responsive website for Dr. Suresh Kumar Devaraj, Assistant Professor & Pulmonologist in Kanchipuram, Tamil Nadu.

## Features

- **Responsive Design**: Fully responsive and optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and professional design with smooth animations and hover effects
- **SEO Optimized**: Built with SEO best practices including meta tags and semantic HTML
- **Contact Forms**: Easy appointment booking system with form validation
- **FAQ Section**: Interactive accordion-style FAQ for common questions
- **Gallery Section**: Image gallery showcasing clinic and facilities
- **Service Showcase**: Comprehensive display of treatments and services
- **Mobile Menu**: Hamburger menu with smooth transitions for mobile navigation
- **Social Media Integration**: Instagram link to @dr.suresh_pulmo_pearls
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (Vanilla JS)
- Font Awesome Icons

## Setup Instructions

### Local Development

1. **Clone or Download** this repository to your local machine

2. **Open the project** in your preferred code editor

3. **Open `index.html`** in a web browser:
   - Simply double-click the `index.html` file, OR
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

4. **Access the website** at `http://localhost:8000` (or the port your server uses)

### Deployment

You can deploy this website to any static hosting service:

- **Netlify**: Drag and drop the folder or connect your Git repository
- **Vercel**: Connect your repository or use Vercel CLI
- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **Any Web Hosting**: Upload all files via FTP to your hosting provider

## File Structure

```
doctor/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles (responsive design)
├── script.js           # JavaScript functionality
├── README.md           # This file
└── images/             # Image assets
    ├── hero.png        # Hero section image
    ├── photo.png       # Doctor's photo
    ├── treatment-1.png # Gallery image 1
    ├── treatment-2.png # Gallery image 2
    ├── treatment-3.png # Gallery image 3
    ├── treatment-4.png # Gallery image 4
    └── README.md       # Image directory documentation
```

## Customization

### Update Contact Information

Edit the contact details in `index.html`:
- Phone number: Search for `7200603928` and replace
- Email: Search for `suri1154@gmail.com` and replace
- Location: Search for `Near Upashana Hotel, Kanchipuram, Tamil Nadu` and update
- Clinic Hours: Search for `6:00 PM - 8:30 PM` and update
- Instagram: Update the Instagram link in the social links section

### Update Doctor Information

Edit the doctor's information in the About section of `index.html`:
- Name, credentials, and bio
- Specializations
- Experience details

### Modify Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2c5aa0;      /* Main brand color */
    --secondary-color: #1a4a7a;    /* Secondary color */
    --accent-color: #ff6b6b;       /* Accent/CTA color */
}
```

### Update Images

The website uses the following images (located in the `images/` folder):

1. **Hero Image** (`hero.png`): Displayed in the hero section
   - Update path in `index.html` line ~82

2. **Doctor Photo** (`photo.png`): Used in hero and about sections
   - Update path in `index.html` lines ~82 and ~124

3. **Gallery Images** (`treatment-1.png` through `treatment-4.png`): 
   - Used in the Gallery section
   - Update paths in `index.html` Gallery section

To replace images:
1. Add your new image files to the `images/` folder
2. Update the `src` attributes in `index.html` to point to your new images
3. Ensure images are optimized for web (recommended: JPG or PNG format)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Overview

### Sections Included

1. **Header & Navigation**: Sticky header with smooth navigation and social media links
2. **Hero Section**: Eye-catching introduction with doctor's photo and call-to-action
3. **About Doctor**: Detailed information about Dr. Devaraj with credentials and specializations
4. **Consultation Timings**: Clinic hours (6:00 PM - 8:30 PM) and location details
5. **Treatments**: Comprehensive list of services offered (Asthma, TB, Sleep Disorders, etc.)
6. **Gallery**: Image gallery showcasing clinic and facilities (4 images)
7. **Services/Facilities**: Diagnostic and treatment facilities (PFT, Allergy Testing, etc.)
8. **Why Choose**: Benefits of choosing this doctor
9. **Appointment Booking**: Contact form for appointments with validation
10. **FAQ**: Frequently asked questions with interactive accordion
11. **Footer**: Contact information, quick links, and social media

### Interactive Features

- **Smooth Scrolling**: Smooth navigation between sections
- **Mobile Menu**: Responsive hamburger menu with backdrop overlay
- **FAQ Accordion**: Expandable/collapsible FAQ items
- **Form Validation**: Appointment form with client-side validation
- **Hover Effects**: Interactive hover effects on cards and buttons
- **Active Link Highlighting**: Navigation links highlight based on scroll position
- **Image Gallery**: Responsive image gallery with hover zoom effects
- **Floating Appointment Button**: Fixed button for quick appointment access
- **Social Media Links**: Direct links to Instagram and other social platforms

## Contact Information

**Dr. Suresh Kumar Devaraj**  
Assistant Professor & Pulmonologist  
Kanchipuram, Tamil Nadu

- **Phone**: 7200603928
- **Email**: suri1154@gmail.com
- **Location**: Near Upashana Hotel, Kanchipuram, Tamil Nadu
- **Clinic Hours**: 6:00 PM - 8:30 PM
- **Instagram**: [@dr.suresh_pulmo_pearls](https://www.instagram.com/dr.suresh_pulmo_pearls/)

## License

This website template is created for Dr. Suresh Kumar Devaraj. All rights reserved.

## Support

For any issues or questions about this website, please contact the development team or refer to the documentation.

---

## Recent Updates

- Added Gallery section with 4 images
- Integrated Instagram social media link
- Updated location details (Near Upashana Hotel)
- Added clinic hours (6:00 PM - 8:30 PM)
- Improved mobile responsiveness for all sections
- Enhanced image display with proper responsive sizing

## Notes

- **Form Submission**: The appointment form automatically sends submissions to:
  - **Email**: suri1154@gmail.com (via mailto link)
  - **WhatsApp**: 7200603928 (opens WhatsApp with formatted message)
  
  Both email and WhatsApp windows open when form is submitted. The form data is formatted and sent automatically. Check your email inbox and WhatsApp messages for new appointment requests.

- **Images**: All images should be optimized for web use. Recommended formats: JPG for photos, PNG for graphics with transparency.

- **Social Media**: Instagram link is configured (@dr.suresh_pulmo_pearls). Update other social media links (Facebook, Twitter, LinkedIn) in the header section if needed.

