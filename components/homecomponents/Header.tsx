"use client";
import Image from "next/image";
import { useEffect, useState } from "react"
import { ButtonStart } from "../atoms/ButtonStart"
import { Menu } from "./Menu"
import { MenuMobile } from "./MenuMobile"
export function Header() {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  useEffect(() => {
    const close = () => {
      if (window.innerWidth > 768) setIsMenu(false);
    }
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);
    return (
        <header className="relative flex justify-between items-center w-full p-200 md:p-400 lg:px-800 mx-auto border-b border-neutral-300">
                <Image width={300} height={40} src="/assets/images/logo.svg" alt="Logo" />
                <button onClick={() => setIsMenu(!isMenu)} className="w-500 h-500 lg:hidden bg-neutral-300 rounded-4 grid place-items-center">
                  <Image width={20} height={20} src="/assets/images/icon-hamburger-menu.svg" alt="Hamburger" />
                </button>
                <Menu />
                <div className="hidden lg:block">
                  <ButtonStart message="Browse recipes" />
                </div>
                {
                  isMenu &&
                  <MenuMobile />
                }
      </header>
    )
}