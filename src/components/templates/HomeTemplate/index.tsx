import {
  CandlestickChart,
  Cloud,
  CurrencyExchange,
  Newspaper,
  Search,
  SportsSoccer,
  Translate,
} from '@mui/icons-material';
import { FormControl, InputAdornment, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';

export const HomeTemplate: React.FC = () => {
  const [query, setQuery] = useState('');

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="w-full h-screen">
      <Container className="h-full">
        <div className="h-full flex items-center">
          <div className="w-full flex flex-col gap-4 md:gap-8">
            <h1 className="text-6xl md:text-7xl text-center">HOM</h1>
            <form onSubmit={search} className="w-full">
              <FormControl variant="standard" className="w-full">
                <TextField
                  fullWidth
                  id="query"
                  label="Query"
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
                          <Search className="curpointer" />
                        </button>
                      </InputAdornment>
                    ),
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
                    icon: <Newspaper className="md:text-4xl" />,
                    color: 'bg-red-500 hover:bg-red-700',
                  },
                  {
                    id: 'forex',
                    url: '/forex',
                    icon: <CurrencyExchange className="md:text-4xl" />,
                    color: 'bg-green-500 hover:bg-green-700',
                  },
                  {
                    id: 'weather',
                    url: '/weather',
                    icon: <Cloud className="md:text-4xl" />,
                    color: 'bg-blue-500 hover:bg-blue-700',
                  },
                  {
                    id: 'football',
                    url: '/football',
                    icon: <SportsSoccer className="md:text-4xl" />,
                    color: 'bg-red-500 hover:bg-red-700',
                  },
                  {
                    id: 'stock',
                    url: '/stock',
                    icon: <CandlestickChart className="md:text-4xl" />,
                    color: 'bg-green-500 hover:bg-green-700',
                  },
                  {
                    id: 'translate',
                    url: '/translate',
                    icon: <Translate className="md:text-4xl" />,
                    color: 'bg-blue-500 hover:bg-blue-700',
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
                            className={`absolute w-full h-full flex items-center justify-center rounded text-white transition-all ${color}`}
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
    </div>
  );
};

export default HomeTemplate;
