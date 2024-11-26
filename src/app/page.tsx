"use client"

import Banner from "@/components/Banner";
import BannerDescripton from "@/components/BannerDescripton";
import BannerDetails from "@/components/BannerDetails";
import Categories from "@/components/Categories";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Prodcuts from "@/components/Prodcuts";
import Story from "@/components/Story";

export default function Home() {
  return (
    <div className="">
    <Banner />
    <BannerDescripton />
    <BannerDetails />
    <Prodcuts />
    <Story />
    <Clients />
    <Categories />
    <Footer />
    </div>
  );
}
