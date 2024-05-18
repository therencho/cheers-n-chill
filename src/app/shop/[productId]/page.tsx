import Banner from "@/components/Banner";
import ProductInfo from "@/components/ProductInfo";
import RelatedProducts from "@/components/RelatedProducts";
import products from "@/lib/data/products";
import { FC } from "react";

interface PageProps {
  params: { productId: string };
}

const page: FC<PageProps> = ({ params }) => {
  const product = products.find(
    (product) => product.id === parseInt(params.productId as string)
  );
  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold text-gray-800">Product not found</p>
      </div>
    );
  }

  // Find related products based on the category of the current product
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: product?.name, href: `/shop/${product?.id}` },
  ];

  return (
    <div className="w-full ">
      <Banner items={breadcrumbItems} name={"Product Info"} />
      <div className="w-full mx-auto max-w-screen-xl my-10">
        <ProductInfo
          id={product?.id}
          image={product?.image}
          name={product?.name}
          price={product?.price}
          category={product?.category}
          description={product?.description}
        />
        {relatedProducts && <RelatedProducts relatedProducts={relatedProducts} />}
      </div>
    </div>
  );
};

export default page;
