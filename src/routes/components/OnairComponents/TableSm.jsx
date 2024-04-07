import { TABLE_DATA_SM } from "./TableData";

export default function TableSm() {
  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center lg:hidden">
        <div className="border-b-2 border-[#ff008a]"></div>
        <ul>
          {TABLE_DATA_SM.map((item, index) => (
            <li key={index} className="mt-2 text-[#222] font-NotoJP tracking-widest">
              <p className="px-4 text-2xl tracking-[0.2em]">{item.cast}</p>
              <p className="px-4 text-lg">{item.date}</p>
              <p className="px-4 text-lg">{item.topic}</p>
              <div className="my-2 border-b-2 border-[#ff008a]"></div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
