import Image from "next/image";
import Link from "next/link";

export default function Footer() {

    return (
        <>
            <div className="relative w-full flex items-center justify-center overflow-hidden group ">
                <div className="w-full flex items-center justify-center flex-col gap-4 my-12 ">
                    <p className="text-xl font-bold text-center">
                        از گیت هاب و لینکدین من دیدن کنید
                    </p>
                    <div className="flex gap-2">
                       <Link href={"https://www.linkedin.com/in/niloofar-palvaneh-87216b281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
                        <Image src={"/linkdin.png"} width={50} height={50} alt="linkdin"/>
                       </Link>
                       <Link href={"https://github.com/Niloofar-Palvaneh"}>
                        <Image src={"/git.png"} width={50} height={50} alt="linkdin"/>
                       </Link>
                    </div>
                </div>
            </div>
        </>
    )
}