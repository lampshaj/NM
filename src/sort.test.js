import * as s from './helpers';

test('test sortItems function', () => {
  let c1 = {
    name: "Aaron",
    speed: "50"
  }
  let c2 = {
    name: "Jerry",
    speed: "1000"
  }
  let c3 = {
    name: "Tom",
    speed: "100"
  }
  let items = [c3, c2, c1];
  let sorted = ["Aaron", "Jerry", "Tom"];
  let returnList = [];
  returnList = s.sortItems(items);
  expect(returnList[0]).toEqual(sorted[0]);
});
