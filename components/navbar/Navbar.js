import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
    const [activeLinkId, setActiveLinkId] = useState(1)
    const [isShowSearchBox, setIsShowSearchBox] = useState(false)
    const [isShoMobileMenu, setIsShoMobileMenu] = useState(true)

    const links = [
        {
            id: 1,
            title: "خانه",
            pathName: "/",
            isActive: false
        },
        {
            id: 2,
            title: "خدمات",
            pathName: "/",
            isActive: false
        },
        {
            id: 3,
            title: "خبرنامه",
            pathName: "/",
            isActive: false
        },
        {
            id: 4,
            title: "وبلاگ",
            pathName: "/",
            isActive: false
        }
    ]

    const activeLinkHandler = (id) => {
        setActiveLinkId(id)
    }

    const isShowSearchBoxHandler = () => {
        setIsShowSearchBox(!isShowSearchBox)
    }
    const isShoMobileMenuHandler = () => {
        setIsShoMobileMenu(!isShoMobileMenu)
    }

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-between w-[90%] sticky top-0 overflow-hidden py-4">
                    <Image src={"/logo.png"} width={100} height={100} alt="logo" />
                    <ul className="flex items-center gap-12 font-bold relative sm:hidden ">
                        {
                            links.map(link => (
                                <li
                                    key={link.id}
                                    onClick={() => activeLinkHandler(link.id)}
                                    className={`${link.id === activeLinkId ? "text-amber-900" : "text-gray-800"}`}>
                                    <Link href={link.pathName}>{link.title}</Link>
                                </li>
                            ))
                        }
                        <li>
                            <svg
                                onClick={isShowSearchBoxHandler}
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <div className={`transition-all duration-300 bg-red-500 absolute ${isShowSearchBox ? "left-0 " : "-left-52"}`}>
                                <input type="text" placeholder="پیدا کنید..."
                                    className="p-2 rounded shadow border outline-none bg-gray-100" />
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="hidden sm:block ">
                    <div
                        onClick={isShoMobileMenuHandler}
                        className=" flex flex-col gap-1 z-50 ">
                        <div className={`z-50  w-[30px] h-[5px] bg-amber-900 rounded-full transition-all ${isShoMobileMenu ? "rotate-0" : "rotate-[137deg]"}`}></div>
                        <div className={`z-50  w-[30px] h-[5px] bg-amber-900 rounded-full ${isShoMobileMenu ? "inline" : "hidden"}`}></div>
                        <div className={`z-50  w-[30px] h-[5px] bg-amber-900 rounded-full ${isShoMobileMenu ? "rotate-0" : "rotate-45 -mt-[9px]"}`}></div>
                    </div>

                    <ul
                        onClick={isShoMobileMenuHandler}
                        className={`bg-orange-100 ${isShoMobileMenu ? "-left-[800px]" : "left-0"}
                    flex items-center justify-center gap-12 flex-col font-bold text-xl z-40
                     fixed top-0 transition-all w-full h-[100vh]`}>
                        {
                            links.map(link => (
                                <li
                                    key={link.id}
                                    onClick={() => activeLinkHandler(link.id)}
                                    className={`${link.id === activeLinkId ? "text-amber-900" : "text-gray-800"}`}>
                                    <Link href={link.pathName}>{link.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </>
    )
}