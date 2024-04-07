import { useState, useEffect } from "react";

export default function ImageCorousel({ images, activeIndex, text, episode, episodeTitle }) {
  const [mainImage, setMainImage] = useState(images[activeIndex][0]);

  useEffect(() => {
    setMainImage(images[activeIndex][0]);
  }, [activeIndex, images]);

  const handleImageClick = (src) => {
    setMainImage(images[activeIndex].find((img) => img.src === src));
  };
  return (
    <>
      <div className="mb-10 text-center font-gothic">
        <p className="text-2xl tracking-widest font-bold text-[#c840b6]">{episode}</p>
        <h1 className="text-2xl tracking-widest font-bold text-[#c840b6]">{episodeTitle}</h1>
      </div>

      <div className="relative w-[85%] aspect-video  mx-auto">
        <div className="overflow-hidden">
          <div className="flex justify-center">
            <img src="src/assets/img/Story/contents_story_image_bg02.png" alt="bg" className="w-[55rem] lg:w-[60rem] absolute z-0 transform -rotate-12" />
          </div>

          <div className="w-full relative z-10 max-w-[60rem] mx-auto">
            <img src={mainImage.src} alt="img" />
          </div>
        </div>

        <div className="mt-2 max-w-[60rem] mx-auto relative z-20 w-full h-auto gap-x-2 overflow-hidden flex flex-row bg-white">
          {images[activeIndex].map((item, index) => (
            <div key={index} className="flex-auto">
              <img src={item.src} alt={item.alt} onClick={() => handleImageClick(item.src)} className="cursor-pointer" />
            </div>
          ))}
        </div>

        <div className="max-w-[60rem] mt-8">
          <p className="font-gothic font-medium text-sm sm:text-base tracking-widest">{text}</p>
        </div>
      </div>
    </>
  );
}
