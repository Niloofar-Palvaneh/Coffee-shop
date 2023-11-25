import Link from "next/link"
import Image from "next/image"


export default function MoreCoffee() {
    const servisesArry = [
        {
            id:1,
            img: "/ser1.png",
            title: "اسپرسوی ویژه",
            des: "مرغوب‌ترین قهوه که طعم و بویی منحصربه‌فرد دارد از بوته‌ای به نام عربیکا به دست می‌آید",
            mml100: 18,
            mml250: 25,
            mml400: 40
        },
        {
            id:2,
            img: "/ser2.png",
            title: "کاپوچینوی تزئینی",
            des: "مرغوب‌ترین قهوه که طعم و بویی منحصربه‌فرد دارد از بوته‌ای به نام عربیکا به دست می‌آید",
            mml100: 19,
            mml250: 28,
            mml400: 35
        },
        {
            id:3,
            img: "/ser3.png",
            title: "امریکانوی دارک",
            des: "مرغوب‌ترین قهوه که طعم و بویی منحصربه‌فرد دارد از بوته‌ای به نام عربیکا به دست می‌آید",
            mml100: 19,
            mml250: 18,
            mml400: 80
        },
        {
            id:4,
            img: "/ser4.png",
            title: "امریکانوی دارک",
            des: "مرغوب‌ترین قهوه که طعم و بویی منحصربه‌فرد دارد از بوته‌ای به نام عربیکا به دست می‌آید",
            mml100: 19,
            mml250: 18,
            mml400: 80
        },
        {
            id:5,
            img: "/ser5.png",
            title: "امریکانوی دارک",
            des: "مرغوب‌ترین قهوه که طعم و بویی منحصربه‌فرد دارد از بوته‌ای به نام عربیکا به دست می‌آید",
            mml100: 19,
            mml250: 18,
            mml400: 80
        },
        {
            id:6,
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
            <div className="mt-12 overflow-hidden">
                <div className="w-full flex items-center justify-center">
                    <div className="w-1/2 flex flex-col gap-8 items-center justify-center text-center sm:w-full">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h4 className="text-xl">
                               فروشگاه ما
                            </h4>
                            <div className="w-full bg-amber-800 h-[2px] rounded"></div>
                        </div>
                        <p className="leading-10">
                           سفارش انواع قهوه و کافی- تنها با یک کلیک- نوشیدنی سرد و گرم - فقط کافیست انتخاب کنید
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-32">
                    <div className="grid grid-cols-3 gap-32 w-[90%] sm:w-full sm:grid-cols-1 md:grid-cols-2 md:w-full" data-aos="flip-up">
                        {
                            servisesArry.map(servise => (
                                <div className="group flex flex-col items-center justify-center border rounded shadow ">
                                    <Image
                                        className="group-hover:rotate-45 transition-all p-2"
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
                                   <Link
                                   className="w-full text-center p-2 group-hover:bg-orange-100 transition"
                                   href={`/moreCoffee/${servise.id}`}>اطلاعات بیشتر</Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}