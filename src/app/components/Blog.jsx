import Image from 'next/image'
import Link from 'next/link'

export default function Blog({ id, time, title, link }) {
  return (
    <Link href={link}>
      <article key={id} className='py-3 px-4 group  hover:bg-[#3c4654] hover:rounded-lg flex items-center gap-4 text-white mb-2'>
        <picture className='transition-all group-hover:scale-110'>
          <Image src='/javascript.png' width={48} height={48} alt='Javascript logo' />
        </picture>
        <div className='flex flex-col justify-center flex-grow gap-y-1'>
          <h2 className='text-lg font-semibold text-white'>{title}</h2>
          <time className='text-xs'>{time}</time>
        </div>
      </article>
    </Link>

  )
}
