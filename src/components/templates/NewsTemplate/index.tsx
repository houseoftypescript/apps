import news from '@/assets/background/news.jpeg';
import Navbar from '@/components/organisms/Navbar';
import { Article } from '@/components/organisms/News';
import useAxios from '@/hooks/use-axios';
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

export const Headlines = React.memo<{ category: string }>(({ category }) => {
  const url = `http://localhost:8080/api/news/headlines?category=${category}&country=us`;
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
    <div className="pb-8">
      <div className="flex pb-8 justify-center md:justify-start">
        <h2 className="uppercase text-4xl">
          {category} ({data.length})
        </h2>
      </div>
      <div className="md:h-[70vh] md:overflow-hidden">
        <div className="md:h-full md:overflow-y-scroll md:overflow-x-none">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </div>
  );
});

Headlines.displayName = 'Headlines';

export const NewsTemplate: React.FC = () => {
  const [category, setCategory] = useState<string>('general');

  return (
    <div
      className="bg-fixed bg-center bg-cover text-white"
      style={{ backgroundImage: `url(${news.src})` }}
    >
      <div className="min-h-screen bg-gray-900/75">
        <Navbar appName="news" />
        <main className="pb-8">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-8">
              <div className="col-span-1">
                <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                  {[
                    {
                      icon: <TrendingUpIcon />,
                      title: 'general',
                      alt: 'Top Stories',
                    },
                    { icon: <BusinessCenterIcon />, title: 'business' },
                    { icon: <MovieIcon />, title: 'entertainment' },
                    { icon: <HealthAndSafetyIcon />, title: 'health' },
                    { icon: <BiotechIcon />, title: 'science' },
                    { icon: <SportsSoccerIcon />, title: 'sports' },
                    { icon: <LaptopMacIcon />, title: 'technology' },
                  ].map(({ icon, title, alt = '' }, index: number) => {
                    return (
                      <div
                        key={`category-${title}`}
                        className={
                          index === 0
                            ? 'col-span-2 md:col-span-1'
                            : 'col-span-1'
                        }
                      >
                        <div
                          role="button"
                          className={`p-4 border rounded ${
                            category === title ? 'bg-white text-gray-900' : ''
                          }`}
                          onClick={() => setCategory(title)}
                        >
                          <div className="flex items-center justify-start gap-2">
                            {icon}
                            <span className="capitalize">{alt || title}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-span-3">
                <Headlines category={category} />
              </div>
            </div>
          </Container>
        </main>
      </div>
    </div>
  );
};

export default NewsTemplate;
