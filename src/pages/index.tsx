// import { mapData } from '@/api/map-data';
// import config from '@/config';
import Home from '@/templates/Home';

export default function Index({ data }: any) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  // const raw = await fetch(config.url + config.defaultSlug);
  // const json = await raw.json();
  // const map = mapData(json);

  return {
    props: {
      data: [],
    },
  };
};
