export default function Container({ children }) {
  return (
    <main className='flex flex-col min-h-screen'>
      {children}
    </main>
  )
}
