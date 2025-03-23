import { Show } from "@/schema/show";
import Image from "next/image";

export const ShowImage = ({ show }: { show: Show }) => {
  return show.image ? (
    <Image alt={show.name} width={200} height={280} src={show.image?.medium} />
  ) : (
    <div className="w-[200px] h-[280px] bg-gray-200">
      <p>No image found for {show.name}</p>
    </div>
  );
};
