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

const FilterList = (props: {
  toggleCollection: (id: CollectionIdType) => void;
  children: any;
}) => {
  const children: any = React.Children.map(props.children, child =>
    React.cloneElement(child, {
      toggleCollection: (id: any) => props.toggleCollection(id)
    })
  );
  return <div className="filter-options-wrapper">{children}</div>;
};

const FilterItem = (props: any) => {
  const { toggleCollection, id, selected } = props;
  return (
    <button
      className={`filter-options ${selected ? "selected" : ""}`}
      key={id}
      onClick={() => toggleCollection(id)}
    >
      {props.children}
    </button>
  );
};

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
        <FilterList toggleCollection={this.toggleCollection}>
          {allCollections.map(i => {
            const { id, title } = i;
            return (
              <FilterItem
                key={id}
                id={id}
                selected={this.props.collections.includes(id)}
              >
                {title}
              </FilterItem>
            );
          })}
        </FilterList>
      </div>
    );
  }
}

export default Filterbar;
