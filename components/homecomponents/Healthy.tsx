import { ButtonStart } from "../atoms/ButtonStart"
import Image from "next/image"

export function Healthy() {
    return (
        <section className="pt-600 px-400 text-center relative">
             <Image width={10000} height={1000} className="block absolute bottom-0 left-0 w-fill max-h-[530px]" src={"/assets/images/pattern-squiggle-1.svg"} alt="Patter" />
            <h1 className="text-present-1-mobile text-neutral-900"><span
                className="relative before:absolute before:bg-orange-500 before:content-[''] before:opacity-30 before:left-0 before:bottom-0 before:h-1/2 before:w-full rounded-2xl"
            >Healthy</span> meals, zero fuss</h1>
            <p className="mt-[16px] mb-[32px] text-present-6 text-neutral-800 max-w-[580px] mx-auto">Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no guesswork.</p>
            <ButtonStart message="Start exploring" />
            <figure className="mt-500 lg:min-h-[530px] rounded-8 relative">
                <Image width={10000} height={1000} className="w-full h-full rounded-8" src="/assets/images/image-home-hero-small.webp" alt="Home hero" />

            </figure>
        </section>
    )
}