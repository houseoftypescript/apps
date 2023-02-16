import news from '@/assets/background/news.jpeg';
import Navbar from '@/components/organisms/Navbar';
import { Article } from '@/components/organisms/News';
import { NEXT_PUBLIC_BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import { Newspaper } from '@mui/icons-material';
import BiotechIcon from '@mui/icons-material/Biotech';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import MovieIcon from '@mui/icons-material/Movie';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Container from '@mui/material/Container';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export const Headlines = React.memo<{ title: string; category: string }>(
  ({ title, category }) => {
    const url = `${NEXT_PUBLIC_BASE_URL}/news/headlines?category=${category}&country=us`;
    const { loading, error, data, refetch } = useAxios<Article[]>(url);

    useEffect(() => {
      refetch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    if (loading) {
      return (
        <div className="pb-8 flex items-center justify-center">
          <span className="uppercase text-white">Loading</span>
        </div>
      );
    }

    if (error) {
      return (
        <div className="pb-8 flex items-center justify-center">
          <span className="uppercase text-white">Error</span>
        </div>
      );
    }

    if (!data) {
      return (
        <div className="pb-8 flex items-center justify-center">
          <span className="uppercase text-white">No Data</span>
        </div>
      );
    }

    return (
      <main>
        <div className="pb-8">
          <h2 className="uppercase text-xl md:text-2xl text-center">
            {title} ({data.length})
          </h2>
        </div>
        <div className="pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data
              .filter(({ urlToImage }) => urlToImage)
              .map(({ source, url, urlToImage, title, publishedAt }) => {
                const [date] = publishedAt.split('T');
                return (
                  <div key={`article-${url}`} className="col-span-1">
                    <Link href={url} target="_blank">
                      <div
                        className={`relative rounded border border-black bg-cover bg-center pb-[50%] md:pb-[100%]`}
                        style={{
                          backgroundImage: `url(${urlToImage})`,
                        }}
                      >
                        <div className="absolute w-full h-full text-gray-100 bg-gray-900/75 p-8 overflow-hidden flex items-center">
                          <div className="flex flex-col gap-2">
                            {(source.name || '').length > 0 ? (
                              <p className="text-sm text-gray-100">
                                {source.name || ''} - {date}
                              </p>
                            ) : (
                              <></>
                            )}
                            <h2 className="font-medium">{title}</h2>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    );
  }
);

Headlines.displayName = 'Headlines';

export const NewsTemplate: React.FC = () => {
  const [state, setState] = useState<{
    title: string;
    category: string;
  }>({
    title: 'Top Stories',
    category: 'general',
  });

  return (
    <div
      className="bg-fixed bg-center bg-cover text-white"
      style={{ backgroundImage: `url(${news.src})` }}
    >
      <div className="min-h-screen bg-gray-900/75">
        <Navbar icon={<Newspaper />} appName="news" />
        <div className="pb-8">
          <Container>
            <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  icon: <TrendingUpIcon />,
                  category: 'general',
                  title: 'Top Stories',
                },
                {
                  icon: <BusinessCenterIcon />,
                  title: 'business',
                  category: 'business',
                },
                {
                  icon: <MovieIcon />,
                  title: 'entertainment',
                  category: 'entertainment',
                },
                {
                  icon: <HealthAndSafetyIcon />,
                  title: 'health',
                  category: 'health',
                },
                {
                  icon: <BiotechIcon />,
                  title: 'science',
                  category: 'science',
                },
                {
                  icon: <SportsSoccerIcon />,
                  title: 'sports',
                  category: 'sports',
                },
                {
                  icon: <LaptopMacIcon />,
                  title: 'technology',
                  category: 'technology',
                },
              ].map(({ icon, title, category }, index: number) => {
                return (
                  <div
                    key={`category-${category}`}
                    className={index === 0 ? 'col-span-2' : 'col-span-1'}
                  >
                    <div
                      role="button"
                      className={`p-4 border rounded ${
                        state.category === category
                          ? 'bg-white text-gray-900'
                          : ''
                      }`}
                      onClick={() => setState({ title, category })}
                    >
                      <div className="flex items-center justify-start gap-2">
                        {icon}
                        <span className="capitalize text-sm md:text-base">
                          {title}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>
          </Container>
        </div>
        <main className="pb-8">
          <Container>
            <Headlines title={state.title} category={state.category} />
          </Container>
        </main>
      </div>
    </div>
  );
};

export default NewsTemplate;
