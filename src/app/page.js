import Parallax from "./_components/parallax";
import Pillars from "./_components/pillars";
import Land from "./_components/land";
import USSTM from "./_components/usstm";
import FAQ from "./_components/faq";
import Head from "next/head";

export const metadata = {
  title: "Home - USSTM",
  description:
    "The Undergraduate Science Society of Toronto Metropolitan homepage. You can find information about our organization, our events, our services, and more, here!",
};

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:url" content="Canonical link preview URL" />
      </Head>
      <Parallax />
      <USSTM />
      <Pillars />
      <Land />
      <FAQ />
    </>
  );
}
