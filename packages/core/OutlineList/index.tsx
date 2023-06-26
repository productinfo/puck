import styles from "./styles.module.css";
import getClassNameFactory from "../lib/get-class-name-factory";
import { ReactNode, SyntheticEvent } from "react";

const getClassName = getClassNameFactory("OutlineList", styles);

export const OutlineList = ({ children }: { children: ReactNode }) => {
  return <ul className={getClassName()}>{children}</ul>;
};

// eslint-disable-next-line react/display-name
OutlineList.Clickable = ({ children }: { children: ReactNode }) => (
  <div className={getClassName("clickableItem")}>{children}</div>
);

// eslint-disable-next-line react/display-name
OutlineList.Item = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: (e: SyntheticEvent) => void;
}) => {
  return (
    <li
      className={onClick ? getClassName("clickableItem") : ""}
      onClick={onClick}
    >
      {children}
    </li>
  );
};
