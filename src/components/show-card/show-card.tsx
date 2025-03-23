import { Show } from "@/schema/show";
import Image from "next/image";
import Link from "next/link";
import { ShowImage } from "../show-image/show-image";

export const ShowCard = ({ show }: { show: Show }) => {
  return (
    <Link href={`/show/${show.id}`}>
      <div className="relative">
        <ShowImage show={show} />
      </div>
    </Link>
  );
};
