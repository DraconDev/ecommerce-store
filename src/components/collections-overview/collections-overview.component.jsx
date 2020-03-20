import React from "react";
import "./collections-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

const collectionsOverview = (props) => {
  console.log("collectionsOverviewProps", props);
  const { collections } = props;
  // console.log("collections", collections);
  return (
    <div className="collections-overview">
      {collections
        ? collections.map(({ id, ...props }) => (
            <CollectionPreview key={id} {...props} />
          ))
        : "loading"}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(collectionsOverview);
