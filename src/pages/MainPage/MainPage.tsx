import { useState } from 'react';
import { KeywordsResultsPairDto } from '../../types/results';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';
import LoadMoreButton from './components/LoadMoreButton';

const mockResponse = [
  "this is a tabel topc 1",
  "this is a tabel topc 2",
  "this is a tabel topc 3 and more",
];

const MainPage = () => {
  const [keywords, setKeywords] = useState<string>();
  const [keywordsResultsPairs, setKeywordsResultsPairs] = useState<KeywordsResultsPairDto[]>([]);
  const [canLoadMore, setCanLoadMore] = useState(false);

  const handleSearch = () => {
    // TODO: Connect to backend API
    // Mock results for demonstration
    if (!keywords) {
      return;
    }
    const newPair: KeywordsResultsPairDto = {
      keywords,
      results: mockResponse,
    }
    setKeywordsResultsPairs((prevPairs) => [...prevPairs, newPair]);
    setKeywords(undefined);
    setCanLoadMore(true);
  };

  const onLoadMore = () => {
    setKeywordsResultsPairs((prevPairs) => {
      if (prevPairs.length === 0) {
        return prevPairs;
      }
      return prevPairs.map((pair, index) => {
        if (index === prevPairs.length - 1) {
          return {
            ...pair,
            results: [...pair.results, ...mockResponse]
          }
        }
        return pair;
      })
    });
  };

  const onKeywordsChange = (keywords: string) => {
    setKeywords(keywords);
    setCanLoadMore(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl p-8">
        <SearchResults items={keywordsResultsPairs} />
        <div className="flex h-8">
          {canLoadMore ? (
            <LoadMoreButton onClick={onLoadMore} />
          ) : (
            <span />
          )}
        </div>
        <div className="flex justify-center mt-3">
          <SearchInput keywords={keywords} onChange={onKeywordsChange} onSearch={handleSearch} />
        </div>
      </div>
    </div>
  );
};


export default MainPage;
