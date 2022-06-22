import React, { memo, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import cross from "../assets/closee.png";
import { ListItem } from "../utils/models";

type TodoProps = {
  list: ListItem;
};

const UpdateTodoQuery = gql`
  mutation UpdateTodo($id: ID!, $input: UpdateTodoInput!) {
    updateTodo(id: $id, input: $input) {
      id
      title
      completed
    }
  }
`;

const DeleteTodoQuery = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;

const Todo = memo((props: TodoProps) => {
  const { title, id, completed } = props.list;

  const [toggle, setToggle] = useState<boolean>(true);
  const [text, setText] = useState<string>(title);
  const [isCompleted, setisCompleted] = useState<boolean>(false);
  const [updateTodo] = useMutation(UpdateTodoQuery);
  const [deleteTodo] = useMutation(DeleteTodoQuery);

  const toggleInput = (): void => {
    setToggle(false);
  };

  const handleBlur = (): void => {
    setToggle(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    updateTodo({
      variables: { id: id, input: { title: title, completed: isCompleted } },
    });
  };

  const handleCheck = (): void => {
    setisCompleted(!isCompleted);
    updateTodo({
      variables: { id: id, input: { title: title, completed: isCompleted } },
    });
  };

  return (
    <div>
      <ul>
        <div className="grid grid-cols-[50px_550px_20px] relative shadow-xl bg-white p-5 box-border border-2 ">
          <div className="">
            <input
              className="w-7 h-7 focus:ring-1 bg-gray-100 border-r-indigo-500"
              type="checkbox"
              checked={completed}
              name={title}
              onChange={handleCheck}
            ></input>
          </div>
          <div>
            <label className="bg-white col-span-3 text-2xl italic">
              {completed ? (
                <p className=" transition-all delay-50 line-through decoration-4 font-medium text-mercury-600">
                  {text}
                </p>
              ) : toggle ? (
                <p className="font-medium" onDoubleClick={toggleInput}>
                  {text}
                </p>
              ) : (
                <input
                  className="italic font-medium text-xl"
                  type="text"
                  onBlur={handleBlur}
                  value={text}
                  onChange={handleChange}
                />
              )}
            </label>
          </div>

          <div className="flex items-center">
            <img
              src={cross}
              alt="Cross Icon"
              className=" hover:cursor-pointer"
              onClick={() => {
                deleteTodo({ variables: { id: id } });
              }}
            ></img>
          </div>
        </div>
      </ul>
    </div>
  );
});

export default Todo;
