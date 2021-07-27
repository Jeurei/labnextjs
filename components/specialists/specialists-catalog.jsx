import PropTypes from 'prop-types';
import Card from 'components/common/card';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Specialist from './specialist';

const SpecialistsCatalog = ({ specialists }) => {
  const SPECIALISTS_PER_PAGE = 5;
  const [pagination, setPagination] = useState(0);
  const [isPagination, setIsPagination] = useState(false);

  const onShowMoreClickHandler = () => {
    setPagination((prev) => prev + 1);
  };

  const getSpecialistEnd = () => {
    return SPECIALISTS_PER_PAGE + SPECIALISTS_PER_PAGE * pagination;
  };

  const isLastPagination = () => {
    return getSpecialistEnd() >= specialists.length;
  };

  const getSlicedSpecialists = () => {
    return specialists.slice(0, getSpecialistEnd());
  };

  useEffect(() => {
    if (isLastPagination()) setIsPagination(false);
    else setIsPagination(true);
  }, [pagination]);

  return (
    <section
      className="specialists__catalog"
      css={css`
        & > div {
          min-width: 100%;
        }
      `}
    >
      {getSlicedSpecialists().map((el) => (
        <Card key={el.id}>
          <Specialist data={el} />
        </Card>
      ))}
      {isPagination && (
        <button
          type="button"
          className="button"
          onClick={onShowMoreClickHandler}
          css={css`
            margin-bottom: 37px;
            width: 300px;
            height: 42px;
          `}
        >
          Показать еще
        </button>
      )}
    </section>
  );
};

SpecialistsCatalog.propTypes = {
  specialists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SpecialistsCatalog;
