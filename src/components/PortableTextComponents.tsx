// import {PortableTextComponents} from '@portabletext/react'

// import { PortableTextComponents } from "node_modules/next-sanity/dist/index.cjs";

import { PortableTextComponents } from "next-sanity";

export const components:PortableTextComponents = {
  block: {
    h1: ({children}) => <h1 className="text-2xl font-bold">{children}</h1>,
    h2: ({children}) => <h2 className="text-xl font-bold">{children}</h2>,
    h3: ({children}) => <h3 className="text-lg font-bold">{children}</h3>,
    h4: ({children}) => <h4 className="text-base font-bold">{children}</h4>,
    h5: ({children}) => <h5 className="text-sm font-bold">{children}</h5>,
    h6: ({children}) => <h6 className="text-xs font-bold">{children}</h6>,
    normal: ({children}) => <p className="text-base">{children}</p>,
    blockquote: ({children}) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic">
        {children}
      </blockquote>
    ),
   
  },
  list: {
    bullet: ({children}) => (
      <ul className="list-disc pl-4">{children}</ul>
    ),
    number: ({children}) => (
      <ol className="list-decimal pl-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({children}) => <li>{children}</li>,
    number: ({children}) => <li>{children}</li>,
  },
  marks: {
    strong: ({children}) => <strong>{children}</strong>,
    em: ({children}) => <em>{children}</em>,
    underline: ({children}) => <u>{children}</u>,
    code: ({children}) => <code>{children}</code>,
  },
}