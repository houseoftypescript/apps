import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import CloudIcon from '@mui/icons-material/Cloud';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import MapIcon from '@mui/icons-material/Map';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

export const content = {
  apps: [
    { id: 'news', href: '/news', title: 'news', icon: <NewspaperIcon /> },
    {
      id: 'forex',
      href: '/forex',
      title: 'forex',
      icon: <CurrencyExchangeIcon />,
    },
    { id: 'weather', href: '/weather', title: 'weather', icon: <CloudIcon /> },
    {
      id: 'football',
      href: '/football',
      title: 'football',
      icon: <SportsSoccerIcon />,
    },
    {
      id: 'stock',
      href: '/stock',
      title: 'stock',
      icon: <CandlestickChartIcon />,
    },
    { id: 'maps', href: '/maps', title: 'maps', icon: <MapIcon /> },
  ],
};

export default content;