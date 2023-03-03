import chess from '@/assets/background/chess.jpeg';
import Loading from '@/components/molecules/Loading';
import Background from '@/components/organisms/Background';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { NEXT_PUBLIC_BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GridViewIcon from '@mui/icons-material/GridView';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Container from '@mui/material/Container';
import Link from 'next/link';
import React from 'react';

const TitledPlayers: React.FC<{ title: string }> = React.memo(
  ({ title }: { title: string }) => {
    const url: string = `${NEXT_PUBLIC_BASE_URL}/chess.com/titled/${title}`;
    const { loading, error, data } = useAxios<{ players: string[] }>(url);

    return (
      <Loading loading={loading} error={error} data={data}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {title} ({data?.players.length || 0})
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex flex-wrap gap-2">
              {(data?.players || []).map((player) => {
                return (
                  <Link
                    key={player}
                    href={`/chess/${player}`}
                    className="underline"
                  >
                    {player}
                  </Link>
                );
              })}
            </div>
          </AccordionDetails>
        </Accordion>
      </Loading>
    );
  }
);

TitledPlayers.displayName = 'TitledPlayers';
TitledPlayers.defaultProps = { title: 'GM' };

export const ChessTemplate: React.FC = () => {
  return (
    <Background backgroundImage={chess}>
      <div className="min-h-screen flex flex-col">
        <Navbar icon={<GridViewIcon />} appName="chess" />
        <main className="grow">
          <Container>
            <div className="flex flex-col gap-4 md:gap-8">
              {[
                'GM',
                'IM',
                'FM',
                'CM',
                'NM',
                'WGM',
                'WIM',
                'WFM',
                'WCM',
                'WNM',
              ].map((title: string) => {
                return <TitledPlayers key={`title-${title}`} title={title} />;
              })}
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

export default ChessTemplate;
