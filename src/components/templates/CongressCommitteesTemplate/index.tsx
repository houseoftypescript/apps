import congressBackground from '@/assets/background/congress.jpeg';
import Loading from '@/components/molecules/Loading';
import Background from '@/components/organisms/Background';
import Breadcrumbs from '@/components/organisms/Breadcrumbs';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import PolicyIcon from '@mui/icons-material/Policy';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type CongressCommittee = { id: string; name: string };

const Committees: React.FC<{ chamber: string; congress: number }> = React.memo(
  ({ chamber = 'house', congress = 118 }) => {
    const url = `${BASE_URL}/usa/congress/committees?congress=${congress}&chamber=${chamber}`;
    const { loading, error, data, refetch } =
      useAxios<CongressCommittee[]>(url);

    useEffect(() => {
      refetch();
    }, [chamber, congress, refetch]);

    return (
      <Loading loading={loading} error={error} data={data}>
        <Paper>
          {(data || []).length > 0 ? (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className="font-bold">ID</TableCell>
                    <TableCell className="font-bold">Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(data || []).map((committee: CongressCommittee) => {
                    return (
                      <TableRow key={committee.id}>
                        <TableCell>{committee.id}</TableCell>
                        <TableCell>{committee.name}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <div className="flex items-center justify-center py-8">
              <span className="uppercase">No Data</span>
            </div>
          )}
        </Paper>
      </Loading>
    );
  }
);

Committees.displayName = 'Committees';

export const CongressCommitteesTemplate: React.FC = () => {
  const router = useRouter();
  const congress = parseInt(router.query.congress as string, 10);
  const [chamber, setChamber] = useState<string>('house');

  return (
    <Background backgroundImage={congressBackground}>
      <div className="min-h-screen flex flex-col">
        <Navbar icon={<PolicyIcon />} appName="congress" />
        <main className="grow">
          <Container>
            <div className="flex flex-col gap-4 md:gap-8">
              <FormControl fullWidth>
                <Select
                  id="chamber-select"
                  value={chamber}
                  className="bg-white"
                  onChange={(event: SelectChangeEvent<string>) =>
                    setChamber(event.target.value)
                  }
                >
                  <MenuItem value={'house'}>House</MenuItem>
                  <MenuItem value={'senate'}>Senate</MenuItem>
                </Select>
              </FormControl>
              <Committees chamber={chamber} congress={congress} />
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

CongressCommitteesTemplate.displayName = 'CongressCommitteesTemplate';

export default CongressCommitteesTemplate;
