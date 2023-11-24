import Image from "next/image"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Servises() {

    useEffect(() => {
        AOS.init({
            duration: 1200
        })
    }, [])
    const servisesArry = [
        {
            img: "/ser1.png",
            title: "اسپرسوی ویژه",
            des: "مرغوب‌ترین قهوه که طعم و بویی منحصربه‌فرد دارد از بوته‌ای به نام عربیکا به دست می‌آید",
            mml100: 18,
            mml250: 25,
            mml400: 40
        },
        {
            img: "/ser2.png",
            title: "کاپوچینوی تزئینی",
            des: "مرغوب‌ترین قهوه که طعم و بویی منحصربه‌فرد دارد از بوته‌ای به نام عربیکا به دست می‌آید",
            mml100: 19,
            mml250: 28,
            mml400: 35
        },
        {
            img: "/ser3.png",
            title: "امریکانوی دارک",
            des: "مرغوب‌ترین قهوه که طعم و بویی منحصربه‌فرد دارد از بوته‌ای به نام عربیکا به دست می‌آید",
            mml100: 19,
            mml250: 18,
            mml400: 80
        },
        {
            img: "/ser4.png",
            title: "امریکانوی دارک",
            des: "مرغوب‌ترین قهوه که طعم و بویی منحصربه‌فرد دارد از بوته‌ای به نام عربیکا به دست می‌آید",
            mml100: 19,
            mml250: 18,
            mml400: 80
        },
        {
            img: "/ser5.png",
            title: "امریکانوی دارک",
            des: "مرغوب‌ترین قهوه که طعم و بویی منحصربه‌فرد دارد از بوته‌ای به نام عربیکا به دست می‌آید",
            mml100: 19,
            mml250: 18,
            mml400: 80
        },
        {
            img: "/ser6.png",
            title: "امریکانوی دارک",
            des: "مرغوب‌ترین قهوه که طعم و بویی منحصربه‌فرد دارد از بوته‌ای به نام عربیکا به دست می‌آید",
            mml100: 19,
            mml250: 18,
            mml400: 80
        },
    ]
    return (
        <>
            <div className="mt-12">
                <div className="w-full flex items-center justify-center">
                    <div className="w-1/2 flex flex-col gap-8 items-center justify-center text-center sm:w-full">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h4 className="text-xl">
                                تعرفه‌ی خدمات
                            </h4>
                            <div className="w-full bg-amber-800 h-[2px] rounded"></div>
                        </div>
                        <p className="leading-10">
                            تاریخ قطعی ورود قهوه به ایران معلوم نیست. اما چون در آغاز پادشاهی شاه عباس قهوه خانه در ایران وجود داشته ممکن
                            است که نوشیدن قهوه از عهد شاه تهماسب اول در ایران معمول شده باشد.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-32">
                    <div className="grid grid-cols-3 gap-32 w-[90%] sm:w-full sm:grid-cols-1 md:grid-cols-2 md:w-full" data-aos="flip-up">
                        {
                            servisesArry.map(servise => (
                                <div className="group flex flex-col items-center justify-center border rounded shadow ">
                                    <Image
                                        className="-mt-24 group-hover:rotate-45 transition-all"
                                        src={servise.img} width={200} height={200} alt="..." />
                                    <div className="flex flex-col gap-4 items-center justify-center">
                                        <h5 className="text-xl font-bold ">
                                            {servise.title}
                                        </h5>
                                        <p className=" p-4 text-center text-gray-700">
                                            {servise.des}
                                        </p>
                                    </div>
                                    <div className="w-full h-[2px] bg-yellow-500 "></div>
                                    <div className="flex items-center justify-between w-full py-4 group-hover:bg-yellow-100 transition">
                                        <section className="flex flex-col gap-2 text-gray-500 items-center justify-between w-full ">
                                            100 میلی لیتر
                                            <h6 className="font-bold text-xl text-gray-950">
                                                {servise.mml100} ت
                                            </h6>
                                        </section>
                                        <section className="flex flex-col gap-2 text-gray-500 items-center justify-between w-full">
                                            250 میلی لیتر
                                            <h6 className="font-bold text-xl text-gray-950">
                                                {servise.mml250} ت
                                            </h6>
                                        </section>
                                        <section className="flex flex-col gap-2 text-gray-500 items-center justify-between w-full">
                                            400 میلی لیتر
                                            <h6 className="font-bold text-xl text-gray-950">
                                                {servise.mml400} ت
                                            </h6>
                                        </section>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}