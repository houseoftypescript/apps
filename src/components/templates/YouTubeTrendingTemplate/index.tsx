import youtube from '@/assets/background/youtube.jpeg';
import Loading from '@/components/molecules/Loading';
import Background from '@/components/organisms/Background';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import { YouTube } from '@mui/icons-material';
import {
  Container,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const CategorySelect: React.FC<{
  categoryId: string;
  changeCategoryId: (newCategoryId: string) => void;
}> = React.memo(({ categoryId, changeCategoryId }) => {
  const url = `${BASE_URL}/google/youtube/categories`;
  const { loading, error, data } =
    useAxios<{ id: string; snippet: { title: string } }[]>(url);

  if (loading || error || !data) {
    return <></>;
  }

  return (
    <FormControl fullWidth>
      <Select
        id="category-select"
        value={categoryId}
        className="bg-white"
        onChange={(event: SelectChangeEvent<string>) =>
          changeCategoryId(event.target.value)
        }
      >
        <MenuItem value={'0'}>Category</MenuItem>
        {data.map((category: { id: string; snippet: { title: string } }) => {
          return (
            <MenuItem key={category.id} value={category.id}>
              {category.snippet.title}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
});

CategorySelect.displayName = 'CategorySelect';

const CountrySelect: React.FC<{
  regionCode: string;
  changeRegionCode: (newCode: string) => void;
}> = React.memo(({ regionCode, changeRegionCode }) => {
  const url = `${BASE_URL}/countries/codes`;
  const { loading, error, data } =
    useAxios<{ name: string; cca2: string }[]>(url);

  if (loading || error || !data) {
    return <></>;
  }

  return (
    <FormControl fullWidth>
      <Select
        id="country-select"
        value={regionCode}
        className="bg-white"
        onChange={(event: SelectChangeEvent<string>) =>
          changeRegionCode(event.target.value)
        }
      >
        {data.map((country: { name: string; cca2: string }) => {
          return (
            <MenuItem key={country.cca2} value={country.cca2}>
              {country.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
});

CountrySelect.displayName = 'CountrySelect';

export type YouTubeVideo = {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      [key: string]: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
};

const YouTubeTrending: React.FC<{
  regionCode: string;
  videoCategoryId: string;
}> = React.memo(
  ({
    regionCode,
    videoCategoryId,
  }: {
    regionCode: string;
    videoCategoryId: string;
  }) => {
    const url = `${BASE_URL}/google/youtube/trending?regionCode=${regionCode}&videoCategoryId=${videoCategoryId}`;
    const { loading, error, data, refetch } = useAxios<YouTubeVideo[]>(url);

    useEffect(() => {
      refetch();
    }, [regionCode, videoCategoryId, refetch]);

    return (
      <Loading loading={loading} error={error} data={data}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4 md:gap-8">
          {(data || []).map((video: YouTubeVideo) => {
            return (
              <div key={video.id} className="w-full flex flex-col gap-2">
                <div className="rounded-xl overflow-hidden">
                  <Link
                    href={`https://www.youtube.com/watch?v=${video.id}&ab_channel=${video.snippet.channelId}`}
                    target="_blank"
                  >
                    <Image
                      src={video.snippet.thumbnails.high.url}
                      alt={video.snippet.title}
                      width={video.snippet.thumbnails.high.width}
                      height={video.snippet.thumbnails.high.height}
                    />
                  </Link>
                </div>
                <h2 className="font-medium truncate">
                  <Link
                    href={`https://www.youtube.com/watch?v=${video.id}&ab_channel=${video.snippet.channelId}`}
                    target="_blank"
                  >
                    {video.snippet.title}
                  </Link>
                </h2>
                <p className="text-gray-300 truncate">
                  <Link
                    href={`https://www.youtube.com/channel/${video.snippet.channelId}`}
                    target="_blank"
                  >
                    {video.snippet.channelTitle}
                  </Link>
                </p>
              </div>
            );
          })}
        </div>
      </Loading>
    );
  }
);

YouTubeTrending.displayName = 'YouTubeTrending';

export const YouTubeTrendingTemplate: React.FC = () => {
  const [regionCode, setRegionCode] = useState('US');
  const [videoCategoryId, setVideoCategoryId] = useState('0');

  return (
    <Background backgroundImage={youtube}>
      <div className="min-h-screen flex flex-col">
        <Navbar icon={<YouTube />} appName="YouTube Trending" />
        <main className="grow">
          <Container>
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <CategorySelect
                  categoryId={videoCategoryId}
                  changeCategoryId={(newVideoCategoryId: string) =>
                    setVideoCategoryId(newVideoCategoryId)
                  }
                />
                <CountrySelect
                  regionCode={regionCode}
                  changeRegionCode={(newCode: string) => setRegionCode(newCode)}
                />
              </div>
              <YouTubeTrending
                videoCategoryId={videoCategoryId}
                regionCode={regionCode}
              />
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

YouTubeTrendingTemplate.displayName = 'YouTubeTrendingTemplate';

export default YouTubeTrendingTemplate;
