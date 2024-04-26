import TableContent from "./components/OnairComponents/TableContent";
import DistributionContent from "./components/OnairComponents/DistributionContent";
import DistributionListSm from "./components/OnairComponents/DistributionListSm";
import DistributionListLg from "./components/OnairComponents/DistributionListLg";

export default function Onair() {
  return (
    <>
      <section className="bg-[url('src/assets/img/Onair/contents_onair-bg.jpg')] bg-cover bg-center mt-16 w-full h-auto flex flex-col justify-center">
        <header className="mb-10">
          <img src="src\assets\img\Onair\contents_header_onair.png" alt="header" className="w-[40%] mx-auto max-w-40" />
        </header>
        <TableContent />
        <DistributionContent />
        <DistributionListSm />
        <DistributionListLg />
      </section>
    </>
  );
}
