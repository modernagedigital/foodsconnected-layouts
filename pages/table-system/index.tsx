import Head from "next/head";
import { AppShell, PageTitle, DataTable } from "components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AppShell>
          <div className="space-y-2xs-xs">
            <PageTitle title="Table system" />
            <DataTable />
          </div>
        </AppShell>
      </main>
    </>
  );
}
