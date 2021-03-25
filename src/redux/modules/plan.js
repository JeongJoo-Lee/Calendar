// Actions
const LOAD = "plan/LOAD";
const ADD = "plan/ADD";

const initialState = {
  list: [
    { title: "event 1", date: "2021-03-01" },
    { title: "event 2", date: "2021-03-02" },
  ],
};

// Action Creators

export const loadPlan = (list) => {
  return { type: LOAD, list };
};

export const addPlan = (title, date) => {
  return { type: ADD, title, date };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "plan/LOAD": {
      return state;
    }

    case "plan/ADD": {
      const new_plan_list = [...state.list, action.title, action.date];

      return { list: new_plan_list };
    }
    default:
      return state;
  }
}
