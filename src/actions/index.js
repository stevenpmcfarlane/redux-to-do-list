export const ADD_TASK = "ADD_TASK";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const DELETE_COMPLETED_TASK = "DELETE_COMPLETED_TASK";

export function addTask(newTask) {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
}

export function toggleCompleted(id) {
  return { type: TOGGLE_COMPLETED, id };
}

export function deleteCompletedTask(id) {
  return { type: DELETE_COMPLETED_TASK, id };
}
