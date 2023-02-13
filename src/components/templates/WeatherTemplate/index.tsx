import weather from '@/assets/background/weather.jpeg';
import Navbar from '@/components/organisms/Navbar';
import { BASE_URL } from '@/environments';
import useAxios from '@/hooks/use-axios';
import { Cloud } from '@mui/icons-material';
import { Container } from '@mui/material';
import { NextPage } from 'next';

const Weather: React.FC<{ query: string }> = ({ query }) => {
  const { loading, error, data } = useAxios<{
    name: string;
    country: string;
    main: string;
    description: string;
    temperature: number;
    maxTemperature: number;
    minTemperature: number;
  }>(`${BASE_URL}/weather?query=${encodeURIComponent(query)}`);

  if (loading) {
    return (
      <div className="border p-8 rounded">
        <div className="flex items-center justify-center">
          <span className="uppercase">{query} - Loading</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="border p-8 rounded">
        <div className="flex items-center justify-center">
          <span className="uppercase">
            {query} - {error.message || 'Error'}
          </span>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="border p-8 rounded">
        <div className="flex items-center justify-center">
          <span className="uppercase">{query} - No Data</span>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-gray-900 p-8 rounded bg-gray-900/75 text-gray-100">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center text-2xl">
          <h2 className="font-medium">
            {data.name}, {data.country}
          </h2>
          <h2 className="font-bold">{data.temperature}&#176;C</h2>
        </div>
        <div className="flex justify-between items-center text-gray-300">
          <p>{data.main}</p>
          <p>{data.minTemperature}&#176;C</p>
        </div>
        <div className="flex justify-between items-center text-gray-300">
          <p className="capitalize">{data.description}</p>
          <p>{data.maxTemperature}&#176;C</p>
        </div>
      </div>
    </div>
  );
};

export const WeatherTemplate: NextPage = () => {
  return (
    <div
      className="bg-fixed bg-center bg-cover text-white"
      style={{ backgroundImage: `url(${weather.src})` }}
    >
      <div className="min-h-screen bg-gray-900/75">
        <Navbar icon={<Cloud />} appName="weather" />
        <main className="pb-8">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-1">
                <Weather query="ho chi minh" />
              </div>
              <div className="col-span-1">
                <Weather query="hanoi" />
              </div>
              <div className="col-span-1">
                <Weather query="singapore" />
              </div>
              <div className="col-span-1">
                <Weather query="seoul" />
              </div>
              <div className="col-span-1">
                <Weather query="sydney" />
              </div>
              <div className="col-span-1">
                <Weather query="boston" />
              </div>
              <div className="col-span-1">
                <Weather query="new york" />
              </div>
              <div className="col-span-1">
                <Weather query="london" />
              </div>
              <div className="col-span-1">
                <Weather query="frankfurt am main" />
              </div>
              <div className="col-span-1">
                <Weather query="helsinki" />
              </div>
            </div>
          </Container>
        </main>
      </div>
    </div>
  );
};

export default WeatherTemplate;
