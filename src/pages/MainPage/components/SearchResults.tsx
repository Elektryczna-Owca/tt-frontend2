import { KeywordsResultsPairDto } from "../../../types/results";

interface SearchResultsProps {
  items: KeywordsResultsPairDto[];
}

const SearchResults = ({ items }: SearchResultsProps) => (
  <div className="w-full">
    {items.map(({ keywords, results }, index) => (
      <div
        key={index}
        className="py-4 border-b border-gray-200 last:border-b-0"
      >
        <p className="mb-2 text-lg font-semibold text-gray-800">
          {`The keywords: ${keywords}`}
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          {results.map((result, _index) => (
            <li key={_index}>
              {result}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default SearchResults;
