import React, { memo } from "react";
import { Filter } from "../utils/models";
import { filters } from "../utils/constants";
import FilterButtons from "./filterButtons";

type FooterProps = {
  count: number;
  activeFilter: Filter;
  setActiveFilter: Function;
};

const Footer = memo((props: FooterProps) => {
  const { count, activeFilter, setActiveFilter } = props;

  const handleClear = () => {};

  const activateButton = (button: Filter) => {
    setActiveFilter(button);
  };

  const onFiltersClick = (button: Filter) => {
    const { title } = button;
    switch (title) {
      case "All":
        activateButton(button);
        break;
      case "Active":
        activateButton(button);
        break;
      case "Completed":
        activateButton(button);
        break;
    }
  };

  return (
    <footer className="text-center">
      <div className="grid grid-cols-[150px_350px_20px]  shadow-xl p-2 px-5 bg-white  box-border border-2 relative">
        <div className="flex gap-2 items-center">
          <strong className="">{count}</strong>
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
