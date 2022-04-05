import { GetStaticProps } from "next";

import Head from "next/head";
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from "../services/stripe";
import styles from './home.module.scss';


interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Project JC</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Oi, bem vindo!</span>
          <h1>Curso de <span>MS Project</span> do jeito certo</h1>
          <p>
            Acesse o curso agora <br />
            <span>Por {product.amount} por mês</span>  
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Mulher codando" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // essa chave: price_1KfwRiH0GD1il5gpXcSLKDdn    - é o ID do preço no stripe 
  const price = await stripe.prices.retrieve('price_1KfwRiH0GD1il5gpXcSLKDdn', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount / 100),
  };
  
  return  {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24 horas até a pagina dar refresh
  }
}