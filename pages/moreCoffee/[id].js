import { useRouter } from "next/router"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function singleCoffee() {
    const router = useRouter()
    const servisesArry = [
        {
            id: 1,
            img: "/ser1.png",
            title: "اسپرسوی ویژه",
            des: "مرغوب‌ترین قهوه که طعم و بویی منحصربه‌فرد دارد از بوته‌ای به نام عربیکا به دست می‌آید",
            mml100: 18,
            mml250: 25,
            mml400: 40
        },
        {
            id: 2,
            img: "/ser2.png",
            title: "کاپوچینوی تزئینی",
            des: "مرغوب‌ترین قهوه که طعم و بویی منحصربه‌فرد دارد از بوته‌ای به نام عربیکا به دست می‌آید",
            mml100: 19,
            mml250: 28,
            mml400: 35
        },
        {
            id: 3,
            img: "/ser3.png",
            title: "امریکانوی دارک",
            des: "مرغوب‌ترین قهوه که طعم و بویی منحصربه‌فرد دارد از بوته‌ای به نام عربیکا به دست می‌آید",
            mml100: 19,
            mml250: 18,
            mml400: 80
        },
        {
            id: 4,
            img: "/ser4.png",
            title: "امریکانوی دارک",
            des: "مرغوب‌ترین قهوه که طعم و بویی منحصربه‌فرد دارد از بوته‌ای به نام عربیکا به دست می‌آید",
            mml100: 19,
            mml250: 18,
            mml400: 80
        },
        {
            id: 5,
            img: "/ser5.png",
            title: "امریکانوی دارک",
            des: "مرغوب‌ترین قهوه که طعم و بویی منحصربه‌فرد دارد از بوته‌ای به نام عربیکا به دست می‌آید",
            mml100: 19,
            mml250: 18,
            mml400: 80
        },
        {
            id: 6,
            img: "/ser6.png",
            title: "امریکانوی دارک",
            des: "مرغوب‌ترین قهوه که طعم و بویی منحصربه‌فرد دارد از بوته‌ای به نام عربیکا به دست می‌آید",
            mml100: 19,
            mml250: 18,
            mml400: 80
        },
    ]
    const newCoffees = servisesArry.filter(coffee => coffee.id === Number(router.query.id))
    const [isShowAlert, setIsShowAlert] = useState(false)
    const showAlertHandler = () => {
        setIsShowAlert(true)
        setTimeout(() => {
            setIsShowAlert(false)
        }, 3000);
    }
    return (
        <>
            <div className={`w-full z-50 flex items-center justify-center ${isShowAlert ? "flex" : "hidden"}`}>
                <div className="bg-orange-500 text-white font-bold w-max p-4 rounded">
                    به زودی امکان سفارش محصول برای کاربران عزیز فعال میشود
                </div>
            </div>

            <div className="">
                {
                    newCoffees.map(coffee => (
                        <div key={coffee.id} className="flex flex-col items-center justify-between p-2 gap-4 ">
                            <div className="flex flex-col gap-4 mt-8">
                                <h1 className="text-xl mb-4 text-orange-800 p-2">
                                    اطلاعات بیشتر درمورد نوشیدنی {coffee.title}
                                </h1>
                                <div className="group flex flex-col items-center justify-center border rounded shadow  sm:w-full">
                                    <Image
                                        className="group-hover:rotate-45 transition-all p-2"
                                        src={coffee.img} width={200} height={200} alt="..." />
                                    <div className="flex flex-col gap-4 items-center justify-center">
                                        <h5 className="text-xl font-bold ">
                                            {coffee.title}
                                        </h5>
                                        <p className=" p-4 text-center text-gray-700 ">
                                            {coffee.des}
                                        </p>
                                    </div>
                                    <div className="w-full h-[2px] bg-yellow-500 "></div>
                                    <Link
                                        onClick={showAlertHandler}
                                        className="w-full text-center p-2 group-hover:bg-orange-100 transition"
                                        href={"#"}>سفارش</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}