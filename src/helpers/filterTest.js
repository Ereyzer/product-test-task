export function testFunc(filter, name) {
  const test = name.slice(0, filter.length);
  return filter.toLowerCase() === test.toLowerCase();
}
