import { Action, TodoReducerState } from "../utils/models";

const initialData: TodoReducerState = {
  list: [],
  og: [],
  count: 0,
};

const todoReducers = (state = initialData, action: Action) => {
  // let count = state.count;
  // let tempState = state.list;
  // let tempOGState = state.og;

  switch (action.type) {
    // case "CHECK_ALL":
    //   tempState = tempState.map((item) => {
    //     let tempItem = Object.assign({}, item);
    //     tempItem.completed = true;
    //     return tempItem;
    //   });

    //   tempOGState = tempOGState.map((item) => {
    //     let tempItem = Object.assign({}, item);
    //     tempItem.completed = true;
    //     return tempItem;
    //   });
    //   return {
    //     ...state,
    //     list: tempState,
    //     og: tempOGState,
    //     count: state.count,
    //   };

    // case "UNCHECK_ALL":
    //   tempState = tempState.map((item) => {
    //     let tempItem = Object.assign({}, item);
    //     tempItem.completed = false;
    //     return tempItem;
    //   });

    //   tempOGState = tempOGState.map((item) => {
    //     let tempItem = Object.assign({}, item);
    //     tempItem.completed = false;
    //     return tempItem;
    //   });

    //   return {
    //     ...state,
    //     list: tempState,
    //     og: tempOGState,
    //     count: state.count,
    //   };

    // case "ADD_TODO":
    //   const { id, text, completed } = action.payload;

    //   ++count;

    //   return {
    //     ...state,
    //     list: [
    //       ...state.list,
    //       {
    //         id: id,
    //         data: text,
    //         completed: completed,
    //       },
    //     ],
    //     og: [
    //       ...state.og,
    //       {
    //         id: id,
    //         data: text,
    //         completed: completed,
    //       },
    //     ],
    //     count: count,
    //   };

    // case "DELETE_TODO":
    //   count = 0;
    //   const newList = tempState.filter(
    //     (element) => element.id !== action.payload.id
    //   );

    //   const ogUpdateList = tempOGState.filter(
    //     (element) => element.id !== action.payload.id
    //   );

    //   newList.map((item) => {
    //     if (item.completed === false) ++count;
    //   });

    //   return {
    //     ...state,
    //     list: newList,
    //     og: ogUpdateList,
    //     count: count,
    //   };

    // case "CHANGE_TODO":
    //   tempState = tempState.map((item) => {
    //     let tempItem = Object.assign({}, item);
    //     if (action.payload.id === tempItem.id) {
    //       tempItem.data = action.payload.text;
    //     }
    //     return tempItem;
    //   });

    //   tempOGState = tempOGState.map((item) => {
    //     let tempItem = Object.assign({}, item);
    //     if (action.payload.id === tempItem.id) {
    //       tempItem.data = action.payload.text;
    //     }
    //     return tempItem;
    //   });

    //   return {
    //     ...state,
    //     list: tempState,
    //     og: tempOGState,
    //   };

    // case "CHECK_TODO":
    //   count = 0;

    //   tempState = tempState.map((item) => {
    //     let tempItem = Object.assign({}, item);
    //     if (action.payload.id === tempItem.id) {
    //       tempItem.completed = true;
    //     }
    //     return tempItem;
    //   });

    //   tempState.map((item) => {
    //     if (item.completed === false) count++;
    //   });

    //   tempOGState = tempOGState.map((item) => {
    //     let tempItem = Object.assign({}, item);
    //     if (action.payload.id === tempItem.id) {
    //       tempItem.completed = true;
    //     }
    //     return tempItem;
    //   });

    //   return {
    //     ...state,
    //     list: tempState,
    //     og: tempOGState,
    //     count: count,
    //   };

    // case "UNCHECK_TODO":
    //   count = 0;

    //   tempState = tempState.map((item) => {
    //     let tempItem = Object.assign({}, item);
    //     if (action.payload.id === tempItem.id) {
    //       tempItem.completed = false;
    //     }
    //     return tempItem;
    //   });

    //   tempState.map((item) => {
    //     if (item.completed === false) count++;
    //   });

    //   tempOGState = tempOGState.map((item) => {
    //     let tempItem = Object.assign({}, item);
    //     if (action.payload.id === tempItem.id) {
    //       tempItem.completed = false;
    //     }
    //     return tempItem;
    //   });

    //   return {
    //     ...state,
    //     list: tempState,
    //     og: tempOGState,
    //     count: count,
    //   };

    // case "CLEAR_TODO":
    //   count = 0;

    //   const clearedList = tempState.filter(
    //     (element) => element.completed === false
    //   );

    //   const clearedOGList = tempOGState.filter(
    //     (element) => element.completed === false
    //   );

    //   tempOGState.map((item) => {
    //     if (item.completed === false) count++;
    //   });

    //   return {
    //     ...state,
    //     list: clearedList,
    //     og: clearedOGList,
    //     count: count,
    //   };

    // case "SHOW_ALL":
    //   count = 0;

    //   const ogSHowAll = tempOGState.filter(
    //     (element) => element.completed === true || element.completed === false
    //   );

    //   tempState.map((item) => {
    //     if (item.completed === false) count++;
    //   });

    //   return {
    //     ...state,
    //     list: ogSHowAll,
    //     count: count,
    //   };

    // case "COMPLETED_TODO":
    //   const completedList = tempOGState.filter(
    //     (element) => element.completed === true
    //   );

    //   count = tempOGState.length - completedList.length;

    //   return {
    //     ...state,
    //     list: completedList,
    //     count: count,
    //   };

    // case "ACTIVE_TODO":
    //   const activeList = tempOGState.filter(
    //     (element) => element.completed === false
    //   );

    //   return {
    //     ...state,
    //     list: activeList,

    //     count: activeList.length,
    //   };

    default:
      return state;
  }
};

export default todoReducers;
