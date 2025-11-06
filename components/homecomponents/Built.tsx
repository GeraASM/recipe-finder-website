
export function Built() {

    return (
        <section className="pt-800 px-400 lg:flex lg:items-center gap-600 lg:py-[96px]">
            <div className="flex flex-col gap-[20px] lg:min-w-[509px]">

                <h3 className="text-present-2-mobile text-neutral-900">Built for real life</h3>
                <p className="text-neutral-800 text-present-6">
                    Cooking shouldn’t be complicated. These recipes come in under<span className="relative text-present-5 before:content-[''] before:absolute before:bottom-0 before:w-full before:h-1/2 before:bg-orange-500/50"> 30 minutes</span> of active time, fit busy schedules, and taste good enough to repeat. 
                </p>
                <p className="text-neutral-800 text-present-6">
                    Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.
                </p>
            </div>
            <img className="mt-8 lg:mt-0 lg:max-w-[600px] lg:object-contain  rounded-[10px] object-cover" src="/assets/images/image-home-real-life-small.webp" alt="Home Real Life" />
        </section>
    )
}