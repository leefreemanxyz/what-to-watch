import { EpisodesList } from "@/components/episodes-list/episodes-list";
import { H1 } from "@/components/headings/headings";
import { ShowSchema } from "@/schema/show";

export default async function ShowDetailPage({
  params,
}: {
  params: { id: Promise<string> };
}) {
  const { id } = await params;
  const response = await fetch(
    `https://api.tvmaze.com/shows/${id}?embed=episodes`
  );

  const data = await response.json();
  const parsedDataWithEpisodes = ShowSchema.safeParse(data);
  if (!parsedDataWithEpisodes.success) {
    return (
      <div>Failed to parse data: {parsedDataWithEpisodes.error.message}</div>
    );
  }
  return (
    <div>
      <H1>{parsedDataWithEpisodes.data.name}</H1>
      <p>{parsedDataWithEpisodes.data.genres.join(", ")}</p>
      <p>
        {parsedDataWithEpisodes.data.premiered} -{" "}
        {parsedDataWithEpisodes.data.ended}
      </p>
      {parsedDataWithEpisodes.data._embedded?.episodes && (
        <EpisodesList
          episodes={parsedDataWithEpisodes.data._embedded.episodes}
        />
      )}
    </div>
  );
}
