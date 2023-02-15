import usa from '@/assets/background/usa.jpeg';
import Background from '@/components/organisms/Background';
import Breadcrumbs from '@/components/organisms/Breadcrumbs';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import PolicyIcon from '@mui/icons-material/Policy';
import Container from '@mui/material/Container';

export const StatesTemplate: React.FC = () => {
  return (
    <Background backgroundImage={usa}>
      <div className="min-h-screen flex flex-col">
        <Navbar icon={<PolicyIcon />} appName="usa" />
        <main className="grow">
          <Container>
            <div className="flex flex-col gap-4 md:gap-8">
              <Breadcrumbs />
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    </Background>
  );
};

export default StatesTemplate;
