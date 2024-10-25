import Image from "next/image";
import AboutMain from "../../components/AboutMain";
import BannerAbout from "@/components/BannerAbout";
import ChooseAbout from "@/components/ChooseAbout";

export default function About() {
  return (
    <main className="  ">
    <AboutMain />
    <BannerAbout/>
    <ChooseAbout/>
    </main>
  );
}
