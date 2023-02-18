import chess from '@/assets/background/chess.jpeg';
import Loading from '@/components/molecules/Loading';
import Background from '@/components/organisms/Background';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { NEXT_PUBLIC_BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import GridViewIcon from '@mui/icons-material/GridView';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from 'recharts';

export type PlayerStat = {
  last: {
    // the current stats
    date: number; // timestamp of the last rated game finished
    rating: number; // most-recent rating
    rd: number; // the Glicko "RD" value used to calculate ratings changes
  };
  best: {
    // the best rating achieved by a win
    date: number; // timestamp of the best-win game
    rating: number; // highest rating achieved
    game: string; // URL of the best-win game
  };
  record: {
    // summary of all games played
    win: number; // number of games won
    loss: number; // number of games lost
    draw: number; // number of games drawn
    time_per_move: number; // integer number of seconds per average move
    timeout_percent: number; // timeout percentage in the last 90 days
  };
  tournament: {
    // summary of tournaments participated in
    count: number; // number of tournaments joined
    withdraw: number; // number of tournaments withdrawn from
    points: number; // total number of points earned in tournaments
    highest_finish: number; // best tournament place
  };
};

type PlayerStats = {
  chess_daily: PlayerStat;
  chess_rapid: PlayerStat;
  chess_blitz: PlayerStat;
  chess_bullet: PlayerStat;
  chess960_daily: PlayerStat;
  tactics: {
    highest: {
      rating: number;
      date: number;
    };
    lowest: {
      rating: number;
      date: number;
    };
  };
  lessons: {
    highest: {
      rating: number;
      date: number;
    };
    lowest: {
      rating: number;
      date: number;
    };
  };
  puzzle_rush: {
    daily: {
      total_attempts: number;
      score: number;
    };
    best: {
      total_attempts: number;
      score: number;
    };
  };
};

const ChessPlayerStats: React.FC<{ username: string }> = React.memo(
  ({ username = '' }) => {
    const url: string = `${NEXT_PUBLIC_BASE_URL}/chess.com/player/${username}/stats`;
    const { loading, error, data } = useAxios<PlayerStats>(url);

    if (!username) {
      return <></>;
    }

    const radarData = [
      {
        subject: 'Bullet',
        [username]: data?.chess_bullet.last.rating || 0,
      },
      {
        subject: 'Blitz',
        [username]: data?.chess_blitz.last.rating || 0,
      },
      {
        subject: 'Rapid',
        [username]: data?.chess_rapid.last.rating || 0,
      },
      {
        subject: 'Daily',
        [username]: data?.chess_daily.last.rating || 0,
      },
      {
        subject: 'Daily 360',
        [username]: data?.chess960_daily.last.rating || 0,
      },
    ];

    return (
      <Loading loading={loading} error={error} data={data}>
        <Paper>
          {data !== null ? (
            <>
              <RadarChart
                outerRadius={90}
                width={730}
                height={250}
                data={radarData}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar
                  name={username}
                  dataKey={username}
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.6}
                />
                <Legend />
              </RadarChart>
            </>
          ) : (
            <></>
          )}
        </Paper>
      </Loading>
    );
  }
);

ChessPlayerStats.displayName = 'ChessPlayerStats';

type PlayerProfile = {
  avatar: string;
  country: string;
  followers: number;
  is_streamer: boolean;
  joined: number;
  last_online: number;
  league: string;
  location: string;
  name: string;
  player_id: number;
  status: string;
  title: string;
  url: string;
  username: string;
  verified: boolean;
};

const simplifyNumber = (number: number): string => {
  if (number > 999999) {
    return `${Math.floor(number / 1000000)
      .toFixed(1)
      .replace('.0', '')}M`;
  }

  if (number > 999) {
    return `${Math.floor(number / 1000)
      .toFixed(1)
      .replace('.0', '')}K`;
  }

  return number.toString();
};

export const ChessPlayerProfile: React.FC<{ username: string }> = React.memo(
  ({ username = '' }) => {
    const url: string = `${NEXT_PUBLIC_BASE_URL}/chess.com/player/${username}`;
    const { loading, error, data } = useAxios<PlayerProfile>(url);

    if (!username) {
      return <></>;
    }

    return (
      <Loading loading={loading} error={error} data={data}>
        <Paper>
          {data !== null ? (
            <div className="p-4 md:p-8 flex flex-col gap-4 md:gap-8">
              <h2 className="flex gap-2">
                <span className="rounded bg-red-500 text-white px-2">
                  {data.title}
                </span>
                {data.username}
              </h2>
              <div className="grid grid-cols-4 gap-4 md:gap-8 items-center">
                <div className="col-span-1">
                  <Image
                    src={data.avatar || ''}
                    alt={data.username}
                    width={100}
                    height={100}
                    className="rounded-full mx-auto w-full"
                  />
                </div>
                <div className="col-span-1">
                  <div className="text-center">
                    <p className="text-base md:text-xl">0</p>
                    <p className="text-xs md:text-base">Games</p>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="text-center">
                    <p className="text-base md:text-xl">
                      {simplifyNumber(data.followers || 0)}
                    </p>
                    <p className="text-xs md:text-base">Followers</p>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="text-center">
                    <p className="text-base md:text-xl">0</p>
                    <p className="text-xs md:text-base">Following</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium">{data.name}</h3>
              </div>
            </div>
          ) : (
            <></>
          )}
        </Paper>
      </Loading>
    );
  }
);

ChessPlayerProfile.displayName = 'ChessPlayerProfile';

export const ChessPlayerTemplate: React.FC = () => {
  const router = useRouter();
  const username: string = router.query.username as string;

  return (
    <Background backgroundImage={chess}>
      <div className="min-h-screen flex flex-col">
        <Navbar icon={<GridViewIcon />} appName="chess" />
        <main className="grow">
          <Container>
            <div className="flex flex-col gap-4 md:gap-8">
              <ChessPlayerProfile username={username} />
              <ChessPlayerStats username={username} />
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

export default ChessPlayerTemplate;
