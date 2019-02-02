import React, { Component } from "react";
import { CollectionType } from "../../types/data/items";
import { allCollections } from "../../constants/data";
import "./index.css";

interface IProps {
  collections: Array<CollectionType>;
  onAddCollection: (collectionId: CollectionType) => void;
  onRemoveCollection: (collectionId: CollectionType) => void;
}

class Filterbar extends Component<IProps> {
  render() {
    return (
      <div className="filterbar">
        Currently Showing -{" "}
        <ul className="filter-options-wrapper">
          {allCollections.map(i => {
            const isSelected = this.props.collections.includes(i);
            return (
              <li
                className={`filter-options ${isSelected ? "selected" : ""}`}
                onClick={() =>
                  isSelected
                    ? this.props.onRemoveCollection(i)
                    : this.props.onAddCollection(i)
                }
              >
                {i}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Filterbar;
