import * as s from './helpers';

test('test sortItems function', () => {
  const c1 = {
    name: "Aaron",
    speed: "50"
  }
  const c2 = {
    name: "Jerry",
    speed: "1000"
  }
  const c3 = {
    name: "Tom",
    speed: "100"
  }
  const items = [c3, c2, c1];
  const sorted = ["Aaron", "Jerry", "Tom"];
  const result = s.sortItems(items);
  expect(result).toEqual(sorted);
});
