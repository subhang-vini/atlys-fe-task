export default [
  {
    name: "Function 1",
    modalKey: "function1",
    nextModalKey: "function2",
    previousModalKey: null,
  },
  {
    name: "Function 2",
    modalKey: "function2",
    order: 2,
    nextModalKey: "function4",
    previousModalKey: "function1",
  },
  {
    name: "Function 3",
    modalKey: "function3",
    order: 3,
    nextModalKey: null,
    previousModalKey: "function5",
  },
  {
    name: "Function 4",
    modalKey: "function4",
    order: 4,
    nextModalKey: "function5",
    previousModalKey: "function2",
  },
  {
    name: "Function 5",
    modalKey: "function5",
    order: 5,
    nextModalKey: "function3",
    previousModalKey: "function4",
  },
];
