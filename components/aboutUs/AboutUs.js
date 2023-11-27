import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Image from 'next/image';
import style from "./Aboute.module.css"

export default function AboutUs() {
    useEffect(() => {
        AOS.init({
            duration: 1200
        })
    }, [])

    return (
        <>
            <div className="mt-32 flex items-center sm:flex-col md:flex-col xl:flex-col">

                <div data-aos="zoom-in-left"
                    className="relative bg-[url('/about-bg.jpg')] bg-center bg-cover p-12 self-stretch flex items-center justify-center">
                    <h3 className="font-bold text-2xl text-white z-20 leading-[60px] sm:text-center">
                        کاشتن قهوه یک موضوع است. دانش برداشتن آن چیز دیگریست
                    </h3>
                    <div className={`absolute w-full h-[200px] z-10  ${style.filter__bg__color} ${style.webkit__height}`}></div>
                </div>
                <div data-aos="zoom-in-right" className="bg-[url('/about1.png')] bg-left-bottom bg-no-repeat mr-8 sm:bg-none md:bg-none ">
                    <div className=" mb-12 flex items-center gap-6 sm:justify-center sm:w-full md:justify-center md:w-full text-xl md:mt-12" data-aos="fade-left">
                        <h2>
                            درباره ما بدانید
                        </h2>
                        <div className="w-[100px] h-[1px] bg-gray-400 rounded"></div>
                    </div>
                    <h4 className='font-bold text-xl w-1/2 sm:w-full md:w-full'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است، چاپگرها و متون در ستون و سطرآنچنان که لازم است.
                    </h4>
                    <div className='w-1/2 sm:w-full md:w-full flex flex-col gap-12 leading-10 mt-8'>
                        <p>
                            کتابهای زیادی در گذشته، حال و آینده شناخت فراوان جامعه و متخصصان هیولای وردپرس را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی در زبان فارسی ایجاد کرد.
                        </p>
                        <p>
                            کتابهای زیادی در گذشته، حال و آینده شناخت فراوان جامعه و متخصصان هیولای وردپرس را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی در زبان فارسی ایجاد کرد.
                            کتابهای زیادی در گذشته، حال و آینده شناخت فراوان جامعه و متخصصان هیولای وردپرس را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی در زبان فارسی ایجاد کرد.
                        </p>
                    </div>
                    <div className='w-full flex justify-center sm:justify-between sm:mt-8 '>
                        <Image
                            className='ml-4 sm:hidden'
                            src={"/man.png"} width={100} height={100} alt='...' />
                        <div className='sm:ml-0 ml-48'>
                            <Image
                                src={"/emza.png"} width={80} height={80} alt='...' />
                            <div>
                                <h5>
                                    قاسم سلطانی
                                </h5>
                                <h5>
                                    بنیان گذار و مدیرعامل
                                </h5>
                            </div>
                        </div>
                        <Image
                            className='hidden sm:inline md:inline'
                            src={"/about1.png"} width={100} height={100} alt='...' />
                    </div>
                </div>
            </div>
        </>
    )
}