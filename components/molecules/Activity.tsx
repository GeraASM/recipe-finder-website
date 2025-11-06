import Image from "next/image"
export function Activity({img, title, text}: {img: string, title: string, text: string}) {
    return (
        <section>
            <figure className="grid place-items-center w-[60px] h-[60px] bg-white rounded">
                <Image width={50} height={50} src={`/assets/images/${img}`} alt={title} />

            </figure>
            <h3 className="text-present-3 text-neutral-900 mt-[20px] mb-[12px]">{title}</h3>
            <p className="text-present-6 text-neutral-800">{text}</p>
        </section>
    )
}