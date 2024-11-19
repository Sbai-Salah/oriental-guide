## Getting Started | ABOUT PROJECT : NOTES


### File Structure Overview

From the screenshot, it looks like you have a Next.js 14 project with the following structure:
```
src/
  app/
    api/
      cities/
        [id]/
          route.ts
        route.ts
      test/
    cities/
      [id]/
        page.tsx
      page.tsx
  fonts/
  interfaces/
  components/
```

### **Workflow Breakdown**

Let’s break down the flow of how things are executed in a Next.js app:

---

### 1. **The Entry Point (Root Layout or Page Component)**

In Next.js 14 (App Router), the entry point for your app is the `app/` directory. The `RootLayout` and individual page components live here. Every folder inside `app/` acts like a route, and every `page.tsx` file inside a folder is treated as a **page component** that is rendered when that route is accessed.

For example:
- `app/cities/page.tsx`: This file handles the `/cities` route.
- `app/cities/[id]/page.tsx`: This file handles dynamic routes like `/cities/1` or `/cities/2`, depending on the `id` parameter.

#### **RootLayout.tsx:**
From the code you shared earlier, your `RootLayout` wraps the whole app. It typically includes things like global navigation, footers, and common layout features that persist across all pages. This component is rendered first and wraps the children (pages) based on routing.

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Router>
          {children}  {/* Renders the specific page component here */}
          <Routes>
            <Route path="/cities/:id" element={<CityDetails />} />  {/* Handles city detail routing */}
          </Routes>
        </Router>
      </body>
    </html>
  );
}
```

### 2. **Page Routing & Rendering (Static and Dynamic Routes)**

Next.js 14 uses **file-based routing**, meaning the folder structure determines the URL path:

- **Static Routes:**
  - The file `app/cities/page.tsx` renders when the user visits `/cities`. This page might show a list of cities or some default information.
  
  Example:
  ```tsx
  const CitiesPage = () => {
    return (
      <div>
        <h1>All Cities</h1>
        {/* City list here */}
      </div>
    );
  };
  export default CitiesPage;
  ```

- **Dynamic Routes:**
  - The file `app/cities/[id]/page.tsx` is responsible for dynamic routes like `/cities/1` or `/cities/2`. The `[id]` is a placeholder for the dynamic parameter, and Next.js handles it automatically by passing the value to the page.
  
  Example for `app/cities/[id]/page.tsx`:
  ```tsx
  import { useRouter } from 'next/router';

  const CityDetails = () => {
    const router = useRouter();
    const { id } = router.query;  // Capture the 'id' from the URL

    // Fetch city data based on the id, and render details
    return (
      <div>
        <h1>City Details for {id}</h1>
        {/* Show city details here */}
      </div>
    );
  };

  export default CityDetails;
  ```

#### **Execution Flow:**
1. **Visit `/cities/`**:
   - Next.js looks at the file structure under `app/`. It finds `app/cities/page.tsx` and renders the `CitiesPage` component for this route.
   
2. **Click on a city (e.g., `/cities/1`)**:
   - When the user clicks on a city, Next.js looks for `app/cities/[id]/page.tsx`, and the value for `[id]` (e.g., 1) is passed to the component using the `useRouter` hook.
   - The page is re-rendered with the data for that specific city.

---

### 3. **Data Fetching in Next.js**

Next.js provides multiple ways to fetch data for pages:

#### **Static Generation (`getStaticProps`)**:
- This is used when you want to pre-render pages at build time.
- Ideal for content that doesn’t change frequently.

```tsx
// For static pages like cities
export async function getStaticProps() {
  const data = await fetchCityData();  // Fetch data from API or file
  return {
    props: {
      cities: data,  // Pass data to the page
    },
  };
}
```

#### **Server-Side Rendering (`getServerSideProps`)**:
- This is used when you want to fetch data on each request, at runtime.

```tsx
// For dynamic pages like city details
export async function getServerSideProps(context) {
  const id = context.params.id;  // Get the dynamic 'id'
  const data = await fetchCityDetails(id);  // Fetch city data
  return {
    props: {
      city: data,
    },
  };
}
```

---

### 4. **Client-Side Components**

In your code, you are using a lot of components like `Header`, `BackgroundImage`, `SlideInfo`, etc. These are all likely found under the `components/` folder.

Next.js uses React components for rendering, and any component that needs dynamic interactivity on the client must use `"use client"` at the top of the file. This ensures that the component is rendered client-side, with all JavaScript running in the browser.

### 5. **Navigating Between Pages**

In Next.js, instead of `react-router-dom`, navigation should be done using Next.js' `Link` component. This helps you navigate between pages without a full page reload, improving the user experience.

```tsx
import Link from 'next/link';

<Link href="/cities/1">
  <a>Go to City 1</a>
</Link>
```

### 6. **API Routes**

It looks like you have an API folder (`app/api/`). In Next.js, you can build custom API endpoints that run server-side.

- The file `app/api/cities/[id]/route.ts` suggests you have an API route for fetching city details dynamically. The API route might look like this:

```ts
export async function GET(request, { params }) {
  const { id } = params;
  const city = getCityById(id);  // Fetch the city data based on the 'id'
  return new Response(JSON.stringify(city), { status: 200 });
}
```

This will create an API endpoint that you can call at `/api/cities/1` to get the data for city with `id = 1`.

---

### 7. **Conclusion of Execution Flow**

Here’s a simplified execution flow from start to finish:

1. **RootLayout.tsx** wraps the entire app.
2. **Page Routing:**
   - Visit `/cities/` → Next.js renders `CitiesPage` from `app/cities/page.tsx`.
   - Click on a city (e.g., `/cities/1`) → Next.js renders `CityDetails` from `app/cities/[id]/page.tsx`.
3. **Client-Side Components** like `Slides`, `PhotoGallery`, etc., are displayed, interacting with user inputs.
4. **Data Fetching** happens based on the chosen method (static, server-side, or client-side).

I hope this gives you a solid understanding of how Next.js works! Let me know if you'd like any more clarification on any of these concepts!



In Next.js 13 and later, the routing has changed, and you need to use the next/navigation package instead of next/router when you're working with Server Components. Also, if you need to use hooks like useEffect, the component must be marked as a Client Component.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started | FOR DEV

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
