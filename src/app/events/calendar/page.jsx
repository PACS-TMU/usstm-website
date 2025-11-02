import Header from "@/app/_components/general/header";
import UnderConstruction from "@/app/_components/general/under-construction";
import CalendarView from "@/app/_components/calendar-view";

export default function Calendar() {
  return (
    <section>
      {/*<Header title={`Calendar`} />*/}
      <div className="main">
        <CalendarView />
      </div>
    </section>
  );
}
