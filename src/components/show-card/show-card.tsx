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
            <ShowImage show={show} />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{show.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
