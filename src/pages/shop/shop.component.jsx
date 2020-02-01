import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";

function ShopPage() {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props} />
      ))}
    </div>
  );
}

export default ShopPage;
