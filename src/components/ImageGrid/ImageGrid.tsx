import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
  MasonryCellProps,
  WindowScroller,
} from "react-virtualized";
import { ImageObject } from "../../types";

const gutter = 10;
const columnCount = 3;
const columnWidth = 400;
const defaultHeight = 250;

interface ImageGridProps {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  images: ImageObject[];
  loadNextPage: () => void;
  searchQuery: string;
}

function ImageGrid({ images }: ImageGridProps) {
  const cache = new CellMeasurerCache({
    defaultHeight: defaultHeight,
    defaultWidth: columnWidth,
    fixedWidth: true,
  });

  // Our masonry layout will use 3 columns with a 10px gutter between
  const cellPositioner = createMasonryCellPositioner({
    cellMeasurerCache: cache,
    columnCount: columnCount,
    columnWidth: columnWidth,
    spacer: gutter,
  });

  function cellRenderer({ index, parent, style }: MasonryCellProps) {
    const image = images[index];
    const { id } = image;
    return (
      <CellMeasurer cache={cache} index={index} key={id} parent={parent}>
        <div style={style}>
          <img src={image.urls.small} />
        </div>
      </CellMeasurer>
    );
  }

  return (
    <WindowScroller>
      {({ height, scrollTop, isScrolling }) => (
        <AutoSizer disableHeight height={height} scrollTop={scrollTop}>
          {({ width }) => (
            <Masonry
              autoHeight
              cellCount={images.length}
              cellMeasurerCache={cache}
              cellPositioner={cellPositioner}
              cellRenderer={cellRenderer}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
              width={width}
              height={height}
            />
          )}
        </AutoSizer>
      )}
    </WindowScroller>
  );
}

export default ImageGrid;
