import { loadPages } from '@/api/load-pages';
import Home from '@/templates/Home';
import { useRouter } from 'next/router';

export default function Page({ data }: any) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Carregando....</h1>;
  }

  return <Home data={data} />;
}

export const getStaticPaths = async () => {
  // const paths = (await loadPages()).map((page) => {
  //   return {
  //     params: {
  //       slug: page.slug,
  //     },
  //   };
  // });
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context: any) => {
  let data = null;
  try {
    data = await loadPages(context.params.slug);
  } catch (e) {}

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
    revalidate: 1,
  };
};
