import { testFunc } from './filterTest';

export function filterItems(items, filter) {
  if (filter === '') return items;
  return Object.values(items).filter(({ name }) => testFunc(filter, name));
}
