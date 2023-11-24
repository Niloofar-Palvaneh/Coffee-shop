import AboutUs from "@/components/aboutUs/AboutUs"
import Customer from "@/components/customer/Customer"
import Header from "@/components/header/Header"
import Servises from "@/components/servises/Servises"
import SpecialCoffee from "@/components/specialCoffee/SpecialCoffee"
export default function Home() {
  return (
    <>

      <div className="overflow-hidden">
        <Header />
        <AboutUs />
        <SpecialCoffee />
        <Servises />
        <Customer/>
      </div>
    </>
  )
}
