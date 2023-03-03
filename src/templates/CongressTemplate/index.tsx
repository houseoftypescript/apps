import congress from '@/assets/background/congress.jpeg';
import Background from '@/components/organisms/Background';
import Breadcrumbs from '@/components/organisms/Breadcrumbs';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import PolicyIcon from '@mui/icons-material/Policy';
import Container from '@mui/material/Container';
import Link from 'next/link';

export const CongressTemplate: React.FC = () => {
  const startAt = 80;
  const endAt = 118;
  const congresses = [...Array(endAt - startAt + 1).keys()]
    .map((i) => i + startAt)
    .reverse();

  return (
    <Background backgroundImage={congress}>
      <div className="min-h-screen flex flex-col">
        <Navbar icon={<PolicyIcon />} appName="usa" />
        <main className="grow">
          <Container>
            <div className="flex flex-col gap-4 md:gap-8">
              <Breadcrumbs />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-8">
                {congresses.map((congress) => {
                  return (
                    <div key={congress} className="col-span-1">
                      <Link href={`/usa/congress/${congress}/members`}>
                        <div className="flex items-center justify-center bg-white text-gray-900 rounded py-4">
                          {congress}
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

export default CongressTemplate;
