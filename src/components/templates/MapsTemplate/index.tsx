import maps from '@/assets/background/maps.jpeg';
import Loading from '@/components/molecules/Loading';
import Background from '@/components/organisms/Background';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import { Map } from '@mui/icons-material';
import { Paper, TableContainer, TableHead, TableRow } from '@mui/material';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      isl: {
        official: string;
        common: string;
      };
    };
  };
  flag: string;
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  region: string;
  subregion: string;
};

const Countries: React.FC = () => {
  const url = `${BASE_URL}/countries`;
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
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{country.flag}</span>
                        <h3>{country.name.common}</h3>
                      </div>
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

export const MapsTemplate: React.FC = () => {
  return (
    <Background backgroundImage={maps}>
      <div className="min-h-screen flex flex-col">
        <Navbar icon={<Map />} appName="maps" />
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

export default MapsTemplate;
