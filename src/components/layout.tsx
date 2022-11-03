import Head from "next/head";

export const Layout: React.FC<
  React.PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="flex justify-center">
        <main className="w-[32rem] mx-6 mt-16">{children}</main>
      </div>
    </>
  );
};
