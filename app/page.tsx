import { Healthy } from "@/components/homecomponents/Healthy";
import { Activities } from "@/components/homecomponents/Activities";
import { Built } from "@/components/homecomponents/Built";
import { Ready } from "@/components/homecomponents/Ready";
import { Line } from "@/components/atoms/Line";


import { Footer } from "@/components/homecomponents/Footer";

export default function Home() {
  return (
    <div className="">
      <main className="pt-800 px-200 md:p-0 md:max-w-[768px] lg:max-w-[1192px] w-fit mx-auto">
        <Healthy />
        <Activities />
        <Line />
        <Built />
        <Ready />
      </main>
    </div>
  );
}
