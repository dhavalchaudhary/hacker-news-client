import React, { Component } from "react";
import { CollectionIdType } from "../../types/data/items";
import { allCollections } from "../../constants/data";
import "./index.css";

interface IProps {
  collections: Array<CollectionIdType>;
  onAddCollection: (collectionId: CollectionIdType) => void;
  onRemoveCollection: (collectionId: CollectionIdType) => void;
  fetchCollection: (collectionId: CollectionIdType) => void;
}

class Filterbar extends Component<IProps> {
  toggleCollection = (id: CollectionIdType): void => {
    const isSelected = this.props.collections.includes(id);
    if (isSelected) {
      this.props.onRemoveCollection(id);
    } else {
      this.props.onAddCollection(id);
      this.props.fetchCollection(id);
    }
  };
  render() {
    return (
      <div className="filterbar">
        Choose Filters -
        <ul className="filter-options-wrapper">
          {allCollections.map(i => {
            const { title, id } = i;
            const isSelected = this.props.collections.includes(id);
            return (
              <li
                className={`filter-options ${isSelected ? "selected" : ""}`}
                key={id}
                onClick={() => this.toggleCollection(id)}
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
