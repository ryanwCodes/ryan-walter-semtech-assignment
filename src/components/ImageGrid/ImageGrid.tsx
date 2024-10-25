import { ImageObject } from "../../types";
import { GridComponents, VirtuosoGrid } from "react-virtuoso";
import ItemWrapper from "./subcomponents/ItemWrapper";
import List from "./subcomponents/List";
import Item from "./subcomponents/Item";
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
  return (
    <VirtuosoGrid
      useWindowScroll
      data={images}
      totalCount={images.length}
      endReached={loadMore}
      components={gridComponents}
      itemContent={(_, props) => {
        const imageUrl = props.urls.small;
        const linkUrl = props.links.html;
        return (
          <ItemWrapper>
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
              <img src={imageUrl} height="100%" width="100%" />
            </a>
          </ItemWrapper>
        );
      }}
    />
  );
}

export default ImageGrid;
