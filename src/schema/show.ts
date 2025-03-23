import { z } from "zod";

// TVMaze doesn't provide an OpenAPI spec for their API, so I've constructed
// this schema based on the data returned from the API.
export const ShowSchema = z.object({
  id: z.number(),
  url: z.string().url(),
  name: z.string(),
  type: z.string(),
  language: z.string(),
  genres: z.array(z.string()),
  status: z.string(),
  runtime: z.number().nullable(),
  averageRuntime: z.number().nullable(),
  premiered: z.string().nullable(),
  ended: z.string().nullable(),
  officialSite: z.string().url().nullable(),
  schedule: z.object({
    time: z.string(),
    days: z.array(z.string()),
  }),
  rating: z.object({
    average: z.number().nullable(),
  }),
  weight: z.number(),
  network: z
    .object({
      id: z.number(),
      name: z.string(),
      country: z.object({
        name: z.string(),
        code: z.string(),
        timezone: z.string(),
      }),
      officialSite: z.string().url().nullable(),
    })
    .nullable(),
  webChannel: z
    .object({
      id: z.number(),
      name: z.string(),
      country: z
        .object({
          name: z.string(),
          code: z.string(),
          timezone: z.string(),
        })
        .nullable(),
      officialSite: z.string().url().nullable(),
    })
    .nullable(),
  dvdCountry: z
    .object({
      name: z.string(),
      code: z.string(),
      timezone: z.string(),
    })
    .nullable(),
  externals: z.object({
    tvrage: z.number().nullable(),
    thetvdb: z.number().nullable(),
    imdb: z.string().nullable(),
  }),
  image: z.object({
    medium: z.string().url(),
    original: z.string().url(),
  }),
  summary: z.string(),
  updated: z.number(),
  _links: z.object({
    self: z.object({ href: z.string().url() }),
    previousepisode: z
      .object({ href: z.string().url(), name: z.string() })
      .nullable(),
  }),
});

export const ShowsArraySchema = z.array(ShowSchema);

export type Show = z.infer<typeof ShowSchema>;
