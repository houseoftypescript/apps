import content from '@/content';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useState } from 'react';

export type NavbarProps = {
  appName: string;
};

export const Navbar: React.FC<NavbarProps> = ({ appName = '' }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="py-8">
      <Container>
        <div className="flex justify-between text-white">
          <h1 className="text-4xl uppercase">
            <Link href="/">{appName}</Link>
          </h1>
          <div>
            <Button onClick={handleClick} className="p-0 text-white">
              <MenuIcon fontSize="large" />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {content.apps.map(({ id, href, title }) => {
                return (
                  <MenuItem key={id}>
                    <Link href={href} className="capitalize">
                      {title}
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
