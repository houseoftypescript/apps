import Paper from '@mui/material/Paper';
import { ReactNode } from 'react';

export type LoadingProps = {
  loading: boolean;
  error: Error | null;
  data: any;
  children: ReactNode;
};

export const Loading: React.FC<LoadingProps> = ({
  loading = false,
  error = null,
  data = null,
  children = <></>,
}) => {
  if (loading) {
    return (
      <Paper className="p-8">
        <div className="flex items-center justify-center">
          <span className="uppercase">Loading</span>
        </div>
      </Paper>
    );
  }

  if (error) {
    return (
      <Paper className="p-8">
        <div className="flex items-center justify-center">
          <span className="uppercase">{error.message || 'Error'}</span>
        </div>
      </Paper>
    );
  }

  if (!data) {
    return (
      <Paper className="p-8">
        <div className="flex items-center justify-center">
          <span className="uppercase">No Data</span>
        </div>
      </Paper>
    );
  }

  return <>{children}</>;
};

export default Loading;
