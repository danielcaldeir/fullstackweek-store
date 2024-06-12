// "use client";

// import Image from 'next/image'
import CategoryList from '@/app/category/components/category-list';
import ProductList from '@/app/product/components/product-list';
import { prismaClient } from '@/lib/prisma';
import PromoBanner from '@/app/components/promo-banner';
import SectionTitle from '@/app/components/section-title';

// export default async function Home() {
//   const deals = await prismaClient.product.findMany({
//     where: {
//       discountPercentage: {
//         gt: 0,
//       },
//     },
//   });

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      Category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      Category: {
        slug: "mouses",
      },
    },
  });

  const headphones = await prismaClient.product.findMany({
    where: {
      Category: {
        slug: "headphones",
      },
    },
  });

  return (
    <main className=" min-h-screen items-center justify-between p-7">
      <div className='flex flex-col gap-8 py-8'>
        <PromoBanner src="/banner-home-01.png" alt="Até 55% de desconto esse mês!" />

        <div className="px-5">
          <CategoryList />
        </div>

        <div >
          <SectionTitle>Ofertas</SectionTitle>
          <ProductList products={deals} />
        </div>

        <PromoBanner src="/banner-home-02.png" alt="Até 55% de desconto em mouses!" />

        <div >
          <SectionTitle>Teclados</SectionTitle>
          <ProductList products={keyboards} />
        </div>

        <div >
          <SectionTitle>Mouses</SectionTitle>
          <ProductList products={mouses} />
        </div>

        <PromoBanner src="/banner-home-03.png" alt="Até 55% de desconto em headphones!" />

        <div >
          <SectionTitle>Fone de Ouvido</SectionTitle>
          <ProductList products={headphones} />
        </div>

      </div>
      
    </main>
  )
}
