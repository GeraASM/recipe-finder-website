export function Beyond() {
    return (
        <section className="pt-600 px-200 md:py-1000 md:px-400 xl:py-[96px] xl:flex xl:items-center xl:gap-800">
            <div className="xl:max-w-[376px]">

                <h2 className="text-present-2 text-neutral-900 mb-[20px]">Beyond the plate</h2>
                <div className="text-present-6 text-neutral-800">
                    <p className="mb-[12px]" >
                        We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:
                    </p>
                    <ul className="list-disc list-outside pl-[20px]">
                        <li>Encourage family dinners and social cooking.</li>
                        <li>Reduce reliance on single-use packaging and delivery waste.</li>
                        <li>Spark curiosity about seasonal produce and local agriculture.</li>
                    </ul>

                </div>
            </div>
            <figure className="mt-400 xl:h-[400px]">
                <img className="rounded-[16px]" src="/assets/images/image-about-beyond-the-plate-small.webp" alt="Plate" />
            </figure>
        </section>
    )
}