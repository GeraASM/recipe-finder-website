import Image from "next/image"
import { ButtonStart } from "../atoms/ButtonStart"
export function Ready() {


    return (
        <section className="pt-600 px-400 lg:p-0">
            <div className="overflow-hidden relative bg-neutral-200/70  rounded-2xl py-600 -z-2 px-200 text-center md:py-[80px]">
                <Image width={50} height={50} className="lg:w-[340px] lg:h-[340px] translate-x-1/4 absolute top-0 right-0 block -z-1 w-[172px] y-[172px]" src="/assets/images/pattern-knife.svg" alt="Knife" />
                <h3 className=" text-present-2-mobile text-neutral-900">Ready to cook smarter?</h3>
                <p className="mb-[32px] mt-[12px] text-present-6 text-neutral-800 ">Hit the button, pick a recipe, and get dinner on the table—fast.</p>
                <ButtonStart message="Browse recipes" />
                <Image width={50} height={50} className="lg:w-[314px] lg:h-[330px] -translate-x-1/4 absolute bottom-0 left-0 block -z-1 w-[180px] y-[230px]" src="/assets/images/pattern-fork.svg" alt="Fork" />
            </div>
        </section>
    )
}