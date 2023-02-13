import searchBackground from '@/assets/background/search.jpeg';
import Navbar from '@/components/organisms/Navbar';
import News, { Article } from '@/components/organisms/News';
import useAxios from '@/hooks/use-axios';
import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, InputAdornment, TextField } from '@mui/material';
import { useRouter } from 'next/router';

import Container from '@mui/material/Container';
import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Headlines = React.memo<{ category: string; country: string }>(
  ({ category, country }: { category: string; country: string }) => {
    const url = `http://localhost:8080/api/news/headlines?category=${category}&country=${country}&pageSize=16`;
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
  const [bgColor, setBgColor] = useState<string>(`rgba(17, 24, 39, 0)`);

  const onScroll = useCallback(() => {
    const { pageYOffset, scrollY, innerHeight } = window;
    const scrollHeight: number = pageYOffset || scrollY || 0;
    const percentage = (scrollHeight / innerHeight).toFixed(2);
    const bgColor: string = `rgba(17, 24, 39, ${percentage})`;
    setBgColor(bgColor);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push({ pathname: '/search', query: { q: query } });
  };

  return (
    <div
      className="bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${searchBackground.src})` }}
    >
      <div style={{ backgroundColor: bgColor }}>
        <section className="relative h-screen">
          <div className="absolute w-full">
            <Navbar icon={<Search />} appName="HOM" />
          </div>
          <main className="h-full">
            <Container className="h-full">
              <div className="h-full flex items-center">
                <div className="w-full flex flex-col gap-4 md:gap-8">
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
          <footer className="absolute bottom-0 w-full">
            <Container>
              <div className="flex justify-between text-white py-8">
                <ScrollLink
                  to="headlines"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="cursor-pointer"
                >
                  <p>Headlines</p>
                </ScrollLink>
                <p>&copy; 2023 HOM</p>
              </div>
            </Container>
          </footer>
        </section>
        <section id="headlines">
          <Headlines category="general" country="us" />
        </section>
      </div>
    </div>
  );
};

export default HomeTemplate;
