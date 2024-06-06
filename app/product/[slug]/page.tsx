// import { prismaClient } from "@/lib/prisma";

import { prismaClient } from "@/lib/prisma";
import ProductImages from "@/app/product/components/product-images";
import ProductInfo from "@/app/product/components/product-info";
import { computeProductTotalPrice } from "@/app/helpers/product";
import ProductList from "@/app/product/components/product-list";
import SectionTitle from "@/app/components/section-title";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      Category: {
        include: {
          Product: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8">
      <h1>{product.name}</h1>
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
      <div>
        <SectionTitle>Produtos Recomendados</SectionTitle>
        <ProductList products={product.Category.Product} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;