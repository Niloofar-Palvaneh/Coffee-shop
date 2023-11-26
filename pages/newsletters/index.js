

export default function Newsletters() {
    return (
        <>
            <div className="flex items-center justify-center mb-12">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="text-center p-6 text-xl mb-12 font-bold">
                        با عضویت در خبرنامه از آخرین مطالب ما باخبر شوید. ما اعلان تازه ترین محصولات و یا تازه ترین وبلاگ هایمان را از طریق ایمیل و پیامک برای شما ارسال میکنیم.
                    </h1>
                    <form className="flex flex-col gap-12">
                        <div className="flex items-center gap-8">
                            <section className="flex flex-col gap-1">
                                <label className="text-gray-700" htmlFor="firstName">نام</label>
                                <input className="border shadow p-2 rounded outline-orange-300" type="text" name="firstName" />
                            </section>
                            <section className="flex flex-col gap-1">
                                <label className="text-gray-700" htmlFor="lasttName">نام خانوادگی</label>
                                <input className="border shadow p-2 rounded outline-orange-300" type="text" name="lastName" />
                            </section>
                        </div>
                        <div className="flex items-center gap-8">
                            <section className="flex flex-col gap-1">
                                <label className="text-gray-700" htmlFor="mail">ایمیل</label>
                                <input className="border shadow p-2 rounded outline-orange-300" type="email" name="mail" />
                            </section>
                            <section className="flex flex-col gap-1">
                                <label className="text-gray-700" htmlFor="number">شماره تلفن</label>
                                <input className="border shadow p-2 rounded outline-orange-300" type="text" name="number" />
                            </section>
                        </div>
                        <button 
                        className="bg-blue-600 text-white p-2 border transition hover:bg-white hover:text-blue-600 border-blue-600 border-2 rounded">
                            عضویت در خبرنامه
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}