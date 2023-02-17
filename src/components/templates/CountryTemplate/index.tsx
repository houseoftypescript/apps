import { Country } from '@/@types/countries';
import maps from '@/assets/background/maps.jpeg';
import Loading from '@/components/molecules/Loading';
import Background from '@/components/organisms/Background';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { NEXT_PUBLIC_BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import MapIcon from '@mui/icons-material/Map';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';
import React from 'react';

export const CountryInfo: React.FC<{ code: string }> = React.memo<{
  code: string;
}>(({ code }: { code: string }) => {
  const url = `${NEXT_PUBLIC_BASE_URL}/countries`;
  const { loading, error, data } = useAxios<Country[]>(url);

  const country =
    (data || []).find(
      (country: Country) =>
        country.cca2.toLowerCase() === code.toLowerCase() ||
        country.cca3.toLowerCase() === code.toLowerCase()
    ) || ({} as Country);

  return (
    <Loading loading={loading} error={error} data={data}>
      <Paper>
        <div className="p-8">
          {country.name?.common || ''} ({country.cca2 || ''} -{' '}
          {country.cca3 || ''})
        </div>
      </Paper>
    </Loading>
  );
});

CountryInfo.displayName = 'CountryInfo';

export const CountryTemplate: React.FC = () => {
  const router = useRouter();
  const code = router.query.code as string;

  return (
    <Background backgroundImage={maps}>
      <div className="min-h-screen flex flex-col">
        <Navbar icon={<MapIcon />} appName={code} />
        <main className="grow">
          <div className="h-full">
            <Container>
              <CountryInfo code={code} />
            </Container>
          </div>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

CountryTemplate.displayName = 'CountryTemplate';

export default CountryTemplate;
