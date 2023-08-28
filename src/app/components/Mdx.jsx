'use client'

import { MDXRemote } from 'next-mdx-remote'

const Li = ({ children }) => (
  <li className='m-0 mb-1 text-lg break-all'>{children}</li>
)
const Ul = ({ children }) => (
  <ul className='pb-4 pl-6 '>{children}</ul>
)
const P = ({ children }) => (
  <p className='m-0 text-lg break-all mb-7'>{children}</p>
)
const Code = ({ children }) => (
  <code
    className='text-sm text-left break-all whitespace-pre hyphens-none'
    style={{ wordSpacing: 'normal', wordWrap: 'normal' }}
  >
    {children}
  </code>
)

const Pre = ({ children }) => (
  <pre
    className='overflow-auto text-sm text-left break-normal whitespace-pre hyphens-none rounded max-w-[800px] p-4 bg-[#282c34] text-white my-12 mx-1' style={{ tabSize: 2 }}
  >
    {children}
  </pre>
)

const H2 = ({ children }) => (
  <h2 className='mt-12 mb-6 mr-0 text-2xl font-semibold'>{children}</h2>
)
const H3 = ({ children }) => (
  <h3 className='mt-12 mb-6 mr-0 text-2xl font-semibold'>{children}</h3>
)

// const code = ({ children }) => (
//   <code className='m-0 text-lg break-all mb-7'>{children}</code>
// )

export default function Mdx({ soure }) {
  const components = {
    ul: Ul,
    li: Li,
    p: P,
    code: Code,
    pre: Pre,
    h2: H2,
    h3: H3
  }
  return (
    <MDXRemote {...soure} components={components} />
  )
}
