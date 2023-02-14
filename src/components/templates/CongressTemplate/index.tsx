import congress from '@/assets/background/congress.jpeg';
import Loading from '@/components/molecules/Loading';
import Background from '@/components/organisms/Background';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import PolicyIcon from '@mui/icons-material/Policy';
import {
  List,
  ListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Container from '@mui/material/Container';

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

export const Congress: React.FC = () => {
  const url = `${BASE_URL}/congress/members`;
  const { loading, error, data } = useAxios<CongressMember[]>(url);

  return (
    <Loading loading={loading} error={error} data={data}>
      <Paper>
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
      </Paper>
    </Loading>
  );
};

const CongressTemplate: React.FC = () => {
  return (
    <Background backgroundImage={congress}>
      <div className="min-h-screen flex flex-col">
        <Navbar icon={<PolicyIcon />} appName="congress" />
        <main className="grow">
          <Container>
            <Congress />
          </Container>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

export default CongressTemplate;
