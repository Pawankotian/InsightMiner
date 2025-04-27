import Head from 'next/head';
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({
  children,
  title = 'InsightMiner - AI-Powered Creative Insights',
  description = 'Generate creative, relatable, and emotionally-driven insights from Cannes Lions-winning advertising campaigns.'
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container py-8">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout; 