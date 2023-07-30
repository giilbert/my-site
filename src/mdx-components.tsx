import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => (
      <div className="leading-8 text-lg flex flex-col gap-2 mb-16">
        {children}
      </div>
    ),
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-5xl font-semibold">{children}</h1>
    ),
    h2: ({ children }) => <h2 className="text-3xl font-medium">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-medium">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-medium">{children}</h4>,

    hr: () => <hr className="my-6" />,

    ...components,
  };
}
