import Banner from "@/components/(frontend)/Banner";
import Steps from "@/components/(frontend)/Steps";
import Cards from "@/components/(frontend)/Cards";
import Slider from "@/components/Slider"

export default function Home() {
  return (
    <section className="bg-gray-950 ">
    
      <Banner/>
      {/* <Slider/> */}
      <Steps/>
      <Cards apiUrl={"api/products"}/>
    </section>
  );
}
