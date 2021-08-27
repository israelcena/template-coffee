import Link from 'next/link'
import Image from 'next/image'
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
        <div>
          <h2>
            Esse café não é apenas um café <br />
            Esse é o <span>Café Gostoso</span>
          </h2>
          <p>
            Feito com todo o carinho e dedicação, nossa equipe de cientistas
            está trabalhando para criar o melhor café do mundo. Contudo, estamos
            no caminho devido ao grande número de pedidos.
          </p>
          <Link href="/cafe">Leia Mais</Link>
        </div>
        <div>
          <Image
            src="/images/coffee1.png"
            alt="Coffee 1"
            width={500}
            height={500}
          />
        </div>
      </main>
      <footer>
        <p>Bye</p>
      </footer>
    </section>
  )
}
