import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import fs from 'node:fs'
import path from 'path'

const root = process.cwd()
export const getFiles = () => {
  const directory = path.join(root, 'src/posts')
  return fs.readdirSync(directory)
}

export const getFilesBySlug = async ({ slug }) => {
  const mdxSource = fs.readFileSync(path.join(root, 'src/posts', `${slug}.mdx`), 'utf-8')
  const { data, content } = await matter(mdxSource)
  const source = await serialize(content, {})

  return {
    source,
    frontmatter: {
      slug,
      ...data
    }
  }
}

export const getAllFilesMetadata = () => {
  const files = getFiles()
  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(path.join(root, 'src/posts', postSlug))
    const { data } = matter(mdxSource)
    const res = { ...data, slug: postSlug.replace('.mdx', '') }
    console.log({ dt: res })
    return [res]
  }, [])
}
export const getMetadataByFile = (postSlug) => {
  const url = path.join(root, 'src/posts', `${postSlug}.mdx`)
  const mdxSource = fs.readFileSync(url)
  const { data } = matter(mdxSource)
  return data
}
