import Aside from './components/Aside'
import Blog from './components/Blog'
import Container from './components/Container'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const articles = [
  {
    id: crypto.randomUUID(),
    title: 'Encriptar el local, Session y Cookies en JavaScript Vanilla',
    time: '22 de Agosto',
    link: '/toReversed'
  },
  {
    id: crypto.randomUUID(),
    title: 'Uso de Server Send Event para el control de usuario en sesion',
    time: '15 de Agosto',
    link: '/sse'
  },
  {
    id: crypto.randomUUID(),
    title: 'Curso de Rust para desarrolladores JavaScript',
    time: '23 de Agosto',
    link: '/curso-rust'
  },
  {
    id: crypto.randomUUID(),
    title: 'Realizar descarga de un Excel desde un Formulario con NodeJs',
    time: '03 de Agosto',
    link: '/encriptar'
  },
  {
    id: crypto.randomUUID(),
    title: 'Top 5 preguntas de JavaScript en StackOverflow',
    time: '03 de Febrero',
    link: '/encriptar'
  },
  {
    id: crypto.randomUUID(),
    title: 'Top 5 preguntas de JavaScript en StackOverflow',
    time: '03 de Febrero',
    link: '/encriptar'
  },
  {
    id: crypto.randomUUID(),
    title: 'Top 5 preguntas de JavaScript en StackOverflow',
    time: '03 de Febrero',
    link: '/encriptar'
  },
  {
    id: crypto.randomUUID(),
    title: 'Top 5 preguntas de JavaScript en StackOverflow',
    time: '03 de Febrero',
    link: '/encriptar'
  }
]

export default function Home() {
  return (
    <Container>
      <Navbar />

      <div className='grid w-full grid-cols-3 px-24 mb-4 gap-14'>
        <section className='col-span-3 xl:col-span-2 lg:col-span-2 md:col-span-2'>
          <h2 className='mb-2 text-lg font-bold text-white'>Últimos artículos</h2>
          {
            articles.map(({ id, time, title, link }) => (
              <Blog time={time} id={id} link={link} title={title} key={id} />
            ))
          }
        </section>
        <Aside />
      </div>
      <Footer />

    </Container>
  )
}
