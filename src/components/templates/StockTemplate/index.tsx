import stock from '@/assets/background/stock.jpeg';
import Navbar from '@/components/organisms/Navbar';
import { CandlestickChart } from '@mui/icons-material';
import Container from '@mui/material/Container';

export const StockTemplate: React.FC = () => {
  return (
    <div
      className="bg-fixed bg-center bg-cover text-white"
      style={{ backgroundImage: `url(${stock.src})` }}
    >
      <div className="min-h-screen bg-gray-900/75">
        <Navbar icon={<CandlestickChart />} appName="stock" />
        <main className="pb-8">
          <Container></Container>
        </main>
      </div>
    </div>
  );
};

export default StockTemplate;
