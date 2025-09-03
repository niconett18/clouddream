# Cloudream Website

A production-ready company website for Cloudream, a premium pillow and bolster brand. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern UI with responsive design
- Product catalog with categories and detail pages
- Blog with article listings and detail pages
- Contact form with validation
- SEO optimization with next-seo
- Smooth animations with framer-motion

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + lucide-react
- **Forms**: react-hook-form + zod
- **SEO**: next-seo, next-sitemap
- **Animation**: framer-motion

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dd-pillow.git
cd dd-pillow
```

2. Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.
## Project Structure

- `src/app/(site)`: Next.js App Router pages
- `src/components`: Reusable React components
- `src/components/ui`: shadcn/ui components
- `src/data`: Product data and other structured data
- `src/lib`: Utility functions and configuration
- `src/content`: Blog articles (MDX)
- `public`: Static assets (images, icons, etc.)

## Adding/Editing Products

Products are stored in `src/data/products.ts`. To add or edit products:

1. Open the `products.ts` file
2. Add a new product object to the `products` array following the existing pattern
3. Make sure to include all required fields and follow the type definitions
4. Add product images in `public/products/[category]/` with appropriate filenames referenced in the product data

Example of adding a new product:

```typescript
{
  id: "p005",
  category: "pillow",
  name: "New Pillow Product",
  slug: "new-pillow-product",
  shortDesc: "Short description of the new pillow product.",
  longDesc: "Longer, detailed description of the new pillow product...",
  price: 99.99,
  images: [
    "/products/pillow/new-product-1.jpg",
    "/products/pillow/new-product-2.jpg",
    "/products/pillow/new-product-3.jpg",
  ],
  specs: {
    size: ["Standard (20\" x 26\")", "Queen (20\" x 30\")"],
    fill: "Description of the fill material",
    cover: "Description of the cover material",
    firmness: "Medium"
  }
}
```

## Adding/Editing Articles

Articles are stored in `src/lib/articles.ts`. To add or edit articles:

1. Open the `articles.ts` file
2. Add a new article object to the `articles` array following the existing pattern
3. Make sure to include all required fields
4. Add article cover images in `public/article-images/` with appropriate filenames referenced in the article data

## Customizing Brand Colors

To change the brand colors:

1. Open `tailwind.config.js`
2. Update the brand colors in the theme.extend.colors.brand section:

```javascript
colors: {
  // Cloudream brand color palette
  brand: {
    primary: "#7E6148",      // Warm brown - main brand color
    secondary: "#C4B2A0",    // Light beige - secondary brand color
    accent: "#E8D8C7",       // Cream - accent color
    dark: "#4A3925",         // Dark brown - for text and accents
    light: "#F5F1EC",        // Off-white - background color
  },
  // other colors...
}
```

3. Also update the corresponding CSS variables in `src/app/globals.css`

## Deployment

### Deploying to Vercel

The easiest way to deploy this website is using Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Choose the repository and click "Deploy"

Vercel will automatically detect that it's a Next.js project and configure the appropriate build settings.

### Manual Deployment

To manually deploy the website:

1. Build the project:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

2. Generate the sitemap:

```bash
npm run postbuild
# or
yarn postbuild
# or
pnpm postbuild
```

3. The output will be in the `.next` directory, which can be deployed to any static hosting service or Node.js server that supports Next.js applications.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
