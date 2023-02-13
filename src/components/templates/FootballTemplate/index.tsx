import football from '@/assets/background/football.jpeg';
import Navbar from '@/components/organisms/Navbar';
import { BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Container from '@mui/material/Container';
import Image from 'next/image';

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
  const url = `${BASE_URL}/football/teams/64/matches`;
  const { loading, error, data } = useAxios<Match[]>(url);

  if (loading) {
    return (
      <div className="border p-8 rounded">
        <div className="flex items-center justify-center">
          <span className="uppercase">Loading</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="border p-8 rounded">
        <div className="flex items-center justify-center">
          <span className="uppercase">{error.message || 'Error'}</span>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="border p-8 rounded">
        <div className="flex items-center justify-center">
          <span className="uppercase">No Data</span>
        </div>
      </div>
    );
  }

  const statuses: string[] = [
    ...new Set(data.map((match: Match) => match.status)),
  ]
    .sort()
    .reverse();

  return (
    <>
      {statuses.map((status) => {
        return (
          <Accordion key={`status-${status}`}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h2>{status}</h2>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-col gap-4">
                {data
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
    </>
  );
};

export const FootballTemplate: React.FC = () => {
  return (
    <div
      className="bg-fixed bg-center bg-cover text-white"
      style={{ backgroundImage: `url(${football.src})` }}
    >
      <div className="min-h-screen bg-gray-900/75">
        <Navbar appName="football" />
        <main className="pb-8">
          <Container>
            <Matches />
          </Container>
        </main>
      </div>
    </div>
  );
};

export default FootballTemplate;
