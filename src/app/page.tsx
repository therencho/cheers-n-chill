import BestSeller from "@/components/BestSeller";
import Brands from "@/components/Brands";
import Featured from "@/components/Featured";
import HomePage from "@/components/HomePage";
import InputCollector from "@/components/InputCollector";
import RecentProduct from "@/components/RecentProduct";
import Something from "@/components/Something";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="w-full relative  bg-primary-foreground overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <HomePage />
      <BestSeller />
      <Featured />
      <InputCollector />
      <RecentProduct />
      <Something />
      <Testimonials />
      <Brands />
    </main>
  );
}
