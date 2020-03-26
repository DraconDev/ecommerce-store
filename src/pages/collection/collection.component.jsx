import React from "react";
import { getState } from "react";
import { connect, useSelector } from "react-redux";

import {
  selectCollection,
  selectCollections
} from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = (props) => {
  // const state = useSelector((state) => state.shop.collections);

  const { title, items } = props.collection.find(
    (test) => test.routeName === props.match.params.collectionId
  );

  console.log("collectionpageprops", props, props.collection);

  // console.log(
  //   "collectionpageprops title items",
  //   title,
  //   items,
  //   props.match.params.collectionId
  // );

  return (
    <div className="collection-page">
      <h2 className="title">"asads"{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );

  return "";
};

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollections(ownProps.match.params.collectionId)(state)
// });

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollections(ownProps.match.params.collectionId)(state)
// });

const mapStateToProps = (state) => ({
  collection: selectCollections(state)
});

export default connect(mapStateToProps)(CollectionPage);
