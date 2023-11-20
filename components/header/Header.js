import Image from "next/image"
import style from "./Header.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Button from "../button/Button";

export default function Header() {
    useEffect(() => {
        AOS.init({
            duration: 1200
        })
    }, [])
    return (
        <>
            <div className="flex justify-between items-center px-12 sm:px-0 xl:px-4 sm:flex-col sm:justify-center md:flex-col md:justify-center">
                <div className="flex flex-col gap-24 relative sm:gap-12 sm:px-2">
                    <div className="flex items-center gap-6 sm:justify-center sm:w-full md:justify-center md:w-full text-xl md:mt-12" data-aos="fade-left">
                        <h2>
                            برترین کافه خاورمیانه
                        </h2>
                        <div className="w-[100px] h-[1px] bg-gray-400 rounded"></div>
                    </div>
                    <div data-aos="fade-left">
                        <h3 className="text-[60px] font-bold sm:text-center sm:text-[40px]">
                            نوشیدنی انتخاب کنید که طعم شاهکاری دارد
                        </h3>

                    </div>
                    <div className="sm:flex sm:items-center sm:justify-center ">
                        <Button />
                    </div>
                    <Image
                        className={`${style.object} absolute right-32 -bottom-24`}
                        src={"/done.png"} width={100} height={100} />
                    <Image
                        className={`${style.object} absolute right-4 sm:hidden`}
                        src={"/done.png"} width={100} height={100} />
                </div>
                <div className="relative flex items-center sm:flex-col sm:flex-col-reverse gap-8">
                    <div>
                        <Image
                            className={`${style.object} absolute`}
                            src={"/done.png"} width={100} height={100} />
                        <Image
                            className={`${style.header_img} `}
                            src={"/livan.png"} width={1000} height={900} />
                        <Image
                            className={`${style.object} absolute left-12 top-24 sm:left-0`}
                            src={"/done.png"} width={100} height={100} />
                        <Image
                            className={`${style.object} absolute top-32 right-8`}
                            src={"/done.png"} width={100} height={100} />
                        <Image
                            className={`${style.object} absolute left-22 top-56 sm:left-8 `}
                            src={"/done.png"} width={100} height={100} />
                        <Image
                            className={`${style.object} absolute sm:top-2`}
                            src={"/done.png"} width={100} height={100} />
                        <Image
                            className={`${style.object} absolute right-24`}
                            src={"/done.png"} width={100} height={100} />
                    </div>
                    <h1 className="rotate-90 
                        sm:text-center sm:rotate-0 sm:p-2 sm:bg-yellow-500 sm:w-full
                        xl:text-center xl:rotate-0 xl:p-2 xl:bg-yellow-500 xl:w-full
                        absolute -left-[60px] sm:left-0 z-30 text-4xl font-bold">
                        کافه هیولای وردپرس
                    </h1>
                </div>
            </div>
        </>
    )
}