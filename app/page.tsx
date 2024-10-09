'use client'
import Nav from "./components/Navbar/Nav"
import Categories from "./components/Categories/Categories"
import Hero from "./components/Hero/Hero"
import Sales from "./components/Sales/Sales"
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useMemo } from 'react';


export default function Home() {
  const theme = useMemo(() => createTheme(), []);

  return (
    <div className="px-4 py-3 bg-white">
      <Nav />
      <div className="flex px-20">
        <Categories />
        <Hero />
      </div>
      <Sales />
    </div>
  );
}
