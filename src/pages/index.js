import Link from 'next/link'
import Image from 'next/image'
import Head from '../components/Head'
import Navbar from '../components/Navbar'
import SocialMedia from '../components/SocialMedia'

export default function Home() {
  return (
    <section className="container">
      <Head />
      <header>
        <Navbar />
      </header>
      <main>
        <div className="heading-primary">
          <h1>
            Esse café não é apenas
            <br /> um café! Esse é o
            <span className="heading-primary-emphasis">Café Gostoso</span>
          </h1>
          <p>
            Feito com todo o carinho e dedicação, nossa equipe de cientistas
            está trabalhando para criar o melhor café do mundo. Contudo, estamos
            no caminho devido ao grande número de pedidos.
          </p>
          <button className="btn" onSubmit="/">
            Leia Mais
          </button>
        </div>
        <div className="image-box">
          <div className="image-circle"></div>
          <div className="image-image">
            <Image
              src="/images/coffee1.png"
              alt="Coffee 1"
              width={500}
              height={500}
            />
          </div>
        </div>
      </main>
      <ul className="thumb">
        <li>
          <Image
            src="/images/thumb1.png"
            alt="thumb image"
            width={130}
            height={150}
          />
        </li>
        <li>
          <Image
            src="/images/thumb2.png"
            alt="thumb image"
            width={130}
            height={150}
          />
        </li>
        <li>
          <Image
            src="/images/thumb3.png"
            alt="thumb image"
            width={130}
            height={150}
          />
        </li>
      </ul>
      <SocialMedia />
    </section>
  )
}
