import { useState } from "react";
import Header from "./components/StoryComponents/Header";
import ImageCorousel from "./components/StoryComponents/ImageCorousel";
import { imgSrc } from "./components/StoryComponents/StoryImgData";
import { episode, episodeTitle, storyText } from "./components/StoryComponents/StoryText";

export default function Story() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavigation = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <section className="w-full h-auto mt-20 pb-36 bg-[url('./assets/img/Story/contents_staffcast_bg01.jpg')] bg-cover bg-center flex justify-center">
        <div>
          <Header onNavigation={handleNavigation} />

          <div className="mt-12 w-full h-auto flex flex-col justify-center">
            <ImageCorousel images={imgSrc} activeIndex={activeIndex} text={storyText[activeIndex]} episode={episode[activeIndex]} episodeTitle={episodeTitle[activeIndex]} />
          </div>
        </div>
      </section>
    </>
  );
}
