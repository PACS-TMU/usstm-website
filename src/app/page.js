import Parallax from "./_components/parallax"
import Pillars from "./_components/pillars"
import Land from "./_components/land"
import USSTM from "./_components/usstm"
import FAQ from "./_components/faq"

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
