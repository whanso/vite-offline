import { useQuery } from "@tanstack/react-query";
import { getEvents } from "./api";
import { eventKeys } from "./event";

export default function List() {
  const { data } = useQuery({
    queryKey: eventKeys.list(),
    queryFn: getEvents,
  });

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {data &&
          data.length &&
          data.map((event) => (
            <li key={event.id}>
              {event.timestamp}: {event.type}
            </li>
          ))}
      </ul>
    </div>
  );
}
