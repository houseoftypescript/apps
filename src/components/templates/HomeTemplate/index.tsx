import searchBackground from '@/assets/background/search.jpeg';
import Navbar from '@/components/organisms/Navbar';
import News, { Article } from '@/components/organisms/News';
import useAxios from '@/hooks/use-axios';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import CloudIcon from '@mui/icons-material/Cloud';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import MapIcon from '@mui/icons-material/Map';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SearchIcon from '@mui/icons-material/Search';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { FormControl, InputAdornment, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import Link from 'next/link';
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
  const [query, setQuery] = useState('');
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
  };

  return (
    <div
      className="bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${searchBackground.src})` }}
    >
      <div style={{ backgroundColor: bgColor }}>
        <section className="relative h-screen">
          <div className="absolute w-full">
            <Navbar appName="HOM" />
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
                  <div className="mx-auto w-full md:w-1/2">
                    <div className="grid grid-cols-6 gap-4 md:gap-8">
                      {[
                        {
                          id: 'news',
                          url: '/news',
                          icon: <NewspaperIcon className="w-1/2" />,
                          color: 'bg-red-700 hover:bg-red-900',
                        },
                        {
                          id: 'forex',
                          url: '/forex',
                          icon: <CurrencyExchangeIcon className="w-1/2" />,
                          color: 'bg-green-700 hover:bg-green-900',
                        },
                        {
                          id: 'weather',
                          url: '/weather',
                          icon: <CloudIcon className="w-1/2" />,
                          color: 'bg-blue-700 hover:bg-blue-900',
                        },
                        {
                          id: 'football',
                          url: '/football',
                          icon: <SportsSoccerIcon className="w-1/2" />,
                          color: 'bg-red-700 hover:bg-red-900',
                        },
                        {
                          id: 'stock',
                          url: '/stock',
                          icon: <CandlestickChartIcon className="w-1/2" />,
                          color: 'bg-green-700 hover:bg-green-900',
                        },
                        {
                          id: 'maps',
                          url: '/maps',
                          icon: <MapIcon className="w-1/2" />,
                          color: 'bg-blue-700 hover:bg-blue-900',
                        },
                      ].map(({ id, url, icon, color }) => {
                        return (
                          <div key={`app-${id}`} className="col-span-1">
                            <div
                              className="w-full relative"
                              style={{ paddingBottom: '100%' }}
                            >
                              <Link href={url}>
                                <button
                                  className={`absolute w-full h-full flex items-center justify-center rounded hover:rounded-xl text-white transition-all ${color}`}
                                >
                                  {icon}
                                </button>
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
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
