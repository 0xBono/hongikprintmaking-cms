import { GetServerSideProps } from 'next';
import { ServerResponse } from 'http';

const index = () => {};

const redirect = (res: ServerResponse, destination: string, statusCode = 302) => {
  if (res) {
    res.writeHead(statusCode, { Location: destination });
    res.end();
  }
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const isServer = typeof window !== 'undefined';

  const hasToken = isServer ?? localStorage.getItem('hongik-user-token');

  if (res && hasToken) {
    redirect(res, '/workspace');
  } else {
    redirect(res, '/auth');
  }

  return {
    props: {},
  };
};

export default index;
