import React, { Component } from "react";
import { CollectionIdType } from "../../types/data/items";
import { allCollections } from "../../constants/data";
import "./index.css";

interface IProps {
  collections: Array<CollectionIdType>;
  onAddCollection: (collectionId: CollectionIdType) => void;
  onRemoveCollection: (collectionId: CollectionIdType) => void;
}

class Filterbar extends Component<IProps> {
  render() {
    return (
      <div className="filterbar">
        Currently Showing -
        <ul className="filter-options-wrapper">
          {allCollections.map(i => {
            const { title, id } = i;
            const isSelected = this.props.collections.includes(id);
            return (
              <li
                className={`filter-options ${isSelected ? "selected" : ""}`}
                key={id}
                onClick={() =>
                  isSelected
                    ? this.props.onRemoveCollection(id)
                    : this.props.onAddCollection(id)
                }
              >
                {title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Filterbar;
