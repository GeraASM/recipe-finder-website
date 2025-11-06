import Image from "next/image"
export function Food() {
    return (
        <section className="py-600 px-200 md:py-1000 md:px-400 xl:py-[96px] xl:flex xl:items-start xl:gap-800">
            <h2 className="text-present-2 text-neutral-900 mb-[20px]">Our food pholosophy</h2>
            <div className="flex flex-col gap-[24px]">
                <div className="flex gap-[20px] items-start">
                    <Image width={30} height={30} src="/assets/images/icon-bullet-point.svg" alt="Bullet" />
                    <div>
                        <h3 className="mb-[12px] text-present-4 text-neutral-900">Whole ingredients first.</h3>
                        <p className="text-present-6 text-neutral-800">
                            Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.
                        </p>
                    </div>
                </div>
                <div className="flex gap-[20px] items-start">
                    <Image width={30} height={30} src="/assets/images/icon-bullet-point.svg" alt="Bullet" />
                    <div>
                        <h3 className="mb-[12px] text-present-4 text-neutral-900">Flavor without compromise.</h3>
                        <p className="text-present-6 text-neutral-800">
                            Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.
                        </p>
                    </div>
                </div>
                <div className="flex gap-[20px] items-start">
                    <Image width={30} height={30} src="/assets/images/icon-bullet-point.svg" alt="Bullet" />
                    <div>
                        <h3 className="mb-[12px] text-present-4 text-neutral-900">Respect for time.</h3>
                        <p className="text-present-6 text-neutral-800">
                            Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.
                        </p>
                    </div>
                </div>
                <div className="flex gap-[20px] items-start">
                    <Image width={30} height={30} src="/assets/images/icon-bullet-point.svg" alt="Bullet" />
                    <div>
                        <h3 className="mb-[12px] text-present-4 text-neutral-900">Sustainable choices.</h3>
                        <p className="text-present-6 text-neutral-800">
                            Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}