import { useEffect, useState } from "react";
import Categories from "./Categories";
import Slider from "./Slider";
import FlashSales from "./FlashSales";
import Browse from "./Browse";
import Banner from "./Banner";
import ExploreOurProducts from "./ExploreOurProducts";
import NewArrivals from "./NewArrivals";
import Services from "../Common/Services";

interface SliderDataItem {
  logo?: string;
  product: string;
  discount: string;
  img: string;
  alt: string;
  "quick-link": string;
}

interface SliderData {
  heroCarouselData: SliderDataItem[];
}

function HomeComponents() {
  const [sliderData, setSliderData] = useState<SliderData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/slider.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData: SliderData = await response.json();
        setSliderData(jsonData);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="flex sm:justify-between md:justify-center">
        <div className="flex md:flex-row items-center justify-between gap-2 max-sm:gap-10 p-2 md:px-[4rem] lg:px-[6rem] sm:w-[100vw] md:w-[100vw] xl:w-[200] 2xl:w-[150rem] pt-0">
          <Categories />
          {sliderData ? <Slider data={sliderData} /> : <p>Loading slider...</p>}
        </div>
      </section>
      <FlashSales />
      <Browse />
      <Banner />
      <ExploreOurProducts />
      <NewArrivals />
      <Services />
    </>
  );
}

export default HomeComponents;
