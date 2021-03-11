import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const SpecialistDayInfo = ({
  selectedDay,
  arr,
  selectedMounth,
  setCurrentDay,
  availableMounthes,
}) => {
  let currentArr = arr;
  let closestDay = Number(selectedDay);
  let closestMounth = 0;
  const isNotAvailable = false;
  while (!Object.values(currentArr[closestDay][1]).length) {
    closestDay += 1;
    if (
      closestDay === currentArr.length &&
      !Object.values(currentArr[closestDay][1]).length
    )
      if (
        closestMounth === 2 &&
        closestDay === currentArr.length &&
        !Object.values(currentArr[closestDay][1]).length
      ) {
        closestMounth += 1;
        currentArr = availableMounthes[closestMounth];
      }
  }

  return (
    <>
      <p className="specialist__chosen-day-info">
        {format(
          new Date(2021, selectedMounth, Number(arr[selectedDay][0]) + 1),
          'dd MMMM',
          {
            locale: ru,
          },
        )}{' '}
        нет доступного времени для записи.
      </p>
      {!isNotAvailable ? (
        <p className="specialist__closest-day">
          Ближайшее время записи,{' '}
          <a
            className="specialist__closest-day-link"
            href="/"
            aria-label="Хотите посмотреть время записи на это число?"
            id={closestDay}
            onClick={(evt) => {
              evt.preventDefault();
              setCurrentDay(evt.currentTarget.id);
            }}
          >
            {format(
              new Date(2021, selectedMounth, Number(arr[closestDay][0]) + 1),
              'dd MMMM',
              {
                locale: ru,
              },
            )}{' '}
          </a>
        </p>
      ) : (
        <p className="specialist__closest-day">
          К сожалению мы не можем найти ближайшее время для записи :c
          <br />
          Попробуйте нам позвонить по этому номеру 8 800 3000 789
        </p>
      )}
    </>
  );
};

SpecialistDayInfo.propTypes = {
  selectedDay: PropTypes.string.isRequired,
  arr: PropTypes.arrayOf(PropTypes.array).isRequired,
  selectedMounth: PropTypes.number.isRequired,
  setCurrentDay: PropTypes.func.isRequired,
  availableMounthes: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default SpecialistDayInfo;
