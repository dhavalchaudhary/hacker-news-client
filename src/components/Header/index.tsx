import React from "react";
import { ThemeType } from "../../types/data/ui";
import { InvertColors } from "@material-ui/icons";
import "./index.css";

interface IProps {
  theme: ThemeType;
  updateTheme: (theme: ThemeType) => void;
}

const Header = (props: IProps) => (
  <header>
    <h3 className="header-title">Hacker News Reader</h3>
    <button
      className="header-dark-mode-toggle"
      onClick={() =>
        props.updateTheme(props.theme === "dark" ? "light" : "dark")
      }
    >
      {/* <label> */}
      <InvertColors />
      {/* <input
          type="checkbox"
          checked={props.theme === "dark"}
          onChange={() =>
            props.updateTheme(props.theme === "dark" ? "light" : "dark")
          }
        />
        Dark Mode */}
      {/* </label> */}
    </button>
  </header>
);

export default Header;
