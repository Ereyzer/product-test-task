import { testFunc } from './filterTest';

export function filterItems(items, filter) {
  console.log(items, items);
  if (filter === '') return items;
  return items.filter(({ name }) => testFunc(filter, name));
}
