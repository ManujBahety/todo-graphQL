import React, { memo, ChangeEvent, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import Footer from "./Footer";
import Todo from "./Todo";

const TodoListQuery = gql`
  query todos($options: PageQueryOptions) {
    todos(options: $options) {
      data {
        id
        title
        completed
      }
    }
  }
`;

const AddTodoQuery = gql`
  mutation CreateTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      title
      completed
    }
  }
`;

const Header: React.FC = memo(() => {
  const { data, refetch, loading } = useQuery(TodoListQuery, {
    variables: {
      options: { slice: { limit: 4 }, sort: { order: "DESC", field: "id" } },
    },
  });
  const [addTodo] = useMutation(AddTodoQuery);

  console.log("data=", data);

  const [inputData, setInputData] = useState<string>("");
  const [isChecked, setisChecked] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTodo({ variables: { input: { title: inputData, completed: false } } });
    setInputData("");
    // refetch();
  };

  const handleCheck = (): void => {
    setisChecked(!isChecked);
    // Have to write the logic
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };

  const renderFooter = () => {
    if (data.todos.data.length > 0) return <Footer />;
  };

  return (
    <div className="">
      <h1 className="text-9xl text-center text-myred-500">todos</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="w-full h-full px-5 gap-5 flex  border-2 bg-white shadow-xl py-5 mt-5">
          <input
            className="w-7 h-7"
            type="checkbox"
            name="selectAll"
            onChange={handleCheck}
          ></input>

          <input
            className="w-[600px] text-3xl  italic"
            type="text"
            name="name"
            placeholder="What needs to be done?"
            value={inputData}
            onChange={handleInput}
          />
        </div>
      </form>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          data.todos.data.map((element: any) => {
            return <Todo key={element.id} list={element} />;
          })
        )}
      </div>
      {loading ? <div></div> : renderFooter()}
    </div>
  );
});

export default Header;
