import Link from "next/link"

export default function Button(props) {
    return (
        <>
            <Link href={props.link} className="w-max bg-gray-800 text-white transition
            px-6 py-2 text-xl
            hover:text-gray-800 hover:bg-white border-2 border-gray-800">
                بیشتر بخوانید
            </Link>
        </>
    )
}