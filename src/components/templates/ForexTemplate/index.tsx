import forex from '@/assets/background/forex.jpeg';
import Loading from '@/components/molecules/Loading';
import Background from '@/components/organisms/Background';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import currencyFormatter from '@/utils/currency-formatter';
import { CurrencyExchange } from '@mui/icons-material';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Container from '@mui/material/Container';

const ForexRates = () => {
  const {
    loading,
    error,
    data = [],
  } = useAxios<
    {
      code: string;
      rate: number;
      date: string;
    }[]
  >(`${BASE_URL}/forex/rates`);

  const vndRate =
    data?.find(({ code }) => code.toUpperCase() === 'VND')?.rate || 0;
  const eurRate =
    data?.find(({ code }) => code.toUpperCase() === 'EUR')?.rate || 0;

  return (
    <Loading loading={loading} error={error} data={data}>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-bold">Code</TableCell>
                <TableCell className="font-bold text-right">Rate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(data || [])
                .map(({ code, rate }) => {
                  const newRate = parseFloat(
                    ((eurRate / rate) * vndRate).toFixed(2)
                  );
                  return { code, rate: newRate };
                })
                .sort((a, b) => (a.rate < b.rate ? 1 : -1))
                .map(({ code, rate }) => {
                  return (
                    <TableRow key={code}>
                      <TableCell>{code}</TableCell>
                      <TableCell className="text-right">
                        {currencyFormatter(rate)}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Loading>
  );
};

export const ForexTemplate: React.FC = () => {
  return (
    <Background backgroundImage={forex}>
      <div className="min-h-screen flex flex-col">
        <Navbar icon={<CurrencyExchange />} appName="forex" />
        <main className="grow">
          <Container>
            <ForexRates />
          </Container>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

export default ForexTemplate;
