import Carousal from "@/components/common/carousal/Carousal";
import Footer from "@/components/common/footer/Footer";
import Navbar from "@/components/common/navbar/Navbar";
import SecondBox from "@/components/common/navbar/Navbar.SecondBox";
import HorizontalBarTypeA from "@/components/horizontalBars/HorizontalBarTypeA";
import HorizontalBarTypeB from "@/components/horizontalBars/HorizontalBarTypeB";
import HorizontalBarTypeC from "@/components/horizontalBars/HorizontalBarTypeC";
import HorizontalBarTypeD from "@/components/horizontalBars/HorizontalBarTypeD";

export default function Home() {
  return (
    <>
      <main className="w-[100dvw] min-h-[100dvh] bg-[#e3e6e6]">

        <Navbar />
        <SecondBox />
        <Carousal />
        <div className="px-6 flex-col flex gap-4 py-4">

          <HorizontalBarTypeA key={0} />
          <HorizontalBarTypeD key={1} />
          <HorizontalBarTypeC key={2} />
          <HorizontalBarTypeB key={3} />
          <HorizontalBarTypeA key={4} />
          <HorizontalBarTypeC key={5} />
          <HorizontalBarTypeB key={6} />
          <HorizontalBarTypeA key={7} />
          <HorizontalBarTypeD key={8} />
          <HorizontalBarTypeB key={9} />

        </div>

        <Footer />




        {/* <Navbar />
        <TopNav />
        <Carousal />
        <div className="w-full px-3">
          <Image src={"/images/discount_flag.png"} alt="discount" width={1000} height={30} className="w-full rounded" />
        </div>
        <HorizontalBarTypeA />
        <HorizontalBarTypeA />
        <HorizontalBarTypeB />
        <HorizontalBarTypeB />
        <Footer /> */}

      </main>
    </>
  )
}
