export function ButtonStart({message}: {message: string}) {
    return (
        <button type="button" className="
        font-bold text-white
        px-400 py-200 rounded-[10px] bg-neutral-900">{message}</button>
    )
}

export function ButtonBrowser({message}: {message: string}) {
    return (
        <button type="button" className="
        font-bold text-white w-full
        px-400 py-200 rounded-[10px] bg-neutral-900">{message}</button>
    )
}

export function ButtonView({message}: {message: string}) {
    return (
        <button type="button" className=" 
        font-bold text-white w-full h-[48px] mt-auto
        px-400 rounded-full bg-neutral-900">{message}</button>
    )
}