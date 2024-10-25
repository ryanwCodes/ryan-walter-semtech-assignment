import { useState } from "react";
import { getImagesByQuery } from "../api/images";
import { ImageObject } from "../types";

function useImageSearch() {
  const [images, setImages] = useState<ImageObject[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  async function searchImages(query: string) {
    setIsLoading(true);
    const data = await getImagesByQuery(query, 1);
    const imagesFromPayload = (data?.results || []) as ImageObject[];

    setIsLoading(false);
    setCurrentPage(1);
    setSearchQuery(query);
    setImages(imagesFromPayload);
  }

  async function loadMoreImages() {
    setIsLoading(true);
    const data = await getImagesByQuery(searchQuery, currentPage);

    setIsLoading(false);
    setCurrentPage(currentPage + 1);
    setImages(data.results);
  }

  return {
    data: images,
    searchImages,
    loadMoreImages,
    isLoading,
    searchQuery,
  };
}

export default useImageSearch;
