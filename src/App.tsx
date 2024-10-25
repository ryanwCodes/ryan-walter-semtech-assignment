import "./App.css";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import SearchBar from "./components/SearchBar/SearchBar";
import useImageSearch from "./hooks/useImageSearch";

function App() {
  const { data, searchImages, loadMoreImages, isLoading, searchQuery } =
    useImageSearch();

  function onSearch(query: string) {
    searchImages(query);
  }

  function handleLoadMore() {
    loadMoreImages();
  }

  return (
    <div className="app-root">
      <SearchBar onSearch={onSearch} />
      <ImageGrid
        hasNextPage={true}
        isNextPageLoading={isLoading}
        images={data}
        loadMore={handleLoadMore}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default App;
