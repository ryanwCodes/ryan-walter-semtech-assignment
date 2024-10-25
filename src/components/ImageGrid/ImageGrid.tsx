import { ImageObject } from "../../types";
import { GridComponents, VirtuosoGrid } from "react-virtuoso";
import ItemWrapper from "./subcomponents/ItemWrapper";
import List from "./subcomponents/List";
import Item from "./subcomponents/Item";
import { useState } from "react";
import { Blurhash } from "react-blurhash";
interface ImageGridProps {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  images: ImageObject[];
  loadMore: () => void;
  searchQuery: string;
}

const gridComponents = {
  List,
  Item,
} as GridComponents;

function ImageGrid({ images, loadMore }: ImageGridProps) {
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>(
    {},
  );

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <VirtuosoGrid
      useWindowScroll
      data={images}
      totalCount={images.length}
      endReached={loadMore}
      components={gridComponents}
      itemContent={(index, props) => {
        const imageUrl = props.urls.small;
        const linkUrl = props.links.html;
        const blurHash = props.blur_hash;
        return (
          <ItemWrapper>
            {!loadedImages[index] && (
              <Blurhash
                hash={blurHash}
                width={386}
                height={264}
                resolutionX={32}
                resolutionY={32}
                punch={1}
              />
            )}
            <a href={linkUrl} target="indexblank" rel="noopener noreferrer">
              <img
                src={imageUrl}
                height="100%"
                width="100%"
                style={{
                  opacity: loadedImages[index] ? 1 : 0,
                  transition: "opacity 0.5s ease",
                }}
                onLoad={() => handleImageLoad(index)}
              />
            </a>
          </ItemWrapper>
        );
      }}
    />
  );
}

export default ImageGrid;
