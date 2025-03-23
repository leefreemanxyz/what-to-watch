import { Show } from "@/schema/show";
import Link from "next/link";

export const ShowCard = ({ show }: { show: Show }) => {
  return (
    <Link href={`/show/${show.id}`}>
      <div>
        <h1>{show.name}</h1>
        <img src={show.image.medium} alt={show.name} />
      </div>
    </Link>
  );
};
