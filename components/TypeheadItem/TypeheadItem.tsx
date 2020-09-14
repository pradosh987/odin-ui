import React from "react";

interface IProps {
  item: any;
  onClick: (value: string) => void;
}

export const TypeHeadItem = ({ item, onClick }: IProps) => {
  return (
    <li
      className="list-group-item list-group-item-action"
      key={item.value}
      onClick={() => onClick(item.value)}
    >
      {item.value}
    </li>
  );
};
