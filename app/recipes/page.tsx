import { Explore } from "@/components/recipescomponents/Explore";
import { Dishes } from "@/components/recipescomponents/Dishes";

export default async function RecipesPage() {
    return (
         <div className="">
            <main className="md:max-w-[768px] w-full lg:max-w-[1192px] mx-auto">
                <Explore />
                <Dishes />
            </main>
        </div>
    )
}