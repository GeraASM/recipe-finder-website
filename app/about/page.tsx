import { Help } from "@/components/aboutcomponents/Help"
import { WhyExists } from "@/components/aboutcomponents/WhyExist"
import { Line } from "@/components/atoms/Line"
import { Food } from "@/components/aboutcomponents/Food"
import { Beyond } from "@/components/aboutcomponents/Beyond"
import { Ready } from "@/components/homecomponents/Ready"

export default function AboutPage() {

    return (
        <div className="">
              <main className="md:max-w-[768px] w-full lg:max-w-[1192px] mx-auto">
                <Help />
                <WhyExists />
                <Line />
                <Food />
                <Line />
                <Beyond />
                <Ready />
              </main>
            </div>
    )
}