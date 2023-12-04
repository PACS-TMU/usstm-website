import Parallax from "./_components/homepage/parallax"
import Pillars from "./_components/homepage/pillars"
import Land from "./_components/homepage/land"
import USSTM from "./_components/homepage/usstm"
import FAQ from "./_components/homepage/faq"

export default function Home() {
  return (
    <>
      <Parallax />
      <USSTM />
      <Pillars />
      <Land />
      <FAQ />
    </>
  )
}
