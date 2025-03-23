import { ShowCard } from "@/components/show-card/show-card";
import { SearchShowsSchema } from "@/schema/show";

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = await searchParams;
  const q = query.q;
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${q}`);
  const data = await response.json();

  const parsedData = SearchShowsSchema.safeParse(data);

  if (!parsedData.success) {
    return <div>Failed to parse data: {parsedData.error.message}</div>;
  }
  return (
    <div>
      <h1>Search Results for {q}</h1>
      <div className="flex flex-wrap gap-2">
        {parsedData.data.map((show) => {
          return <ShowCard key={show.show.id} show={show.show} />;
        })}
      </div>
    </div>
  );
}
