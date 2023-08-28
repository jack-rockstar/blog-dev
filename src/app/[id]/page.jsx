import { getFilesBySlug, getMetadataByFile } from '@/helpers/mdx'
import Image from 'next/image'
import Link from 'next/link'
import { SiGithub } from 'react-icons/si'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Mdx from '../components/Mdx'
import Navbar from '../components/Navbar'
// export async function generateStaticParams() {
//   const posts = getFiles()
//   return posts
// }

export async function generateMetadata({ params }) {
  const posts = getMetadataByFile(params.id)
  return {
    title: posts.title
  }
}

export default async function Blog({ params }) {
  // console.log({ params, searchParams })
  const posts = getMetadataByFile(params.id)
  const { source } = await getFilesBySlug({ slug: params.id })
  // console.log({ source })
  return (
    <Container>
      <Navbar />
      <article className='items-start justify-center min-h-screen px-8 xl:px-48 lg:px-48'>
        <header className='grid justify-center w-full grid-cols-1 mb-10'>
          <div className='flex items-center col-span-1 gap-4 py-3 mb-4 text-white'>
            <picture className='aspect-square'>
              <Image src='/javascript.png' width={120} height={120} alt='Javascript logo' />
            </picture>
            <div className='flex flex-col justify-center flex-grow gap-y-1'>
              <h2 className='text-xl font-bold xl:text-3xl lg:text-3xl text-white/80'>{posts.title}</h2>
              <div className='flex px-2 gap-x-2'>
                <time className='text-sm'>{posts.date}</time>
                <Link target='_blank' className='flex items-center flex-grow text-sm transition-all gap-x-2 text-white/60 hover:text-white' href='https://github.com/midudev/midu.dev/edit/master/content/posts/to-reversed-to-spliced-to-sorted-with.md' rel='noreferrer'>Algo anda mal? Edita el articulo <SiGithub /></Link>
              </div>
            </div>
          </div>
        </header>
        <div className='text-lg text-white mb-30'>
          <Mdx soure={source} />
        </div>
      </article>
      <Footer />
    </Container>
  )
}
// export const dynamic = 'force-dynamic'
