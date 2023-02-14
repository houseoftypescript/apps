import trends from '@/assets/background/trends.jpeg';
import Loading from '@/components/molecules/Loading';
import Background from '@/components/organisms/Background';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Container,
  Paper,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

export type TrendsByCountry = {
  country: string;
  trends: string[];
};

const Trends: React.FC = () => {
  const url = `${BASE_URL}/google/trends`;
  const { loading, error, data } = useAxios<{
    trendsByNumber: Record<string, number>;
    trendsByCountries: TrendsByCountry[];
  }>(url);

  return (
    <Loading loading={loading} error={error} data={data}>
      <div className="flex flex-col gap-8">
        <Paper>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h2 className="capitalize">Top Trends</h2>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-wrap gap-2">
                {Object.entries(data?.trendsByNumber || {})
                  .filter(([_, value]) => value >= 4)
                  .map(([key, value]) => {
                    const urlSearchParams = new URLSearchParams();
                    urlSearchParams.set('q', key);
                    const url = `https://www.google.com/search?${urlSearchParams.toString()}`;
                    return (
                      <div key={key}>
                        <Link href={url} target="_blank">
                          <Chip
                            icon={<TrendingUpIcon fontSize="small" />}
                            label={`${key} (${value})`}
                            variant="outlined"
                            className="px-2 cursor-pointer hover:bg-gray-900 hover:text-white"
                            sx={{
                              '.MuiChip-icon': { color: '#000000' },
                              '&:hover .MuiChip-icon': { color: '#ffffff' },
                            }}
                          />
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </AccordionDetails>
          </Accordion>
        </Paper>
        <div>
          {(data?.trendsByCountries || []).map(({ country, trends }) => {
            return (
              <Accordion key={`country-${country}`}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h2 className="capitalize">{country}</h2>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-wrap gap-2">
                    {trends.map((trend) => {
                      const urlSearchParams = new URLSearchParams();
                      urlSearchParams.set('q', trend);
                      const url = `https://www.google.com/search?${urlSearchParams.toString()}`;
                      return (
                        <div key={trend}>
                          <Link href={url} target="_blank">
                            <Chip
                              icon={<TrendingUpIcon fontSize="small" />}
                              label={trend}
                              variant="outlined"
                              className="px-2 cursor-pointer hover:bg-gray-900 hover:text-white"
                              sx={{
                                '.MuiChip-icon': { color: '#000000' },
                                '&:hover .MuiChip-icon': { color: '#ffffff' },
                              }}
                            />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </Loading>
  );
};

Trends.displayName = 'Trends';

export const TrendsTemplate: React.FC = () => {
  return (
    <Background backgroundImage={trends}>
      <div className="min-h-screen flex flex-col">
        <Navbar icon={<TrendingUpIcon />} appName="Trends" />
        <main className="grow">
          <Container>
            <Trends />
          </Container>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

TrendsTemplate.displayName = 'TrendsTemplate';

export default TrendsTemplate;
