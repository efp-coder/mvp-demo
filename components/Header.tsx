"use client";

import Button from "@/components/ui/Button"
import NavBar from "@/components/NavBar";
import { useState } from "react";
export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };
  const menuSymbol = isMenuOpen ? "x" : "≡";

  return (
    <header className="flex bg-primary p-4 text-2xl justify-between items-center relative z-50">
      <section>Hello</section>
      <Button text={menuSymbol} onClick={toggleMenu} />
      {isMenuOpen && <NavBar closeMenu={toggleMenu} />}
    </header>

  );

}
