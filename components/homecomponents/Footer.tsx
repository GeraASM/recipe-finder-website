import Image from "next/image"
export function Footer() {
    return (
        <section className="py-[32px] px-4 md:flex md:justify-between md:items-center md:p-[32px] lg:max-w-[1192px] lg:mx-auto lg:px-0 lg:py-[40px]">
            <div className="flex justify-center mb-[24px] md:mb-0 gap-3 order-1">
                <Image width={20} height={20} src="/assets/images/icon-instagram.svg" alt="Instagram" />
                <Image width={20} height={20} src="/assets/images/icon-bluesky.svg" alt="Bluesky" />
                <Image width={20} height={20} src="/assets/images/icon-tiktok.svg" alt="Tiktok
                " />
            </div>
            <p className="text-center">Made with ❤️ and 🥑</p>
        </section>
    )
}