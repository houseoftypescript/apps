import maps from '@/assets/background/maps.jpeg';
import Navbar from '@/components/organisms/Navbar';
import { Map } from '@mui/icons-material';
import Container from '@mui/material/Container';

export const MapsTemplate: React.FC = () => {
  return (
    <div
      className="bg-fixed bg-center bg-cover text-white"
      style={{ backgroundImage: `url(${maps.src})` }}
    >
      <div className="min-h-screen bg-gray-900/75">
        <Navbar icon={<Map />} appName="maps" />
        <main className="pb-8">
          <Container></Container>
        </main>
      </div>
    </div>
  );
};

export default MapsTemplate;
