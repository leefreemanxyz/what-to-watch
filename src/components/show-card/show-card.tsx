import { Show } from "@/schema/show";
import Link from "next/link";
import { ShowImage } from "../show-image/show-image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const ShowCard = ({ show }: { show: Show }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link href={`/show/${show.id}`}>
            <ShowImage
              height={280}
              width={200}
              image={show.image}
              name={show.name}
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{show.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
