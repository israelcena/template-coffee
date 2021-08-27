import Head from '../components/Head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <section>
      <Head />
      <header>
        <Navbar />
      </header>
      <main>
        <h1>Hello</h1>
      </main>
      <footer>
        <p>Bye</p>
      </footer>
    </section>
  )
}
