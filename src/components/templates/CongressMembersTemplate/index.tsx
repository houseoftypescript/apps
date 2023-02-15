import congressBackground from '@/assets/background/congress.jpeg';
import Loading from '@/components/molecules/Loading';
import Background from '@/components/organisms/Background';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import PolicyIcon from '@mui/icons-material/Policy';
import {
  FormControl,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export type CongressMember = {
  id: string;
  title: string;
  short_title: string;
  api_uri: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  suffix: string;
  date_of_birth: string;
  gender: string;
  party: string;
  leadership_role: string;
  twitter_account: string;
  facebook_account: string;
  youtube_account: string;
  govtrack_id: string;
  cspan_id: string;
  votesmart_id: string;
  icpsr_id: string;
  crp_id: string;
  google_entity_id: string;
  fec_candidate_id: string;
  url: string;
  rss_url: string;
  contact_form: string;
  in_office: boolean;
  cook_pvi: string;
  dw_nominate: string;
  ideal_point: string;
  seniority: string;
  next_election: string;
  total_votes: number;
  missed_votes: number;
  total_present: number;
  last_updated: string;
  ocd_id: string;
  office: string;
  phone: string;
  fax: string;
  state: string;
  district: string;
  at_large: false;
  geoid: string;
  missed_votes_pct: number;
  votes_with_party_pct: number;
  votes_against_party_pct: number;
};

export const Members: React.FC<{ chamber: string; congress: number }> =
  React.memo(({ chamber = 'house', congress = 118 }) => {
    const url = `${BASE_URL}/usa/congress/members?congress=${congress}&chamber=${chamber}`;
    const { loading, error, data, refetch } = useAxios<CongressMember[]>(url);

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
                    <TableCell className="font-bold">Name</TableCell>
                    <TableCell className="font-bold">Party</TableCell>
                    <TableCell className="font-bold">State</TableCell>
                    <TableCell className="font-bold">Leadership</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(data || []).map((member: CongressMember) => {
                    return (
                      <TableRow key={member.id}>
                        <TableCell>
                          {member.first_name} {member.last_name}
                        </TableCell>
                        <TableCell>{member.party}</TableCell>
                        <TableCell>{member.state}</TableCell>
                        <TableCell>{member.leadership_role}</TableCell>
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
  });

Members.displayName = 'Members';

export const CongressMembersTemplate: React.FC = () => {
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
              <Members chamber={chamber} congress={congress} />
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

CongressMembersTemplate.displayName = 'CongressMembersTemplate';

export default CongressMembersTemplate;
