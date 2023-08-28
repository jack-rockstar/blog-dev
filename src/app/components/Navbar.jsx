import { InstagramIcon, TwitchIcon, YoutubeIcon } from '@/app/components/Icons'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'

const menus = [
  {
    icon: <TwitchIcon />,
    title: 'Visitar twitch',
    url: 'https://twitch.com'
  },
  {
    icon: <YoutubeIcon />,
    title: 'Visitar canal de youtube',
    url: 'https://youtube.com'
  },
  {
    icon: <InstagramIcon />,
    title: 'Visitar mi Instagram',
    url: 'https://instagram.com'
  }
]

export default function Navbar () {
  return (
    <header className='flex items-center justify-between h-24 px-24 py-10 mb-6 text-white'>
      <section>
        <Link href='/'>
          <h1 className='text-2xl font-bold text-white transition-all cursor-pointer hover:scale-110'>JavaDev</h1>
        </Link>
      </section>
      <nav className='flex items-center gap-4'>
        <div>
          <form className='flex items-center'>
            <div className='relative w-full'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <FiSearch className='text-blue-500' />
              </div>
              <input type='text' className='border text-sm rounded-full block w-[90%] pl-8 p-1  bg-[#20252c] border-gray-600 focus:ring-0 focus:border-blue-600 focus:shadow-2xl focus:shadow-black placeholder-slate-300 text-white focus:outline-none' placeholder='Buscar...' />
            </div>
          </form>
        </div>
        {
          menus.map((e) => (
            <Link key={e.url} className='p-2 hover:bg-[#3c4654] hover:border-2 hover:border-blue-500 hover:rounded-lg' title={e.title} href={e.url}>
              {
                e.icon
              }
            </Link>
          ))
         }
      </nav>

    </header>
  )
}
