'use client'
import Nav from "./components/Navbar/Nav"
import Categories from "./components/Categories/Categories"
import Hero from "./components/Hero/Hero"
import Sales from "./components/Sales/Sales"
import Browsecat from "./components/Browsecat/Browsecat"

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

    </div>
  );
}
