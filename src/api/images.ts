import { createApi } from "unsplash-js";
import mockSearchResponse from "./mockSearchResponse.json";
import { ImageObject } from "../types";

const unsplash = createApi({
  accessKey: "aWDL2Iib3zEbY8ntvdXz7ALXKVXzx9aLsx5bv2CZUD0",
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

  // return mockSearchResponse;
  console.error("There is an issue with retrieving photos from Unsplash API");
}

export { getImagesByQuery };
