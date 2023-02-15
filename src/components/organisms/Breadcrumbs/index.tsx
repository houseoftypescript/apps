import MUIBreadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Breadcrumbs: React.FC = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const paths: string[] = pathname.split('/');
  return (
    <MUIBreadcrumbs className="text-white">
      {paths.map((path: string, index: number) => {
        if (index === 0) {
          return (
            <Link key={'home'} href="/" className="uppercase">
              Home
            </Link>
          );
        }
        if (index === paths.length - 1) {
          return (
            <p key={path} className="uppercase">
              {path}
            </p>
          );
        }
        return (
          <Link
            key={path}
            href={`/${paths.slice(0, index + 1).join('/')}`}
            className="uppercase"
          >
            {path}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
