import { getFlatArr } from './filter';

export const getSpecialistsNamesArray = (arr) => {
  return arr.map((el) => el.name);
};

export const getSpecialistsJobsArray = (arr) => {
  return [...new Set(getFlatArr(arr.map((el) => el.job)))];
};

export const getSpecialistAdress = (arr) => {
  console.log(arr);
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
    ...new Set(
      getFlatArr(arr.map((el) => el.adresses.map((elem) => elem.city))),
    ),
  ];
};

export const getAllSpecialistsAdressesArray = (arr) => {
  return [
    ...new Set(
      getFlatArr([
        ...new Set(
          getFlatArr(
            arr.map((el) =>
              el.adresses.map((elem) =>
                Object.values(elem.center).map(
                  (element) =>
                    `${elem.city}, ${element.adress}, ${element.name}`,
                ),
              ),
            ),
          ),
        ),
      ]),
    ),
  ];
};
