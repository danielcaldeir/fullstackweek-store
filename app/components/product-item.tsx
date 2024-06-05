// import { ProductWithTotalPrice } from "@/helpers/product";
// import Image from "next/image";
// import { Badge } from "./badge";
// import { ArrowDownIcon } from "lucide-react";

import Image from "next/image";
// import { Badge } from "@/components/ui/badge";
// import { ArrowDownIcon } from "lucide-react";
import { ProductWithTotalPrice } from "@/app/helpers/product";
import Link from "next/link";
import DiscountBadge from "@/app/components/discount-badge";
import { cn } from "@/lib/utils";

interface ProductItemProps {
  product: ProductWithTotalPrice;
  className?: string;
}

const ProductItem = ({ product, className }: ProductItemProps) => {
  return (
    <Link 
      href={`/product/${product.slug}`} 
      className={cn("flex min-w-[156px] flex-col gap-4", className)}
    >
      
        <div className="relative flex aspect-square w-full items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
            alt={product.name}
          />

          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute left-3 top-3">
              {product.discountPercentage}
            </DiscountBadge>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <p className="truncate text-sm">
            {product.name}
          </p>

          <div className="flex items-center gap-2">
            {product.discountPercentage > 0 ? (
              <>
                <p className="truncate font-semibold">
                  R$ {Number(product.totalPrice).toFixed(2)}
                </p>

                <p className="truncate text-xs line-through opacity-75">
                  R$ {Number(product.basePrice).toFixed(2)}
                </p>
              </>
            ) : (
              <p className="truncate text-sm font-semibold">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>
        </div>
      
    </Link>
    
  );
};

export default ProductItem;