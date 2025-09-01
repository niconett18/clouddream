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

1. Open `src/app/globals.css`
2. Find the `:root` section with CSS variables
3. Update the `--accent` color value to your desired brand color

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
