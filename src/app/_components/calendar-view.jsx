"use client";

import { useMemo, useState, useEffect } from "react";
import { portalSupabase } from "@/lib/supabase";

function getMonthMatrix(year, month) {
  // month: 0-11
  const firstOfMonth = new Date(year, month, 1);
  const startDay = firstOfMonth.getDay(); // 0 (Sun) - 6 (Sat)
  // first cell date (may belong to previous month)
  const startDate = new Date(year, month, 1 - startDay);
  const weeks = [];
  for (let week = 0; week < 6; week++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + week * 7 + d);
      days.push(date);
    }
    weeks.push(days);
  }
  return weeks;
}

export default function CalendarView() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const today = new Date();
  const [focus, setFocus] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  useEffect(() => {
    async function fetchEvents() {
      try {
        const { data, error } = await portalSupabase
          .from("events")
          .select(`*, created_by_user:users!created_by(group_name)`);

        console.log("Data", data);
        if (error) throw error;
        setEvents(data || []);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    }
    fetchEvents();
  }, []);

  const year = focus.getFullYear();
  const month = focus.getMonth(); // 0-11

  const weeks = useMemo(() => getMonthMatrix(year, month), [year, month]);

  // helper function to get events for a specific date
  const getEventsForDate = (date) => {
    return events.filter((event) => {
      const eventDate = new Date(event.start_time);
      return eventDate.toDateString() === date.toDateString();
    });
  };

  function go(delta) {
    const next = new Date(year, month + delta, 1);
    setFocus(next);
  }

  function goToday() {
    setFocus(new Date(today.getFullYear(), today.getMonth(), 1));
  }

  const monthName = focus.toLocaleString(undefined, { month: "long" });

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setSelectedEvent(null);
  };

  return (
    <div className="mx-auto p-4">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-gray-500">Month</div>
          <div className="text-2xl font-semibold">
            {monthName} {year}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Previous month"
            onClick={() => go(-1)}
            className="px-3 py-2 bg-white border rounded-md shadow-sm hover:bg-gray-50"
          >
            ←
          </button>
          <button
            aria-label="Today"
            onClick={goToday}
            className="px-3 py-2 bg-white border rounded-md shadow-sm hover:bg-gray-50"
          >
            Today
          </button>
          <button
            aria-label="Next month"
            onClick={() => go(1)}
            className="px-3 py-2 bg-white border rounded-md shadow-sm hover:bg-gray-50"
          >
            →
          </button>
        </div>
      </div>

      {/* Calendar grid */}
      <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
        {/* Weekday headers */}
        <div className="grid grid-cols-7 bg-gray-50 text-center text-sm font-medium text-gray-600 border-b">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="py-3">
              {d}
            </div>
          ))}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {weeks.flat().map((date) => {
            const isCurrentMonth = date.getMonth() === month;
            const isToday = date.toDateString() === today.toDateString();
            const dayEvents = getEventsForDate(date);

            return (
              <div
                key={date.toISOString()}
                className={`bg-white min-h-[96px] p-2 text-sm flex flex-col`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-xs font-medium ${
                      isCurrentMonth ? "text-gray-800" : "text-gray-400"
                    } py-0.5`}
                  >
                    {date.getDate()}
                  </span>
                  {isToday && (
                    <span className="text-xs text-white bg-indigo-600 rounded-full px-2 py-0.5">
                      Today
                    </span>
                  )}
                </div>

                {/* Events for this date */}
                <div className="mt-2 flex-1 space-y-1">
                  {isCurrentMonth && dayEvents.length > 0 ? (
                    <>
                      {dayEvents.map((event, index) => (
                        <div
                          key={event.id || index}
                          className="bg-blue-100/60 text-blue-500 rounded-md px-2 py-1 border-2 border-blue-200 flex items-center w-full cursor-pointer hover:bg-blue-100/80 transition-colors"
                          onClick={() => handleEventClick(event)}
                        >
                          <p className="truncate flex-1 pr-2 text-xs">
                            {event.title}
                          </p>
                          <p className="text-xs text-right flex-shrink-0">
                            {new Date(event.start_time).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      ))}
                    </>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Event Dialog/Modal */}
      {showDialog && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            {/* Dialog Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="text-lg font-semibold text-gray-900">
                Event Details
              </div>
              <button
                onClick={closeDialog}
                className="text-gray-400 hover:text-gray-600 text-xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Dialog Content */}
            <div className="p-4 space-y-4">
              <div>
                <span className="font-bold text-gray-900 mb-1">Title</span>
                <p className="text-gray-700">{selectedEvent.title}</p>
              </div>

              <div>
                <span className="font-bold text-gray-900 mb-1">
                  Date & Time
                </span>
                <p className="text-gray-700">
                  {new Date(selectedEvent.start_time).toLocaleDateString(
                    "en-US",
                    {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}{" "}
                  at{" "}
                  {new Date(selectedEvent.start_time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  to{" "}
                  {new Date(selectedEvent.end_time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              <div>
                <span className="font-bold text-gray-900 mb-1">Host</span>
                <p className="text-gray-700">
                  {selectedEvent.created_by_user.group_name}
                </p>
              </div>
              <div>
                <span className="font-bold text-gray-900 mb-1">Location</span>
                <p className="text-gray-700">{selectedEvent.location}</p>
              </div>
              <div>
                <span className="font-bold text-gray-900 mb-1">
                  Description
                </span>
                <p className="text-gray-700">{selectedEvent.description}</p>
              </div>
            </div>

            {/* Dialog Footer */}
            <div className="flex justify-end p-4 border-t">
              <button
                onClick={closeDialog}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
