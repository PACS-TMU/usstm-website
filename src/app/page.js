import Parallax from "./_components/parallax";
import Pillars from "./_components/pillars";
import Land from "./_components/land";
import USSTM from "./_components/usstm";
import FAQ from "./_components/faq";

export const metadata = {
  title: "Home - USSTM",
  description:
    "The Undergraduate Science Society of Toronto Metropolitan homepage. You can find information about our organization, our events, our services, and more, here!",
};

export default function Home() {
  return (
    <>
      <Parallax />
      <USSTM />
      <Pillars />
      <Land />
      <FAQ />
    </>
  );
}
