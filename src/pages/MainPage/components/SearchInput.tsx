import CloseIcon from "../../../components/CloseIcon";
import SearchIcon from "../../../components/SearchIcon";

interface SearchInputProps {
  keywords?: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

const SearchInput = ({ keywords, onChange, onSearch }: SearchInputProps) => {
  const hasKeywords = !!keywords && keywords !== "";
  return (
    <div className="flex items-center w-full max-w-md border-2 border-gray-300 rounded-full px-2 focus-within:border-gray-500 transition-all">
      <input
        className="flex-grow py-2 pl-2 text-lg bg-transparent focus:outline-none"
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" && hasKeywords) {
            onSearch();
          }
        }}
        placeholder="Enter keywords..."
        type="text"
        value={keywords || ''}
      />
      {hasKeywords && (
        <button
          aria-label="Clear"
          className="p-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
          onClick={() => onChange("")}
          type="button"
        >
          <CloseIcon />
        </button>
      )}
      <button
        aria-label="Search"
        disabled={!hasKeywords}
        className={
          `p-2 rounded-full transition-colors ` +
          (hasKeywords
            ? "hover:bg-gray-200 text-gray-700 cursor-pointer"
            : "bg-transparent text-gray-400 cursor-default")
        }
        onClick={onSearch}
        type="button"
      >
        <SearchIcon />
      </button>
    </div>
  )
};

export default SearchInput;
