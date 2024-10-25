import { createApi } from "unsplash-js";
// import mockSearchResponse from "./mockSearchResponse.json";

const unsplash = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_API_KEY,
});

async function getImagesByQuery(query: string, page: number) {
  const resp = await unsplash.search.getPhotos({
    query,
    page,
    perPage: 30,
    orientation: "portrait",
  });

  if (resp.status === 200) {
    return resp.response;
  }

  // uncomment below and comment out lines 10-19 to use mock api
  // return mockSearchResponse;

  console.error("There is an issue with retrieving photos from Unsplash API");
}

export { getImagesByQuery };
