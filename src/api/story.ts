import { StoryIdType } from "../types/data/items";
import { ROOT_URL } from "../constants/api";

function generateStoryUrl(storyId: StoryIdType) {
  return `${ROOT_URL}/item/${storyId}.json`;
}

export function fetchStoryData(storyId: StoryIdType): Promise<StoryIdType[]> {
  return new Promise(function(resolve, reject) {
    fetch(generateStoryUrl(storyId))
      .then(res => res.json())
      .then(res => {
        // reject();
        resolve(res);
      })
      .catch(err => {
        reject();
      });
  });
}
