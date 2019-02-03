import { CollectionIdType, StoryIdType } from "../types/data/items";
import { ROOT_URL } from "../constants/api";

function generateCollectionUrl(collection: CollectionIdType) {
  return `${ROOT_URL}/${collection}stories.json`;
}

export function fetchCollectionData(
  collectionId: CollectionIdType
): Promise<any> {
  return new Promise(function(resolve, reject) {
    fetch(generateCollectionUrl(collectionId))
      .then(res => res.json())
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject();
      });
  });
}
