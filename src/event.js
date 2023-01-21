export const eventKeys = {
  all: () => ["event"],
  list: () => [...eventKeys.all(), "list"],
  add: () => [...eventKeys.all(), "add"],
};
