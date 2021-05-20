import React from "react";
import {
  ADD_TASK,
  TOGGLE_COMPLETED,
  DELETE_COMPLETED_TASK,
} from "../actions/index";

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      console.log(state, action);
      return {
        tasks: [...state.tasks, { id: Date.now(), task: action.payload }],
      };
    case TOGGLE_COMPLETED:
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === action.id) {
            task.completed = !task.completed;
          }
          return task;
        }),
      };
    case DELETE_COMPLETED_TASK:
      return {
        tasks: state.tasks.filter((task) => {
          return task.id !== action.id;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
