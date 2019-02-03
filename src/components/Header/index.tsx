import React from "react";
import { ThemeType } from "../../types/data/ui";

import "./index.css";

interface IProps {
  theme: ThemeType;
  updateTheme: (theme: ThemeType) => void;
}

const Header = (props: IProps) => (
  <header>
    <div>Hacker News Reader</div>
    <div>
      <label>
        <input
          type="checkbox"
          checked={props.theme === "dark"}
          onChange={() =>
            props.updateTheme(props.theme === "dark" ? "light" : "dark")
          }
        />
        Dark Mode
      </label>
    </div>
  </header>
);

export default Header;