import searchBackground from '@/assets/background/search.jpeg';
import Background from '@/components/organisms/Background';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import News, { Article } from '@/components/organisms/News';
import { BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Chip, FormControl, InputAdornment, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router';
import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Headlines = React.memo<{ category: string; country: string }>(
  ({ category, country }) => {
    const url = `${BASE_URL}/news/headlines?category=${category}&country=${country}&pageSize=16`;
    const { loading, error, data } = useAxios<Article[]>(url);

    return (
      <Container>
        <News loading={loading} error={error} data={data || []} />
      </Container>
    );
  }
);

Headlines.displayName = 'Headlines';

const Trends = React.memo<{ country: string }>(({ country }) => {
  const router = useRouter();

  const url = `${BASE_URL}/news/google-trends?country=${country}`;
  const { loading, error, data } =
    useAxios<{ country: string; trends: string[] }[]>(url);

  if (loading || error || !data) return <></>;

  const trends = data[0].trends;

  return (
    <div className="block w-full overflow-auto">
      <div className="flex md:flex-wrap gap-2">
        {trends.map((trend) => {
          return (
            <div key={trend}>
              <Chip
                icon={
                  <TrendingUpIcon fontSize="small" sx={{ color: '#ffffff' }} />
                }
                label={trend}
                variant="outlined"
                className="text-white text-xs bg-gray-900/50 px-2"
                onClick={() => {
                  router.push({ pathname: '/search', query: { q: trend } });
                }}
                sx={{ '.MuiChip-icon': { color: '#ffffff' } }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
});

Trends.displayName = 'Trends';

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
                <Trends country={'united states'} />
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
