import { useState } from "react";
import { getImagesByQuery } from "../api/images";
import { ImageObject } from "../types";

function useImageSearch() {
  const [images, setImages] = useState<ImageObject[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const canLoadMore = currentPage < totalPages;

  async function searchImages(query: string) {
    try {
      setIsLoading(true);
      const data = await getImagesByQuery(query, 1);
      const imagesPayload = (data ? data.results : []) as ImageObject[];

      setIsLoading(false);
      setCurrentPage(1);
      setTotalPages(data ? data.total_pages : 0);
      setSearchQuery(query);
      setImages(imagesPayload);
    } catch (e) {
      console.error(e, "We are unable to retrieve images from Unsplash");
    }
  }

  async function loadMoreImages() {
    try {
      if (canLoadMore) {
        console.log("requesting more images...");
        setIsLoading(true);
        const data = await getImagesByQuery(searchQuery, currentPage + 1);
        const imagesPayload = (data?.results || []) as ImageObject[];

        setIsLoading(false);
        setCurrentPage(currentPage + 1);
        setImages([...images, ...imagesPayload]);
      }
    } catch (e) {
      console.error(e, "We are unable to retrieve more images from Unsplash");
    }
  }

  return {
    data: images,
    searchImages,
    loadMoreImages,
    isLoading,
    searchQuery,
    canLoadMore,
  };
}

export default useImageSearch;
