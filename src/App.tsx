import "./App.css";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import SearchBar from "./components/SearchBar/SearchBar";
import useImageSearch from "./hooks/useImageSearch";
import "react-virtualized/styles.css";

function App() {
  const { data, searchImages, loadMoreImages, isLoading, searchQuery } =
    useImageSearch();

  function onSearch(query: string) {
    searchImages(query);
  }

  return (
    <div className="app-root">
      <SearchBar onSearch={onSearch} />
      <ImageGrid
        hasNextPage={true}
        isNextPageLoading={isLoading}
        images={data}
        loadNextPage={loadMoreImages}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default App;
