import { CastList } from "@/components/cast-list/cast-list";
import { EpisodesList } from "@/components/episodes-list/episodes-list";
import { H1, H2 } from "@/components/headings/headings";
import { ShowImage } from "@/components/show-image/show-image";
import { Badge } from "@/components/ui/badge";
import { ShowSchema } from "@/schema/show";

export default async function ShowDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `https://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast`
  );

  const data = await response.json();
  const parsedDataWithEpisodes = ShowSchema.safeParse(data);
  if (!parsedDataWithEpisodes.success) {
    return (
      <div>Failed to parse data: {parsedDataWithEpisodes.error.message}</div>
    );
  }
  return (
    <div className="container mx-auto grid gap-4">
      <ShowImage
        image={parsedDataWithEpisodes.data.image}
        name={parsedDataWithEpisodes.data.name}
      />
      <H1>{parsedDataWithEpisodes.data.name}</H1>
      <div className="flex gap-2">
        {parsedDataWithEpisodes.data.genres.map((genre) => {
          return <Badge key={genre}>{genre}</Badge>;
        })}
        <Badge>User rating: {parsedDataWithEpisodes.data.rating.average}</Badge>
      </div>
      <p>
        Aired: {parsedDataWithEpisodes.data.premiered} -{" "}
        {parsedDataWithEpisodes.data.ended ?? "Present"}
      </p>
      {parsedDataWithEpisodes.data._embedded?.cast && (
        <CastList cast={parsedDataWithEpisodes.data._embedded?.cast} />
      )}
      <H2>Summary</H2>
      <div
        dangerouslySetInnerHTML={{
          __html: parsedDataWithEpisodes.data.summary,
        }}
      ></div>
      {parsedDataWithEpisodes.data._embedded?.episodes && (
        <EpisodesList
          episodes={parsedDataWithEpisodes.data._embedded.episodes}
        />
      )}
    </div>
  );
}
