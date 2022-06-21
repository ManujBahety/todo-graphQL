type ListItem = {
  // rename to Item
  id: number;
  title: string;
  completed: boolean;
};
type Action = {
  type: string;
  payload: {
    id: number;
    completed: boolean;
    text: string;
  };
};

type TodoReducerState = {
  list: ListItem[];
  og: ListItem[];
  count: number;
};

type Filter = {
  id: number;
  title: string;
  link: string;
};

export type { ListItem, Action, TodoReducerState, Filter };
