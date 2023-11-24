import AboutUs from "@/components/aboutUs/AboutUs"
import Customer from "@/components/customer/Customer"
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import Navbar from "@/components/navbar/Navbar"
import Servises from "@/components/servises/Servises"
import SpecialCoffee from "@/components/specialCoffee/SpecialCoffee"
export default function Home() {
  return (
    <>

      <div className="overflow-hidden">
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialCoffee />
        <Servises />
        <Customer/>
        <Footer/>
      </div>
    </>
  )
}
