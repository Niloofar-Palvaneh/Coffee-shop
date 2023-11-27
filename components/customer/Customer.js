import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Customer() {
    const customers = [
        {
            id: 1,
            name: "مریم محمدی",
            img: "/customer1.png",
            filed: "مشتری",
            des: "در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ هیولای وردپرس به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
        },
        {
            id: 2,
            name: "نرگس احمدی",
            img: "/customer2.png",
            filed: "فروشنده",
            des: "در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ هیولای وردپرس به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
        },
        {
            id: 3,
            name: "مریم محمدی",
            img: "/customer1.png",
            filed: "مشتری",
            des: "در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ هیولای وردپرس به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
        },
        {
            id: 4,
            name: "نرگس احمدی",
            img: "/customer2.png",
            filed: "فروشنده",
            des: "در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ هیولای وردپرس به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
        },
    ]

    return (
        <>
            <div className="w-full flex flex-col gap-12 items-center justify-center mt-24 bg-orange-100 p-8">
                <div className="flex flex-col gap-2">
                    <h6 className="text-xl">
                        نظرات مشتریان ما
                    </h6>
                    <div className="w-full h-[2px] bg-yellow-500 rounded"></div>
                </div>
                <Swiper
                    slidesPerView={1}
                    centeredSlides={true}
                    spaceBetween={80}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                    }}
                    modules={[Autoplay, Navigation]}
                    className={`mySwiper w-[50%] overflow-hidden sm:w-full`}
                >
                    {
                        customers.map(customer => (
                            <>
                                <SwiperSlide key={customer.name} className={`bg-gray-100 border shadow-xl rounded relative p-4 `}>
                                    <div className="absolute top-4 flex justify-end w-full left-8 sm:hidden">
                                        <Image
                                            src={"/c-bg.png"} width={80} height={80} alt="..." />
                                    </div>
                                    <div className="flex items-center  gap-4 sm:flex-col sm:text-center">
                                        <Image src={customer.img} width={100} height={100} alt="..." />
                                        <div >
                                            <p>
                                                {customer.name}
                                            </p>
                                            <p className="text-gray-600 text-sm mt-2">
                                                {customer.filed}
                                            </p>
                                            <div className="w-full h-[2px] bg-yellow-500 mt-2"></div>
                                        </div>
                                    </div>
                                    <p className="w-full sm:text-center p-4 leading-[30px]">
                                        {customer.des}
                                    </p>
                                </SwiperSlide>
                            </>
                        ))
                    }
                    <div className="flex items-center gap-2 justify-center m-2">
                        {
                            customers.map(item => (
                                <div className={`${item.id ? "bg-red-500" : "bg-blue-500"} w-[10px] h-[10px] bg-orange-600 rounded-full`}></div>
                            ))
                        }
                    </div>
                </Swiper>
            </div>
        </>
    )
}