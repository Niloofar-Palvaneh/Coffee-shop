import Image from "next/image"
import Button from "../button/Button"

export default function SpecialCoffee() {
    const specialCoffeeArry = [
        {
            title: " دانکین دونات گلوریا جینز",
            des: "دانه‌های قهوه خشک به درجات مختلف برشته می‌شوند، بسته به عطر و طعم مورد نظر ‌است",
            img : "/c-1.png"
        },
        {
            title: "کازینو کاستا استارباکس",
            des: "دانه‌های قهوه خشک به درجات مختلف برشته می‌شوند، بسته به عطر و طعم مورد نظر ‌است",
            img : "/c-2.png"
        },
        {
            title: "کازینو موکا السالوادور",
            des: "دانه‌های قهوه خشک به درجات مختلف برشته می‌شوند، بسته به عطر و طعم مورد نظر ‌است",
            img : "/c-3.png"
        }
    ]
    return (
        <>
            <div className="bg-[url('/main-bg.png')] bg-no-repeat bg-center bg-orange-100 p-12 mt-12 sm:p-2">
                <div className="w-full flex items-center justify-center">
                    <div className="w-1/2 flex flex-col gap-8 items-center justify-center text-center sm:w-full">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h4 className="text-xl">
                                قهوه های منتخب
                            </h4>
                            <div className="w-full bg-amber-800 h-[2px] rounded"></div>
                        </div>
                        <p className="leading-10">
                            قهوه نوعی نوشیدنی رایج است که از دانه‌های بوداده و آسیاب‌شده گیاه قهوه به دست می‌آید. گیاه قهوه بومی مناطق نیمه‌گرمسیری
                            آمریکا و برخی از جزایر جنوب و جنوب شرق آسیا است، این گیاه از آفریقا به سایر نقاط جهان پراکنده شد.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-3 mt-48 gap-4 sm:grid-cols-1 sm:gap-8 sm:mt-8">
                    {
                        specialCoffeeArry.map(coffee => (
                            <div data-aos="fade-up" className="bg-white flex flex-col items-center justify-center text-center gap-8 p-4">
                                <Image
                                    className="-mt-24 mb-12 sm:-mt-6"
                                    src={coffee.img} width={300} height={400} alt="..." />
                                <h6 className="font-bold text-xl">
                                  {coffee.title}
                                </h6>
                                <p className=" w-3/4 sm:w-full">
                                    {
                                        coffee.des
                                    }
                                </p>
                                <Button />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}