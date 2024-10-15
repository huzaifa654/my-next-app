'use client'
import Nav from "./components/Navbar/Nav"
import Categories from "./components/Categories/Categories"
import Hero from "./components/Hero/Hero"
import Sales from "./components/Sales/Sales"
import Browsecat from "./components/Browsecat/Browsecat"
import BestProducts from "./components/BestProducts/BestProducts"
import Hero2 from "./components/Hero2/Hero2"


export default function Home() {

  return (
    <div className="px-4 py-3 bg-white">
      <Nav />
      <div className="flex px-20">
        <Categories />
        <Hero />
      </div>
      <Sales />
      <Browsecat />
      <BestProducts />
      <Hero2 />

    </div>
  );
}
