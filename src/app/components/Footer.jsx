import Link from 'next/link'

const menus = [
  {
    title: 'Contacto',
    url: ''
  },
  {
    title: 'RSS',
    url: ''
  },
  {
    title: 'Twitch',
    url: ''
  },
  {
    title: 'GitHub',
    url: ''
  },
  {
    title: 'Youtube',
    url: ''
  },
  {
    title: 'Instagram',
    url: ''
  }
]
export default function Footer() {
  return (
    <footer className='flex items-center justify-center h-24 gap-12 px-20'>
      {
        menus.map(({ title, url }) => (
          <Link key={title} href={url} className='text-white transition-all text-md opacity-80 hover:opacity-60'>{title}</Link>
        ))
      }
    </footer>
  )
}
