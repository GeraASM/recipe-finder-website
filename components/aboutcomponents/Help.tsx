import Image from "next/image";

export function Help() {
    return (
        <section className="pt-600 px-200 md:py-800 md:px-400 pb-800 xl:flex xl:items-center xl:gap-800 xl:py-[80px]">
            <section className="flex flex-col gap-300 xl:w-[600px]">

                <button className="bg-orange-500 px-[6px] py-[2px] text-present-5 rounded-[6px] w-fit">
                    Our mission
                </button>
                <h1 className="text-present-2 text-neutral-900">Help more people cook nourishing meals, more often.</h1>
                <p className="text-present-6 text-neutral-800">
                    Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely delicious.
                </p>
                <p className="text-present-6 text-neutral-800">
                    We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no ultra-processed shortcuts—just honest ingredients and straightforward steps.
                </p>
            </section>
            <figure className="mt-200 rounded-2xl overflow-hidden">
                <Image width={1000} height={20} className="w-full  object-contain rounded-2xl" src="/assets/images/image-about-our-mission-small.webp" alt="Mission" />
            </figure>
        </section>
    )
}