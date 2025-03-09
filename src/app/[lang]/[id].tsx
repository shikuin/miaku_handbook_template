import type { GetStaticProps, GetStaticPaths } from 'next';


// WARN: MDXData is a MDX type that will be returned
// TODO: Connect MDXData typo in @Page()
// TODO: Make return with a feature of wrapper (for the future)
export default function Page({ MDXData }: MDXData): {
  return (
    <>
    {MDXData...}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageData = await getContent(`/${params.lang}/${params.id}`, 'page')

  return {
    props: {
      locale: params?.lang || 'en',
      pageData,
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllIds('page');

  return {
    paths,
    fallback: false,
  };
};

