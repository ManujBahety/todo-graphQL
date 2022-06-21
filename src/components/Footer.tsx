import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../utils/models";
import { filters } from "../utils/constants";

import FilterButtons from "./filterButtons";

const Footer = memo(() => {
  const dispatch = useDispatch();
  // const count: number = useSelector(
  //   (state: RootState) => state.todoReducers.count
  // );
  const [activeFilter, setActiveFilter] = useState<Filter>(filters[0]);

  const handleComplete = () => {
    // dispatch(CompletedTodo());
  };

  const handleActive = () => {
    // dispatch(ActiveTodo());
  };

  const handleAll = () => {
    // dispatch(AllTodo());
  };

  const handleClear = () => {
    // dispatch(ClearMarked());
  };

  const activateButton = (button: Filter) => {
    setActiveFilter(button);
  };

  const onFiltersClick = (button: Filter) => {
    const { title } = button;
    switch (title) {
      case "All":
        activateButton(button);
        handleAll();
        break;
      case "Active":
        activateButton(button);
        handleActive();
        break;
      case "Completed":
        activateButton(button);
        handleComplete();
        break;
    }
  };

  return (
    <footer className="text-center">
      <div className="grid grid-cols-[150px_350px_20px]  shadow-xl p-2 px-5 bg-white  box-border border-2 relative">
        <div className="flex gap-2 items-center">
          <strong className="">1</strong>
          <span className="">Items left</span>
        </div>

        <div className="flex gap-4 items-center">
          {filters.map((button: Filter) => {
            const { id } = button;
            const isActive = id === activeFilter.id;
            return (
              <FilterButtons
                key={id}
                button={button}
                isActive={isActive}
                onFiltersClick={onFiltersClick}
              />
            );
          })}
        </div>

        <div className="flex hover:underline w-28 items-center justify-end">
          <button className="" onClick={handleClear}>
            Clear Selection
          </button>
        </div>
      </div>
      <p className="mt-12 text-sm">Double-click to edit a todo</p>
      <p className="text-sm">Created by Manuj Bahety</p>
    </footer>
  );
});

export default Footer;
