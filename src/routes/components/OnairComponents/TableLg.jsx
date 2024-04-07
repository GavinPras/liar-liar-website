import { TABLE_DATA_LG } from "./TableData";

export default function TableLg() {
  return (
    <>
      <table className="w-full hidden lg:table">
        <tr className="text-[#c840b6] border-b-2 border-[#ff008a] h-12">
          <th className="text-start w-[20%]">放送局</th>
          <th className="text-start w-[40%]">放送日</th>
          <th className="text-start w-[40%]">備考</th>
        </tr>

        {TABLE_DATA_LG.map((item, index) => (
          <tr key={index} className="text-[#222] font-NotoJP text-lg tracking-widest border-b-2 border-[#ff008a] h-14">
            <td>{item.cast}</td>
            <td>{item.date}</td>
            <td>{item.topic}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
