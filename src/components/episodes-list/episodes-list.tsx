import { Episode } from "@/schema/show";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const EpisodesList = ({ episodes }: { episodes: Episode[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Airdate</TableHead>
          <TableHead>Identifier</TableHead>
          <TableHead>Runtime</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Summary</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {episodes.map((episode) => {
          return (
            <TableRow key={episode.id}>
              <TableCell>{episode.name}</TableCell>
              <TableCell>{episode.airdate}</TableCell>
              <TableCell>
                S{episode.season.toString().padStart(2, "0")}E
                {episode.number.toString().padStart(2, "0")}
              </TableCell>
              <TableCell>{episode.runtime}</TableCell>
              <TableCell>{episode.rating.average}</TableCell>
              <TableCell>{episode.summary}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
