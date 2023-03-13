// import { mapData } from '@/api/map-data';
// import config from '@/config';
import { loadPages } from '@/api/load-pages';
import Home from '@/templates/Home';

export default function Index({ data }: any) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  let data: any = [];

  try {
    data = await loadPages('landing-page');
  } catch (e) {}

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: [],
    },
  };
};
