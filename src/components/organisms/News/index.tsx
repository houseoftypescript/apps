import Container from '@mui/material/Container';
import Link from 'next/link';

export type Article = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type NewsProps = {
  loading: boolean;
  error: Error | null;
  data: Article[];
};

export const News: React.FC<NewsProps> = ({
  loading = false,
  error = null,
  data = [],
}) => {
  if (loading) {
    return (
      <div className="py-8 flex items-center justify-center">
        <span className="uppercase text-white">Loading</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 flex items-center justify-center">
        <span className="uppercase text-white">Error</span>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="py-8 flex items-center justify-center">
        <span className="uppercase text-white">No Data</span>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data
          .filter(({ urlToImage }) => urlToImage)
          .map(({ source, url, urlToImage, title, publishedAt }) => {
            const [date] = publishedAt.split('T');
            return (
              <div key={`article-${url}`} className="col-span-1">
                <Link href={url} target="_blank">
                  <div
                    className={`relative rounded border border-black bg-cover bg-center pb-[50%] md:pb-[100%]`}
                    style={{
                      backgroundImage: `url(${urlToImage})`,
                    }}
                  >
                    <div className="absolute w-full h-full text-gray-100 bg-gray-900/75 p-8 overflow-hidden flex items-center">
                      <div className="flex flex-col gap-2">
                        {(source.name || '').length > 0 ? (
                          <p className="text-sm text-gray-100">
                            {source.name || ''} - {date}
                          </p>
                        ) : (
                          <></>
                        )}
                        <h2 className="font-medium">{title}</h2>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

News.displayName = 'News';

export default News;
