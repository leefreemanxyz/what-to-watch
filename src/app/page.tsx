import { H1, H2 } from "@/components/headings/headings";
import { ShowCard } from "@/components/show-card/show-card";
import { groupShowsByGenre } from "@/lib/shows";
import { ShowsArraySchema } from "@/schema/show";

export default async function Home() {
  const response = await fetch("https://api.tvmaze.com/shows");
  const data = await response.json();
  const parsedData = ShowsArraySchema.safeParse(data);

  if (!parsedData.success) {
    return <div>Failed to parse data: {parsedData.error.message}</div>;
  }

  // a merge sort would be more efficient
  const sorted = parsedData.data.sort((a, b) => {
    return b.rating.average - a.rating.average;
  });

  // this maintains the sorted order of the shows,
  // so we don't need to sort again in the groups.
  const genres = groupShowsByGenre(sorted);

  return (
    <div className="container mx-auto">
      <H1>TV Shows</H1>
      {Object.entries(genres).map((sortedGenre) => {
        return (
          <div key={sortedGenre[0]}>
            <H2>{sortedGenre[0]}</H2>
            <div className="flex flex-wrap gap-2">
              {sortedGenre[1].map((show) => {
                return <ShowCard key={show.id} show={show} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
