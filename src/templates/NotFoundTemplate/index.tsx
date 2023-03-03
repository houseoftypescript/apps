import { Button } from '@mui/material';
import Link from 'next/link';

export const NotFoundTemplate: React.FC = () => {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="uppercase text-9xl font-bold">404</h1>
      <p className="uppercase text-3xl">Page Not Found</p>
      <Link href="/">
        <Button variant="contained">Back to Home</Button>
      </Link>
    </main>
  );
};

export default NotFoundTemplate;
