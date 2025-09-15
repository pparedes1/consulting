import React from "react";

export default function BookTime() {
  // For a real integration, see Google Calendar API docs or embed a calendar UI
  return (
    <section>
      <h2>Book Time</h2>
      <p>
        Select a time slot to book a session with me. (Integration with Google Calendar coming soon!)
      </p>
      {/* Placeholder - embed Google Calendar or booking widget here */}
      <iframe
        src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=UTC"
        style={{ border: 0, width: "100%", height: 400 }}
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </section>
  );
}
