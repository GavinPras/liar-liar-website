import HeroImage from "./components/HeroComponents/HeroImage";
import HeroNews from "./components/HeroComponents/HeroNews";
import HeroVideo from "./components/HeroComponents/HeroVideo";

export default function Hero() {
  return (
    <>
      <main className="w-full h-auto">
        <HeroImage />
        <HeroVideo />
        <HeroNews />
      </main>
    </>
  );
}
