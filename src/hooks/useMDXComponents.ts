import type { MDXComponents } from "mdx/types";


// NOTE: That's so abstract ({ children }) so that for the first time hard to get
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // h1: ({ children }) => <h1 style={{fontSize: "100px"}}>{children}</h1>
    ...components
  }
}
