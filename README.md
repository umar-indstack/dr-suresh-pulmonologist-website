# Dr. Suresh Kumar Devaraj - Pulmonologist Website

A modern, responsive website for Dr. Suresh Kumar Devaraj, Assistant Professor & Pulmonologist in Kanchipuram, Tamil Nadu.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **SEO Optimized**: Built with SEO best practices in mind
- **Contact Forms**: Easy appointment booking system
- **FAQ Section**: Interactive accordion-style FAQ
- **Service Showcase**: Comprehensive display of treatments and services
- **Mobile Menu**: Hamburger menu for mobile navigation

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
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization

### Update Contact Information

Edit the contact details in `index.html`:
- Phone number: Search for `7200603928` and replace
- Email: Search for `suri1154@gmail.com` and replace
- Location: Search for `Kanchipuram, Tamil Nadu` and update

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

### Add Doctor Photo

Replace the placeholder icon with an actual photo:
1. Add your image file to the project folder
2. In `index.html`, replace:
   ```html
   <div class="doctor-image-placeholder">
       <i class="fas fa-user-md"></i>
   </div>
   ```
   With:
   ```html
   <img src="path-to-your-image.jpg" alt="Dr. Suresh Kumar Devaraj">
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Overview

### Sections Included

1. **Header & Navigation**: Sticky header with smooth navigation
2. **Hero Section**: Eye-catching introduction with call-to-action
3. **About Doctor**: Detailed information about Dr. Devaraj
4. **Consultation Timings**: Available hours display
5. **Treatments**: Comprehensive list of services offered
6. **Services/Facilities**: Diagnostic and treatment facilities
7. **Why Choose**: Benefits of choosing this doctor
8. **Appointment Booking**: Contact form for appointments
9. **FAQ**: Frequently asked questions with accordion
10. **Footer**: Contact information and quick links

### Interactive Features

- Smooth scrolling navigation
- Mobile-responsive hamburger menu
- FAQ accordion functionality
- Form validation
- Hover effects and animations
- Active link highlighting on scroll

## Contact Information

**Dr. Suresh Kumar Devaraj**  
Assistant Professor & Pulmonologist  
Kanchipuram, Tamil Nadu

- **Phone**: 7200603928
- **Email**: suri1154@gmail.com

## License

This website template is created for Dr. Suresh Kumar Devaraj. All rights reserved.

## Support

For any issues or questions about this website, please contact the development team or refer to the documentation.

---

**Note**: Remember to update the form submission handler in `script.js` if you want to integrate with a backend service or email service provider for handling appointment requests.

