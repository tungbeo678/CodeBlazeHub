const initializeArrayWithRange = (end, start = 0) =>
  Array.from({ length: end - start }, (_, i) => i + start);
