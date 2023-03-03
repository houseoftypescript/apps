import clock from '@/assets/background/clock.jpeg';
import Loading from '@/components/molecules/Loading';
import Background from '@/components/organisms/Background';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { NEXT_PUBLIC_BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import addZero from '@/utils/add-zero';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Container, Divider, List, ListItem, Paper } from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';

const Clock: React.FC<{ name: string; timezone: number }> = ({
  name,
  timezone,
}) => {
  const browserTimezone: number = new Date().getTimezoneOffset() / -60;
  const diff: number = browserTimezone - timezone;
  const oneHour: number = 1000 * 60 * 60;

  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const interval: NodeJS.Timer = setInterval(() => {
      const now = Date.now();
      const tzTs = now - diff * oneHour;
      setDate(new Date(tzTs));
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hour = addZero(date.getHours());
  const minute = addZero(date.getMinutes());
  const second = addZero(date.getSeconds());

  return (
    <div className="w-full flex justify-between items-center">
      <div>
        <p className="text-gray-700">
          {date.getFullYear()}-{addZero(date.getMonth() + 1)}-
          {addZero(date.getDate())}, {-1 * diff}HRS
        </p>
        <h2 className="text-xl">{name}</h2>
      </div>
      <div className="text-3xl">
        {hour}:{minute}:{second}
      </div>
    </div>
  );
};

export type TimeZone = {
  abbreviation: string;
  rawOffset: number;
  timezone: string;
  utcOffset: '+00:00';
};

const TimeZones: React.FC = React.memo(() => {
  const url = `${NEXT_PUBLIC_BASE_URL}/time-zones`;
  const { loading, error, data } = useAxios<TimeZone[]>(url);

  const importantTimeZones = [
    'America/Los_Angeles',
    'America/New_York',
    'Asia/Ho_Chi_Minh',
    'Asia/Seoul',
    'Australia/Melbourne',
    'Australia/Sydney',
    'Europe/Berlin',
    'Europe/Helsinki',
    'Europe/London',
  ];

  return (
    <Loading loading={loading} error={error} data={data}>
      <Paper>
        <List>
          {(data || [])
            .filter((timeZone) =>
              importantTimeZones.includes(timeZone.timezone)
            )
            .sort((a, b) => (a.rawOffset > b.rawOffset ? 1 : -1))
            .map((timeZone: TimeZone, index: number, array: TimeZone[]) => {
              const timezone = timeZone.rawOffset / 3600;
              return (
                <React.Fragment key={timeZone.timezone}>
                  <ListItem>
                    <Clock timezone={timezone} name={timeZone.timezone} />
                  </ListItem>
                  {index !== array.length - 1 ? <Divider /> : <></>}
                </React.Fragment>
              );
            })}
        </List>
      </Paper>
    </Loading>
  );
});

TimeZones.displayName = 'TimeZones';

export const ClockTemplate: React.FC = () => {
  return (
    <Background backgroundImage={clock}>
      <div className="min-h-screen flex flex-col">
        <Navbar icon={<AccessTimeIcon />} appName="world clock" />
        <main className="grow">
          <Container>
            <TimeZones />
          </Container>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

ClockTemplate.displayName = 'ClockTemplate';

export default ClockTemplate;
