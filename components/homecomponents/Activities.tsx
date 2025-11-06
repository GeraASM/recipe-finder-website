import {Activity} from "../molecules/Activity"
export function Activities() {
    return (
        <section className="py-[80px] px-400"> 
            <h3 className="text-present-2-mobile text-neutral-900 lg:text-center">What you&apos;ll get</h3>
            <div className="mt-[32px] flex flex-col gap-6 lg:flex-row lg:justify-between">

                <Activity img="icon-whole-food-recipes.svg" title="Whole-food recipes" text="
                    Each dish uses everyday, unprocessed ingredients.
                " />
                <Activity img="icon-minimum-fuss.svg" title="Minimum fuss" text="All recipes are designed to make eating healthy quick and easy." />
                <Activity img="icon-search-in-seconds.svg" title="Search in seconds" text="Filter by name or ingredient and jump straight to the recipe you need." />
            </div>
        </section>
    )
}