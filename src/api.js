export const addEvent = (event) => {
  return fetch("http://localhost:3004/events", {
    method: "POST",
    body: JSON.stringify(event),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getEvents = () => {
  return fetch("http://localhost:3004/events", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());
};
