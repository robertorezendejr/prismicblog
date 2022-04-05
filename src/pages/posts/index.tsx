import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import Link from 'next/link';

import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';


type Post = {
    slug: string;
    title: string;
    excerpt: string;
    updatedAt: string;
    banner: string;
    video_id: string;
};

interface PostsProps {
    posts: Post[]
}


export default function Posts( { posts }: PostsProps ) {
    return (
        <>
            <Head>
                <title>Posts | MS Project</title>
            </Head>


            <main className={styles.container}>
                <div className={styles.posts}>
                    { posts.map(post => (
                        <Link key={post.slug} href={`/posts/${post.slug}`}>
                            <a >
                                {/* time é .. quando o post foi criado */}
                                <time>{post.updatedAt}</time>
                                <strong>{post.title}</strong>
                                <p>{post.excerpt}</p>
                            </a>
                        </Link>
                    )) }
                    
                </div>
            </main>

        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query<any>([
        Prismic.predicates.at('document.type', 'publication')
    ], {
        // pegando o titulo da publicação e o conteudo da publicação e o video
        fetch: ['publication.title', 'publication.content', 'post.banner', 'post.video_id'],
        pageSize: 100,
    })

    // console.log(response)
    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            // banner: post.data.banner.url,
            title: RichText.asText(post.data.title),
          
            // Encontrar o primeiro paragrafo no post, se o primeiro paragrafo for imagem voltar um vazio = ?? '', para não dar erro
            excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
            // aqio estava publication
            updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit', 
                month: 'long', 
                year: 'numeric'
            })
        };
    });

    return {
        props: {
            posts
        }
    }
}