import { filterTypesMap } from 'constants/filter';

export const getFiltredArticles = {
  [filterTypesMap.ALL]: (articles) => articles,
  [filterTypesMap.BLOG]: (articles) =>
    articles.filter((article) => article.isBlog),
  [filterTypesMap.NEWS]: (articles) =>
    articles.filter((article) => article.isNews),
  [filterTypesMap.USEFUL]: (articles) =>
    articles.filter((article) => article.isUseful),
};

export const getFlatArr = (arr, depth = 1) => {
  if (arr.length === 0) {
    return [];
  }

  let result = arr;

  for (let i = 0; i < depth; i += 1) {
    result = result.reduce((acc, val) => acc.concat(val, []));
  }

  return result;
};

export const filterDublicatesObjects = (arr) => {
  return arr.filter(
    (v, i, a) =>
      a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i,
  );
};
