# TV Maze Viewer

This is a very simple web application that displays TV shows based on the TVMaze API. You can find the API documentation at [https://www.tvmaze.com/api](https://www.tvmaze.com/api).

It is built using NextJS, TypeScript, Zod and Shadcn. To run it, clone this repo, run `npm i` and `npm run dev`, then open your browser at the port specifed in your terminal(!).

## About the application

The homepage has a grid layout of TV shows, they are categorised by genre and sorted by score. A list layout has not been provided.

A user can also search for a show using the input in the header. If the user submits their query, they will be redirected to the search results page.

If the user clicks on a show, they will be taken to the show detail page, which has information about the show, the cast and the episodes of the show.

### Styling

The styling provided is incredibly minimal and uses a lot of components directly from Shadcn. It's nice to have a design to aim for, but in it's absence I'm focusing on function over form.

### API documentation

TVMaze doesn't provide OpenAPI specs, so I've used Zod to validate the data from the API and stripped out the unused fields. The Zod schemas are based on observing what is returned by the API, so there may be mistakes. Under normal circumstances, schemas, interfaces, client sdk etc. would be generated from a spec document.

### Testing

While this application is free of linting and type errors, there aren't any unit or integration tests written. If I were to write unit tests, then I would use Vitest to test the lib/shows files genre grouping function, but as the application is mostly static data, there isn't that much to unit test.

With a tool like Playwright, I would mock the calls to the endpoints and test navigating from the home page to a detail page, and using the search bar to navigate to the search page.
