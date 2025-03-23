import { Show } from "@/schema/show";

// We don't know how many genres there are in the API response, so we need to
// map over all the shows and insert the show into all the genres it belongs to
// With control over the API response, we could return the genres as keys that
// reference the ids of shows that belong to that genre
// e.g.
// {
//   shows: [show1, show2, show3, show4],
//   genres:{
//     "Drama": [id1, id2],
//     "Comedy": [id3, id4]
//     "Romance": [id1, id4]
//   }
// }
export const groupShowsByGenre = (shows: Show[]) => {
  const genreMap = new Map();

  for (const show of shows) {
    for (const genre of show.genres) {
      if (!genreMap.has(genre)) {
        genreMap.set(genre, []);
      }
      genreMap.get(genre).push(show);
    }
  }

  return Object.fromEntries(genreMap) as Record<string, Show[]>;
};
