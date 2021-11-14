const functions = require("./functions");
test("add 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("add 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

//TODO for array and object must be used toEqual

test("usesr should be milan", () => {
  expect(functions.createuser()).toEqual({
    firstName: "milan",
    lastName: "mialn",
  });
});

test("should be under 1600", () => {
  const load = 700;
  const load2 = 500;
  expect(load + load2).toBeLessThan(1600);
});

//TODO Regex
test("there is no i in team", () => {
  expect("team").not.toMatch(/I/);
});

//TODO Array
test("admin should be in usernames", () => {
  usernames = ["milan", "katira", "admin"];
  expect(usernames).toContain("admin");
});

//TODO ASYNC DATA FROM API

test("user fatched name check", () => {
  expect.assertions(1);
  return functions.fetchUser()
  .then(data => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

test('User fetched name check', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
  });
