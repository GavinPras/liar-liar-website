import CastSection from "./components/Staff&CastComponents/CastSection";
import StaffSection from "./components/Staff&CastComponents/StaffSection";

export default function StaffnCast() {
  return (
    <>
      <main className="w-full h-auto flex flex-col justify-center bg-[url('src/assets/img/Staff&Cast/contents_staffcast_bg01.jpg')] bg-cover bg-center">
        <header className="mt-16 flex justify-center">
          <img src="src/assets/img/Staff&Cast/contents_header_staffcast.png" alt="header" className="w-[65%] max-w-80" />
        </header>
        <section className="w-full h-auto flex items-start mx-auto flex-col px-4 mt-20 mb-20 lg:flex-row max-w-[60rem]">
          <div className="container lg:mr-28">
            <StaffSection />
          </div>
          <div className="container mt-14 lg:mt-0">
            <CastSection />
          </div>
        </section>
      </main>
    </>
  );
}
