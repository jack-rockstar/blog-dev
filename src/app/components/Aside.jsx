import Link from 'next/link'

export default function Aside() {
  return (
    <aside className='invisible xl:visible lg:visible md:visible xl:col-span-1 lg:col-span-1 md:col-span-1'>
      <h2 className='mb-2 text-lg font-bold text-white'>Últimos video en Youtube</h2>
      <Link href='https://www.youtube.com/watch?v=14JdHNLqZeI' className='p-2 hover:bg-[#3c4654] hover:rounded-lg block mb-4'>
        <picture>
          <source type='image/webp' srcSet='https://i3.ytimg.com/vi_webp/14JdHNLqZeI/mqdefault.webp' />
          <img className='w-full' src='https://i3.ytimg.com/vi_webp/14JdHNLqZeI/mqdefault.webp' alt='La mejor forma de aprender programación es… ¡programando! Mis sitios favoritos para practicar' />
          <h4 className='text-sm font-semibold text-white'>La mejor forma de aprender programación es… ¡programando! Mis sitios favoritos para practicar</h4>
        </picture>
      </Link>
      <Link href='https://www.youtube.com/watch?v=14JdHNLqZeI' className='p-2 hover:bg-[#3c4654] hover:rounded-lg block'>
        <picture>
          <source type='image/webp' srcSet='https://i3.ytimg.com/vi_webp/14JdHNLqZeI/mqdefault.webp' />
          <img className='w-full' src='https://i3.ytimg.com/vi_webp/14JdHNLqZeI/mqdefault.webp' alt='La mejor forma de aprender programación es… ¡programando! Mis sitios favoritos para practicar' />
          <h4 className='text-sm font-semibold text-white'>La mejor forma de aprender programación es… ¡programando! Mis sitios favoritos para practicar</h4>
        </picture>
      </Link>
    </aside>
  )
}
