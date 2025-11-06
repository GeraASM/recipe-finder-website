import data from "@/app/api/dishes/data.json";
import { Line } from "@/components/atoms/Line";
import Link from "next/link";
import { ButtonView } from "@/components/atoms/ButtonStart";
import Image from "next/image";

export default async function RecipeDetailsPage({params}: {params: Promise<{id: string}>}) {
    const moreRecipes = ["Avocado & Tomato Wholegrain Toast", "One-Pan Lemon Garlic Salmon with Asparagus", "Quinoa Veggie Power Bowl"];
    const {id} = await params;
    const idInt = parseInt(id);
    const dish = data.find((dish) => dish.id === idInt);
    const moreDishes = data.filter((dish) => moreRecipes.includes(dish.title));

    console.log(dish);
    return (
         <div className="">
            <main className="md:max-w-[768px] w-full lg:max-w-[1192px] mx-auto">
                <div className="py-600 px-200 md:px-400 lg:flex lg:items-start gap-500">
                    <section>
                        <p className="text-present-7 text-neutral-900 mb-200 md:">
                            <span className="text-neutral-600">Recipes</span> / Mediteranean Chickpea Salad
                        </p>
                        <figure className="rounded-[10px] overflow-hidden mb-500">
                            <Image src={`${dish?.image.large}`} alt={`${dish?.title}`} width={20} height={20}  />
                        </figure>
                    </section>
                    <section className="flex flex-col gap-[20px] lg:mt-8">
                        <h2 className="text-present-2-mobile text-neutral-900">{dish?.title}</h2>
                        <p className="text-present-6 text-neutral-800">
                            {dish?.overview}
                        </p>
                        <div className="grid grid-cols-2 lg:auto-rows-[30px] md:grid-cols-3">
                            <div className="flex gap-2 items-center">
                                <Image src="/assets/images/icon-servings.svg" alt="Serving" width={20} height={20} />
                                <p className="text-present-9 text-neutral-900">Serving: {dish?.servings}</p>    
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src="/assets/images/icon-prep-time.svg" alt="Prep Time" width={20} height={20}/>
                                <p className="text-present-9 text-neutral-900" >Prep: {dish?.prepMinutes} mins</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src="/assets/images/icon-cook-time.svg" alt="Time" width={20} height={20}/>
                                <p className="text-present-9 text-neutral-900">Cook: {dish?.cookMinutes} min</p>
                            </div>

                        </div>
                        <div>
                            <h3 className="text-present-4 text-neutral-900 mb-200">Ingredients:</h3>
                            <ul>
                                {
                                    dish?.ingredients.map((ingredient, key:number) => (
                                        <li key={key} className="flex items-center gap-3">
                                            <Image src="/assets/images/icon-bullet-point.svg" alt="Point" width={20} height={20} />
                                            <p className="text-present-6 text-neutral-800">
                                                {ingredient}
                                            </p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-present-4 text-neutral-900 mb-200">Instructions:</h3>
                            <ul>
                                {
                                    dish?.instructions.map((instruction, key:number) => (
                                        <li key={key} className="flex items-center gap-3">
                                            <Image src="/assets/images/icon-bullet-point.svg" alt="Point" width={20} height={20} />
                                            <p className="text-present-6 text-neutral-800">
                                                {instruction}
                                            </p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </section>
                </div>
                    <Line />
                <section className="py-600 px-200 md:px-400">
                    <h3 className="text-present-3 text-neutral-900 mb-300">More recipes</h3>
                    <section className="flex flex-col gap-[32px] lg:flex-row">
                        {
                        moreDishes.map((dish, key) => (
                            <div key={key} className="bg-neutral-0 p-100 rounded-[10px] shadow-lg ">
                                <figure className="rounded-[10px] overflow-hidden mb-500">
                                    <Image src={dish?.image.large} alt={dish?.title} width={20} height={20} />
                                </figure>
                                <div className="mt-200 px-100 lg:px-0 flex flex-col gap-200 lg:h-[270px] pb-2">
                                    <h4 className="text-present-5 text-neutral-900">{dish.title}</h4>
                                    <p className="text-present-9 text-neutral-800">
                                        {dish.overview}
                                    </p>
                                    <div className="grid grid-cols-2 lg:auto-rows-[30px]">
                                        <div className="flex gap-2 items-center">
                                            <Image src="/assets/images/icon-servings.svg" alt="Serving" width={20} height={20} />
                                            <p className="text-present-9 text-neutral-900">Serving: {dish.servings}</p>    
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <Image src="/assets/images/icon-prep-time.svg" alt="Prep Time" width={20} height={20} />
                                            <p className="text-present-9 text-neutral-900" >Prep: {dish.prepMinutes} mins</p>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <Image src="/assets/images/icon-cook-time.svg" alt="Time" width={20} height={20} />
                                            <p className="text-present-9 text-neutral-900">Cook: {dish.cookMinutes} min</p>
                                        </div>

                                    </div>
                                    <Link className="cursor-pointer block mt-auto" href={`/recipes/${dish.id}`}>
                                        <ButtonView message="View Recipe" />
                                    
                                    </Link>
                                </div>
                            </div>

                        ))}

                    </section>
                </section>
                
            </main>
        </div>
    )
}