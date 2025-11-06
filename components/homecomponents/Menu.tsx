"use client";
import { usePathname } from "next/navigation";

import Link from "next/link"

export function Menu() {
  
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className="hidden lg:block">
                  <ul className="flex gap-5">
                    <li className={`text-present-7 text-neutral-900 border-b-4 border-b-transparent ${pathname === '/' ? "active": ""}`}><Link href="/">Home</Link></li>
                    <li className={`text-present-7 text-neutral-900 border-b-4 border-b-transparent ${pathname === '/about' ? "active" : ""}`}><Link href="/about">About</Link></li>
                    <li className={`text-present-7 text-neutral-900 border-b-4 border-b-transparent ${pathname === '/recipes' ? "active" : ""}`}><Link href="/recipes">Recipes</Link></li>
                  </ul>
        </nav>
    )
}