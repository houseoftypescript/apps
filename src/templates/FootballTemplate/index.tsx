import football from '@/assets/background/football.jpeg';
import Loading from '@/components/molecules/Loading';
import Background from '@/components/organisms/Background';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { NEXT_PUBLIC_BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Paper } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Container from '@mui/material/Container';

type Match = {
  id: number;
  status: string;
  utcDate: string;
  competition: { name: string; code: string; type: string; emblem: string };
  homeTeam: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
  };
  awayTeam: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
  };
  score: {
    halfTime: { home: number; away: number };
    fullTime: { home: number; away: number };
  };
};

export const Matches: React.FC = () => {
  const url = `${NEXT_PUBLIC_BASE_URL}/football/teams/64/matches`;
  const { loading, error, data } = useAxios<Match[]>(url);

  const statuses: string[] = [
    ...new Set((data || []).map((match: Match) => match.status)),
  ]
    .sort()
    .reverse();

  return (
    <Loading loading={loading} error={error} data={data}>
      {statuses.map((status) => {
        return (
          <Accordion key={`status-${status}`}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h2>{status}</h2>
            </AccordionSummary>
            <AccordionDetails>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(data || [])
                  .filter((match: Match) => match.status === status)
                  .map((match: Match) => {
                    const [date] = new Date(match.utcDate)
                      .toISOString()
                      .split('T');
                    return (
                      <div
                        key={`match-${match.id}`}
                        className="flex flex-col gap-2 border-t pt-4"
                      >
                        <div className="flex justify-between items-center">
                          <div className="font-bold">
                            {match.competition.name}
                          </div>
                          <div className="font-medium">{date}</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>{match.homeTeam.name}</div>
                          <div>{match.score.fullTime.home}</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>{match.awayTeam.name}</div>
                          <div>{match.score.fullTime.away}</div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Loading>
  );
};

export const FootballTemplate: React.FC = () => {
  return (
    <Background backgroundImage={football}>
      <div className="min-h-screen flex flex-col">
        <Navbar icon={<SportsSoccerIcon />} appName="football" />
        <main className="grow">
          <Container>
            <Matches />
          </Container>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

export default FootballTemplate;
