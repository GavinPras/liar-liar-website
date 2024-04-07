export default function HeroVideo() {
  return (
    <>
      <section className="w-full h-auto mt-4 flex justify-center">
        <div className="bg-[url('src/assets/img/Hero/contents_top_movie_bg02.jpg')] w-full h-56 bg-center bg-cover object-center flex justify-center items-center lg:h-[30rem]">
          <a href="https://youtu.be/Vpt5oafWyKU" className="cursor-pointer">
            <img src="src\assets\img\Hero\contents_top_movie_icon.png" alt="video-icon" className="max-w-20" />
          </a>
        </div>
      </section>

      <section className="w-full h-auto mt-24 flex justify-center mx-auto">
        <div className="container w-[90%] flex-col">
          <span>
            <img src="src\assets\img\Hero\contents_header_youtube.png" alt="header-youtube" className="w-[50%] mx-auto mb-12 md:max-w-64" />
          </span>
          <iframe
            className="w-full max-w-[40rem] aspect-video mx-auto"
            src="https://www.youtube.com/embed/LMrA9zcZhNM?si=0qMrByn0d-J4zJAE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

          <div className="w-full flex justify-center">
            <button className="mt-12 w-auto hover:opacity-50 duration-300">
              <img className="max-w-[255px] h-auto" src="src\assets\img\Hero\contents_top_youtube_button.svg" alt="button-youtube" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
