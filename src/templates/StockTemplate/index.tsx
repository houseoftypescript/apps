import stock from '@/assets/background/stock.jpeg';
import Background from '@/components/organisms/Background';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { CandlestickChart } from '@mui/icons-material';
import Container from '@mui/material/Container';

export const StockTemplate: React.FC = () => {
  return (
    <Background backgroundImage={stock}>
      <div className="min-h-screen flex flex-col">
        <Navbar icon={<CandlestickChart />} appName="stock" />
        <main className="grow">
          <Container></Container>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

export default StockTemplate;
