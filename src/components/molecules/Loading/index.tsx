import { ReactNode } from 'react';

export type LoadingProps = {
  loading: boolean;
  error: Error | null;
  children: ReactNode;
};

export const Loading: React.FC<LoadingProps> = ({
  loading = false,
  error = null,
  children = <></>,
}) => {
  if (loading) {
    return (
      <div className="border p-8 rounded">
        <div className="flex items-center justify-center">
          <span className="uppercase">Loading</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="border p-8 rounded">
        <div className="flex items-center justify-center">
          <span className="uppercase">{error.message || 'Error'}</span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default Loading;
