import search from '@/assets/background/search.jpeg';
import Navbar from '@/components/organisms/Navbar';
import { Article } from '@/components/organisms/News';
import useAxios from '@/hooks/use-axios';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export const News = React.memo<{ query: string }>(({ query }) => {
  const url = `http://localhost:8080/api/news?query=${query}&language=en`;
  const { loading, error, data } = useAxios<Article[]>(url);

  if (loading) {
    return (
      <div className="pb-8 flex items-center justify-center">
        <span className="uppercase text-white">Loading</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pb-8 flex items-center justify-center">
        <span className="uppercase text-white">Error</span>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="pb-8 flex items-center justify-center">
        <span className="uppercase text-white">No Data</span>
      </div>
    );
  }

  return (
    <div className="pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data
          .filter(({ urlToImage }) => urlToImage)
          .map(({ source, url, urlToImage, title, publishedAt }) => {
            const [date] = publishedAt.split('T');
            return (
              <div key={`article-${url}`} className="col-span-1">
                <Link href={url} target="_blank">
                  <div
                    className={`relative rounded border border-black bg-cover bg-center pb-[50%] md:pb-[100%]`}
                    style={{
                      backgroundImage: `url(${urlToImage})`,
                    }}
                  >
                    <div className="absolute w-full h-full text-gray-100 bg-gray-900/75 p-8 overflow-hidden flex items-center">
                      <div className="flex flex-col gap-2">
                        {(source.name || '').length > 0 ? (
                          <p className="text-sm text-gray-100">
                            {source.name || ''} - {date}
                          </p>
                        ) : (
                          <></>
                        )}
                        <h2 className="font-medium">{title}</h2>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
});

News.displayName = 'News';

export type SearchTemplateProps = {};

export const SearchTemplate: React.FC<SearchTemplateProps> = () => {
  const router = useRouter();
  const query: string = (router.query.q as string) || '';

  return (
    <div
      className="bg-fixed bg-center bg-cover text-white"
      style={{ backgroundImage: `url(${search.src})` }}
    >
      <div className="min-h-screen bg-gray-900/75">
        <Navbar icon={<SearchIcon />} appName="HOM" />
        <main className="pb-8">
          <Container>
            {query.length > 0 ? <News query={query} /> : <></>}
          </Container>
        </main>
      </div>
    </div>
  );
};

SearchTemplate.displayName = 'SearchTemplate';

export default SearchTemplate;
