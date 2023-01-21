import { useMutation } from "@tanstack/react-query";
import { eventKeys } from "./event";

export default function Add() {
  const mutation = useMutation({
    mutationKey: eventKeys.add(),
  });

  function getFormattedDate() {
    var date = new Date();
    var str =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();

    return str;
  }

  const handleSubmit = (tag) => {
    const payload = {
      type: tag,
      timestamp: getFormattedDate(),
    };

    mutation.mutate(payload);
  };

  return (
    <div>
      <h2>Record Event</h2>
      <button onClick={(e) => handleSubmit("EVENT_1")}>Event 1</button>{" "}
      <button onClick={(e) => handleSubmit("EVENT_2")}>Event 2</button>
    </div>
  );
}
