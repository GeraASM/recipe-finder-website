import { ButtonBrowser } from "../atoms/ButtonStart"
import Link from "next/link"
export function MenuMobile () {
    return (
        <nav className="absolute top-[100%] z-2 left-3 bg-neutral-0 rounded-xl border-neutral-300 border p-2 w-[95%]">
            <ul>
                <li><Link className="py-3 px-2 block" href="/">Home</Link></li>
                <li><Link className="py-3 px-2 block" href="/about">About</Link></li>
                <li><Link className="py-3 px-2 block" href="/recipes">Recipes</Link></li>
            </ul>
            <ButtonBrowser message="Browse recipes" />
        </nav>
    )
}