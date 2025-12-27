# Portfolio Website - Computer Engineering Student

A modern, clean, and ATS-friendly portfolio website built with Next.js, React, and Tailwind CSS. Optimized for recruiters and designed to showcase your skills, projects, and achievements effectively.

## 🚀 Features

- **Modern & Professional Design**: Clean UI with subtle green accents
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **SEO Optimized**: Proper meta tags, semantic HTML, and heading structure
- **Fast Loading**: Optimized performance with Next.js
- **Smooth Animations**: Framer Motion for engaging user experience
- **ATS-Friendly**: Structured content for better parsing by Applicant Tracking Systems
- **Contact Form**: Validated contact form with error handling

## 📋 Sections

1. **Hero Section**: Name, title, value proposition, and CTA buttons
2. **About Me**: Professional introduction and key highlights
3. **Skills**: Categorized technical skills with icons
4. **Projects**: Detailed project cards with problem statements, tech stack, features, and impact
5. **Education**: Academic details, GPA, coursework, and achievements
6. **Experience & Achievements**: Internships, hackathons, certifications
7. **Contact**: Contact form with validation and social links
8. **Footer**: Quick links, contact info, and social media

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript (React)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## ✏️ Customization Guide

### 1. Personal Information

**File**: `app/layout.js`
- Update the metadata (title, description, keywords)

**File**: `app/components/Hero.js`
- Change "Your Name" to your actual name
- Update the title and value proposition
- Update social media links (GitHub, LinkedIn, Email)

**File**: `app/components/Navbar.js`
- Update "YourName" in the logo

**File**: `app/components/Footer.js`
- Update "YourName" and contact information

### 2. About Section

**File**: `app/components/About.js`
- Customize the introduction paragraphs
- Modify the highlights if needed

### 3. Skills Section

**File**: `app/components/Skills.js`
- Add or remove skills based on your expertise
- Update skill categories as needed

### 4. Projects Section (IMPORTANT)

**File**: `app/components/Projects.js`
- Replace the sample projects with your actual projects
- For each project, update:
  - `name`: Project name
  - `problem`: Problem statement
  - `techStack`: Technologies used
  - `features`: Key features (array)
  - `impact`: Measurable impact
  - `learning`: What you learned
  - `github`: GitHub repository URL
  - `demo`: Live demo URL
  - `highlight`: Set to `true` for featured projects

### 5. Education Section

**File**: `app/components/Education.js`
- Update university/college name
- Update GPA and duration
- Modify relevant courses
- Update academic achievements

### 6. Experience & Achievements

**File**: `app/components/Experience.js`
- Add your internships, hackathons, certifications
- Update the type, title, organization, duration, and description

### 7. Contact Information

**File**: `app/components/Contact.js`
- Update email, phone, and location
- Update social media links

### 8. Resume

- Place your resume PDF in the `public` folder as `resume.pdf`
- Or update the link in `app/components/Hero.js`

### 9. Colors (Optional)

**File**: `app/globals.css`
- Modify CSS variables to change the color scheme:
  - `--primary-green`: Main accent color
  - `--primary-green-light`: Lighter shade
  - `--primary-green-dark`: Darker shade

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy!

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The website is fully responsive and tested on:
- Mobile devices (320px - 767px)
- Tablets (768px - 1023px)
- Desktops (1024px and above)

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Proper heading hierarchy
- Alt text for images (when added)

## 📈 SEO Best Practices

- Proper meta tags and Open Graph tags
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design
- Unique page titles and descriptions

## 🎨 Design Philosophy

- **Professional & Minimal**: Clean design that puts content first
- **Green Accent**: Represents confidence, growth, and freshness
- **Smooth Animations**: Engaging without being distracting
- **Typography**: Inter font for modern, readable text
- **Whitespace**: Proper spacing for better readability

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

If you have any questions or suggestions, feel free to reach out!

---

**Built with ❤️ using Next.js**
# Portfolio
