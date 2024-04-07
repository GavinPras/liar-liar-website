export default function HeroImage() {
  return (
    <>
      <section className="w-full h-auto flex justify-center">
        <div className="w-full relative flex justify-center">
          <img src="src/assets/img/Hero/contents_top_fv2_logo.png" alt="logo" className="absolute top-4 z-50 w-[50%] lg:top-12 lg:w-[45%]" />
          <img src="src\assets\img\Hero\contents_top_fv2__sp_star.png" alt="star" className="absolute z-50 w-auto animate-bounce-custom lg:w-[80%]" />
          <img src="src\assets\img\Hero\contents_top_fv2__sp_bg.jpg" alt="bg-content" className="z-10 relative w-full lg:hidden" />
          <img src="src\assets\img\Hero\contents_top_fv2_bg.jpg" alt="bg-lg" className="z-10 relative w-full hidden lg:block" />
        </div>
      </section>
    </>
  );
}
