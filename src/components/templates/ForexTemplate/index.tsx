import forex from '@/assets/background/forex.jpeg';
import Loading from '@/components/molecules/Loading';
import Navbar from '@/components/organisms/Navbar';
import { BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import currencyFormatter from '@/utils/currency-formatter';
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
    <Loading loading={loading} error={error}>
      <div className="rounded border">
        <div className="p-4 border-t flex items-center justify-between">
          <p className="font-bold cursor-pointer">Code</p>
          <p className="font-bold cursor-pointer">Rate</p>
        </div>
        {(data || [])
          .map(({ code, rate }) => {
            const newRate = parseFloat(((eurRate / rate) * vndRate).toFixed(2));
            return { code, rate: newRate };
          })
          .sort((a, b) => (a.rate < b.rate ? 1 : -1))
          .map(({ code, rate }) => {
            return (
              <div
                key={code}
                className="p-4 border-t flex items-center justify-between"
              >
                <div>{code}</div>
                <div>{currencyFormatter(rate)}</div>
              </div>
            );
          })}
      </div>
    </Loading>
  );
};

export const ForexTemplate: React.FC = () => {
  return (
    <div
      className="bg-fixed bg-center bg-cover text-white"
      style={{ backgroundImage: `url(${forex.src})` }}
    >
      <div className="min-h-screen bg-gray-900/75">
        <Navbar appName="forex" />
        <main className="pb-8">
          <Container>
            <ForexRates />
          </Container>
        </main>
      </div>
    </div>
  );
};

export default ForexTemplate;
