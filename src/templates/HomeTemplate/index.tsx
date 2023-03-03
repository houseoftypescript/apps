import searchBackground from '@/assets/background/search.jpeg';
import Background from '@/components/organisms/Background';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import News, { Article } from '@/components/organisms/News';
import { NEXT_PUBLIC_BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, InputAdornment, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const Headlines = React.memo<{ category: string; country: string }>(
  ({ category, country }) => {
    const url = `${NEXT_PUBLIC_BASE_URL}/news/headlines?category=${category}&country=${country}&pageSize=16`;
    const { loading, error, data } = useAxios<Article[]>(url);

    return (
      <Container>
        <News loading={loading} error={error} data={data || []} />
      </Container>
    );
  }
);

Headlines.displayName = 'Headlines';

export const HomeTemplate: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>('');

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push({ pathname: '/search', query: { q: query } });
  };

  return (
    <Background backgroundImage={searchBackground}>
      <section className="h-screen flex flex-col">
        <Navbar icon={<Search />} appName="HOM" />
        <main className="grow">
          <Container className="h-full">
            <div className="h-full flex items-center">
              <div className="w-full flex flex-col gap-2 md:gap-4">
                <form onSubmit={search} className="w-full">
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
              </div>
            </div>
          </Container>
        </main>
        <Footer />
      </section>
      <section id="headlines">
        <Headlines category="general" country="us" />
      </section>
    </Background>
  );
};

export default HomeTemplate;
