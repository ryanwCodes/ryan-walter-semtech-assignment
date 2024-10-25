import { ImageObject } from "../../types";
import { VirtuosoGrid } from "react-virtuoso";
import ItemWrapper from "./subcomponents/ItemWrapper";
import List from "./subcomponents/List";
import Item from "./subcomponents/Item";
interface ImageGridProps {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  images: ImageObject[];
  loadNextPage: () => void;
  searchQuery: string;
}

const gridComponents = {
  List,
  Item,
};

function ImageGrid({ images }: ImageGridProps) {
  return (
    <VirtuosoGrid
      useWindowScroll
      data={images}
      totalCount={images.length}
      components={gridComponents}
      itemContent={(_, props) => {
        const imageUrl = props.urls.small;
        return (
          <ItemWrapper>
            <img src={imageUrl} height="100%" width="100%" />
          </ItemWrapper>
        );
      }}
    />
  );
}

export default ImageGrid;
