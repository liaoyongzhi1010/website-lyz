import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-4 text-3xl font-semibold tracking-tight">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-3 text-2xl font-semibold tracking-tight">{children}</h2>
    ),
    p: ({ children }) => <p className="mb-4 leading-7">{children}</p>,
    a: ({ children, href }) => (
      <a className="underline underline-offset-4" href={href}>
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="rounded bg-slate-100/80 px-1 py-0.5 text-sm text-slate-700">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mb-4 overflow-x-auto rounded bg-slate-100/80 p-4 text-sm text-slate-700">
        {children}
      </pre>
    ),
    ul: ({ children }) => <ul className="mb-4 list-disc pl-6">{children}</ul>,
    ol: ({ children }) => <ol className="mb-4 list-decimal pl-6">{children}</ol>,
    li: ({ children }) => <li className="mb-1">{children}</li>,
    ...components,
  };
}
