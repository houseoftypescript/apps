import searchBackground from '@/assets/background/search.jpeg';
import Background from '@/components/organisms/Background';
import Navbar from '@/components/organisms/Navbar';
import { Article } from '@/components/organisms/News';
import { NEXT_PUBLIC_BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

export const News = React.memo<{ query: string }>(({ query }) => {
  const url = `${NEXT_PUBLIC_BASE_URL}/news?query=${query}&language=en`;
  const { loading, error, data, refetch } = useAxios<Article[]>(url);

  useEffect(() => {
    refetch();
  }, [query, refetch]);

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
  const defaultQ: string = (router.query.q as string) || '';
  const [q, setQ] = useState<string>(defaultQ);
  const [query, setQuery] = useState<string>('');

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQ(query);
    router.push({ pathname: '/search', query: { q: query } }, undefined, {
      shallow: true,
    });
  };

  return (
    <Background backgroundImage={searchBackground}>
      <div className="min-h-screen flex flex-col">
        <Navbar icon={<SearchIcon />} appName="HOM" />
        <main className="grow">
          <Container>
            <form onSubmit={search} className="w-full pb-8">
              <FormControl variant="standard" className="w-full">
                <TextField
                  fullWidth
                  id="query"
                  name="query"
                  placeholder="Query"
                  value={query}
                  required
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setQuery(event.target.value)
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <button type="submit" className="bg-transparent">
                          <SearchIcon className="text-gray-900" />
                        </button>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiInputBase-root': {
                      backgroundColor: 'rgb(255, 255, 255, 1)',
                    },
                  }}
                />
              </FormControl>
            </form>
            {q.length > 0 ? <News query={q} /> : <></>}
          </Container>
        </main>
      </div>
    </Background>
  );
};

SearchTemplate.displayName = 'SearchTemplate';

export default SearchTemplate;
