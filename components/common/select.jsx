import PropTypes from 'prop-types';
import Select from 'react-select';
import { css } from '@emotion/react';
// TODO: Скорее всего опции беруться из объекта поэтому сделать шаблоном

const SelectComponent = ({
  selectClass,
  data,
  placeholder,
  action,
  cssStr,
}) => {
  return (
    <Select
      placeholder={placeholder}
      options={data}
      className={`${selectClass} select`}
      classNamePrefix="select"
      onChange={(value) => action(value)}
      noOptionsMessage={() => 'Не найдено'}
      css={css`
        ${cssStr}
      `}
    />
  );
};

SelectComponent.defaultProps = {
  cssStr: ``,
};

SelectComponent.propTypes = {
  placeholder: PropTypes.string.isRequired,
  selectClass: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.func.isRequired,
  cssStr: PropTypes.string,
};

export default SelectComponent;
