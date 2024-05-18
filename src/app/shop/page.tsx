import Banner from "@/components/Banner";
import Card from "@/components/Card";
import products from "@/lib/data/products";

const page = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
  ];

  return (
    <div className="w-full h-full">
      <Banner items={breadcrumbItems} name={"Shop"} />

      <div className=" max-w-screen-xl mx-auto flex flex-col justify-center items-center ">
        <div className="flex justify-start items-center w-full">
          <h1 className="text-5xl py-4 font-playfair">Our Products</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 my-10">
          {products.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              name={product.name}
              id={product.id}
              price={product.price}
              discount={product.discount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
