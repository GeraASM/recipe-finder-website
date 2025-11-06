
import Image from "next/image"
export function WhyExists() {
    return (
        <section className="py-600 px-200 md:py-1000 md:px-400 xl:py-[96px] xl:flex xl:items-start xl:gap-800">
            <h2 className="text-present-2 text-neutral-900 mb-500 xl:min-w-[372px]">Why we exist</h2>
            <div className="flex flex-col gap-[24px]">
                <div className="flex gap-[20px] items-start">
                    <Image width={30} height={30}src="/assets/images/icon-bullet-point.svg" alt="Bullet" />
                    <div>
                        <h3 className="mb-[12px] text-present-4 text-neutral-900">Cut through the noise</h3>
                        <p className="text-present-6 text-neutral-800">
                            The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.
                        </p>
                    </div>
                </div>
                <div className="flex gap-[20px] items-start">
                    <Image width={30} height={30}src="/assets/images/icon-bullet-point.svg" alt="Bullet" />
                    <div>
                        <h3 className="mb-[12px] text-present-4 text-neutral-900">Empower home kitchens.</h3>
                        <p className="text-present-6 text-neutral-800">
                            When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.
                        </p>
                    </div>
                </div>
                <div className="flex gap-[20px] items-start">
                    <Image width={30} height={30}src="/assets/images/icon-bullet-point.svg" alt="Bullet" />
                    <div>
                        <h3 className="mb-[12px] text-present-4 text-neutral-900">Make healthy look good.</h3>
                        <p className="text-present-6 text-neutral-800">
                            High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}