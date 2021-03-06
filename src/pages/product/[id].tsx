import {PageLayout} from '@components/pageLayout';
import {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import {useRouter} from 'next/router';
import {TBreadCrumb} from '@components/breadCrumbs/breadCrumb';
import {BreadCrumbs} from '@components/breadCrumbs';
import {Master} from '@ui/shop/master';

export const getStaticProps = async (
  context: GetStaticPropsContext<{id: string}>
) => {
  const {params} = context;

  const product = {id: params?.id};
  if (!product) {
    throw new Error(`Product with id '${params?.id}' not found`);
  }

  return {
    props: {
      product,
    },
    revalidate: 100,
  };
};

export async function getStaticPaths({locales}: GetStaticPathsContext) {
  const products = [{id: 1}, {id: 2}];

  return {
    paths: locales
      ? locales.reduce<string[]>((arr, locale) => {
          products.forEach((product: any) => {
            arr.push(`/${locale}/product${product.path}`);
          });
          return arr;
        }, [])
      : products.map((product: any) => `/product/${product.id}`),
    fallback: 'blocking',
  };
}

const Product = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {product} = props;
  const router = useRouter();

  const breadCrumbs: TBreadCrumb[] = [
    {
      label: 'Catalog',
      url: '/product',
      onNavigate: (url) => router.push(url),
    },
    {
      label: 'productName',
      isStatic: true,
    },
  ];

  return (
    <PageLayout title="Product Details">
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      {router.isFallback ? 'Loading...' : `Product Details ${product.id}`}
    </PageLayout>
  );
};

Product.Layout = Master;
export default Product;
