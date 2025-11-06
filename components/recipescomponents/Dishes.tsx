"use client";
import {ButtonView} from "@/components/atoms/ButtonStart";
import data from "@/app/api/dishes/data.json";
import type { Dish } from "@/models/dish";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";



export function Dishes() {
    const dishes = data as Dish[];
    const [isPrepOpen, setIsPrepOpen] = useState<boolean | undefined>(false);
    const [isCookOpen, setIsCookOpen] = useState<boolean | undefined>(false);
    const [prepTime, setPrepTime] = useState<number | undefined>(undefined);
    const [cookTime, setCookTime] = useState<number| undefined>(undefined);
    const [search, setSearch] = useState<string>("")
    const [filteredDishes, setFilteredDishes] = useState<Dish[] | undefined>(undefined);

    const prep = async () => {
        setIsPrepOpen(!isPrepOpen);
       
    }
    const cook = async () => {
        setIsCookOpen(!isCookOpen);
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const s = e.target.value;
        setSearch(s.toLowerCase());
    }
    
    useEffect(() => {
        const r = new Map();
        const verifyDishes = (prepTime: number | undefined, cookTime: number | undefined, search: string) => {
             console.log("PrepTime: ", prepTime, "CookTime: ", cookTime, "Search: ", search);
             dishes.forEach((dish: Dish) => {
                 if (dish.prepMinutes === prepTime || dish.cookMinutes == cookTime || (search && dish.title.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()))) {
                     r.set(dish.id, dish);
                 }
             }) 


        }
        if (prepTime !== undefined || prepTime == 0 || cookTime !== undefined || cookTime == 0 || search !== '') {
            verifyDishes(prepTime, cookTime, search);
        } 
        // console.log(Array.from(result.values()));
        setFilteredDishes(Array.from(r.values()));

    }, [prepTime, cookTime, search])
    return (
        <section className="px-200 md:px-400 lg:pb-[96px]">
            <div className="flex flex-col gap-[12px] md:flex-row lg:gap-[20px]">
                <div className={`${isPrepOpen ? "md:absolute min-h-[240px] max-h-[240px]" : "min-h-[40px] max-h-[40px]"}  z-1 overflow-hidden text-present-7  w-full md:max-w-[180px] lg:max-w-[240px]`}>
                        <form>
                            <div onClick={prep} className="flex gap-3 justify-center  md:justify-start cursor-pointer rounded-xl bg-neutral-0 p-2 lg:max-w-[184px]">
                                <p >Max Preps Time</p>
                                <p className={`transition-all ${isPrepOpen ? "rotate-180" : ""}`}>v</p>
                            </div>
                            <section className="mt-2 rounded-xl bg-neutral-0 p-2">
                                <div className="flex gap-3 mt-1">
                                    <input onChange={(e) => e.target.checked ? setPrepTime(0) : ""} type="radio" name="prep" id="zero-prep" className="accent-neutral-900"/>
                                    <label htmlFor="zero-prep">0 minutes</label>
                                </div>
                                <div className="flex gap-3">
                                    <input onChange={(e) => e.target.checked ? setPrepTime(5) : ""} type="radio" name="prep" id="five-prep" className="accent-neutral-900" />
                                    <label htmlFor="five-prep">5 minutes</label>
                                </div>
                                <div className="flex gap-3">
                                    <input onChange={(e) => e.target.checked ? setPrepTime(10) : ""} type="radio" name="prep" id="ten-prep" className="accent-neutral-900" />
                                    <label htmlFor="ten-prep">10 minutes</label>
                                </div>
                                <button onClick={() => setPrepTime(undefined)} type="reset">Clear</button>

                            </section>
                        </form>
                </div>
                <div className={`${isCookOpen ? "min-h-[240px] max-h-[240px]" : "min-h-[40px] max-h-[40px]"} transition-all md:absolute md:translate-x-[100%] z-1  overflow-hidden text-present-7 w-full md:max-w-[180px] lg:max-w-[240px]`}>
                    <form className="" action="">
                            <div onClick={cook} className="flex gap-3 justify-center  md:justify-start cursor-pointer rounded-xl bg-neutral-0 p-2 lg:max-w-[184px]">
                                <p>Max Cook Time</p>
                                <p className={`transition-all ${isCookOpen ? "rotate-180" : ""}`}>v</p>
                            </div>
                            <section className="bg-neutral-0 rounded-xl p-2 mt-2">
                                <div className="flex gap-3 mt-1">
                                    <input onChange={(e) => e.target.checked ? setCookTime(0) : ""} type="radio" name="cook" id="zero-cook" className="accent-neutral-900" />
                                    <label htmlFor="zero-cook">0 minutes</label>
                                </div>
                                <div className="flex gap-3">
                                    <input onChange={(e) => e.target.checked ? setCookTime(5) : ""} type="radio" name="cook" id="five-cook" className="accent-neutral-900" />
                                    <label htmlFor="five-cook">5 minutes</label>
                                </div>
                                <div className="flex gap-3">
                                    <input onChange={(e) => e.target.checked ? setCookTime(10) : ""} type="radio" name="cook" id="ten-cook" className="accent-neutral-900" />
                                    <label htmlFor="ten-cook">10 minutes</label>
                                </div>
                                <div className="flex gap-3">
                                    <input onChange={(e) => e.target.checked ? setCookTime(15) : ""} type="radio" name="cook" id="fifteen-cook" className="accent-neutral-900" />
                                    <label htmlFor="fifteen-cook">15 minutes</label>
                                </div>
                                <div className="flex gap-3">
                                    <input onChange={(e) => e.target.checked ? setCookTime(20) : ""} type="radio" name="cook" id="twenty-cook"  className="accent-neutral-900"/>
                                    <label htmlFor="twenty-cook">20 minutes</label>
                                </div>

                                <button onClick={() => setCookTime(undefined)} type="reset">Clear</button>

                            </section>
                        </form>
                </div>
                <form className="w-full rounded-xl md:max-w-[320px] ml-auto  md:grow lg:grow-0 bg-neutral-0 lg:ml-auto lg:min-w-[350px] lg:px-4 h-[47px] grid grid-cols-[30px_1fr] items-center px-3">
                    <Image width={40} height={40} src="/assets/images/icon-search.svg" alt="Search" />
                    <input value={search} onChange={handleSearch} type="search" name="search" id="search" className="text-present-7 text-neutral-900 focus:outline-0" placeholder="Search by name or ingredient ..."/>
                </form>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-400 mt-300">
               {
                filteredDishes &&
                filteredDishes.map((dish: Dish, key) => (
                    <div key={key} className="p-100 rounded-[10px] bg-neutral-0">
                        <figure className="rounded-[10px] overflow-hidden md:h-[450px] lg:h-[300px] h-[270px]">
                            <Image width={40} height={40} className="object-cover -translate-y-[18%] lg:translate-0 block" src={`${dish.image.large}`} alt={dish.title} />
                        </figure>
                        <div className="mt-200 px-100 lg:px-0 flex flex-col gap-200 lg:h-[270px] pb-2">
                            <h4 className="text-present-5 text-neutral-900">{dish.title}</h4>
                            <p className="text-present-9 text-neutral-800">
                                {dish.overview}
                            </p>
                            <div className="grid grid-cols-2 lg:auto-rows-[30px]">
                                <div className="flex gap-2 items-center">
                                    <Image width={40} height={40} src="/assets/images/icon-servings.svg" alt="Serving" />
                                    <p className="text-present-9 text-neutral-900">Serving: {dish.servings}</p>    
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image width={40} height={40} src="/assets/images/icon-prep-time.svg" alt="Prep Time" />
                                    <p className="text-present-9 text-neutral-900" >Prep: {dish.prepMinutes} mins</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image width={40} height={40} src="/assets/images/icon-cook-time.svg" alt="Time" />
                                    <p className="text-present-9 text-neutral-900">Cook: {dish.cookMinutes} min</p>
                                </div>

                            </div>
                            <Link className="cursor-pointer block mt-auto" href={`/recipes/${dish.id}`}>
                            <ButtonView message="View Recipe" />
                            
                            </Link>
                        </div>

                    </div>
                    
                ))
               }
            </div>
        </section>
    )
}