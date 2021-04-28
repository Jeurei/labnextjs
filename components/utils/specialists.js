import { getFlatArr } from './filter';

export const getSpecialistsNamesArray = (arr) => {
  return arr.map((el) => el.name);
};

export const getSpecialistsJobsArray = (arr) => {
  return [...new Set(getFlatArr(arr.map((el) => el.specializations)))];
};

export const getSpecialistAdress = (arr) => {
  return arr.adresses.map((el) =>
    Object.values(el.center).map((elem) => `${el.city}, ${elem.adress}`),
  );
};

export const getSpecialistCities = (arr) => {
  return [...new Set(arr.adresses.map((el) => el.city))];
};

export const getSpecialistCenters = (arr) => {
  return arr.adresses.map((el) =>
    Object.values(el.center).map(
      (elem) => `${el.city}, ${elem.adress}, ${elem.name}`,
    ),
  );
};

export const getSpecialistsCitiesArr = (arr) => {
  return [
    ...new Set(getFlatArr(arr.map((el) => el.centers.map((elem) => elem)))),
  ];
};

export const getAllSpecialistsAdressesArray = (arr) => {
  return [
    ...new Set(
      getFlatArr([
        ...new Set(getFlatArr(arr.map((el) => el.centers.map((elem) => elem)))),
      ]),
    ),
  ];
};

export const findSpecialistCenter = (id, arr) => {
  return arr.map((el) => el.id === id && el).filter(Boolean);
};

export const findSpecialistJobs = (id, arr) => {
  return arr.map((el) => el.id === id && el).filter(Boolean);
};
