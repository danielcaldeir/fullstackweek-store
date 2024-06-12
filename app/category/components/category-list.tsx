// import { prismaClient } from "@/lib/prisma";
// import CategoryItem from "./category-item";
// "use client";

import { prismaClient } from "@/lib/prisma";
import CategoryItem from "@/app/category/components/category-item";
// import { Badge } from "@/components/ui/badge";

const CategoryList = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {categories.map(
            (category) => (
                <div key={category.id}>
                  <CategoryItem category={category} />
                </div>
            )
         )
      }
    </div>
  );
};

export default CategoryList;