import { Country } from '@/@types/countries';
import maps from '@/assets/background/maps.jpeg';
import Loading from '@/components/molecules/Loading';
import Background from '@/components/organisms/Background';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { NEXT_PUBLIC_BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import MapIcon from '@mui/icons-material/Map';
import { Paper, TableContainer, TableHead, TableRow } from '@mui/material';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Link from 'next/link';

const Countries: React.FC = () => {
  const url = `${NEXT_PUBLIC_BASE_URL}/countries`;
  const { loading, error, data } = useAxios<Country[]>(url);

  if (data) {
    data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
  }

  return (
    <Loading loading={loading} error={error} data={data}>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-bold">ID</TableCell>
                <TableCell className="font-bold">Name</TableCell>
                <TableCell className="font-bold">Region</TableCell>
                <TableCell className="font-bold">Subregion</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(data || []).map((country) => {
                return (
                  <TableRow key={country.cca2}>
                    <TableCell>{country.cca2}</TableCell>
                    <TableCell>
                      <Link
                        href={`/countries/${country.cca3}`}
                        className="flex items-center gap-2"
                      >
                        <span className="text-xl">{country.flag}</span>
                        <h3>{country.name.common}</h3>
                      </Link>
                    </TableCell>
                    <TableCell>{country.region}</TableCell>
                    <TableCell>{country.subregion}</TableCell>
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

export const CountriesTemplate: React.FC = () => {
  return (
    <Background backgroundImage={maps}>
      <div className="min-h-screen flex flex-col">
        <Navbar icon={<MapIcon />} appName="countries" />
        <main className="grow">
          <div className="h-full">
            <Container>
              <Countries />
            </Container>
          </div>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

CountriesTemplate.displayName = 'CountriesTemplate';

export default CountriesTemplate;
