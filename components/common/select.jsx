import PropTypes from 'prop-types';
import Select from 'react-select';
import { css } from '@emotion/react';

const SelectComponent = ({
  selectClass,
  data,
  placeholder,
  action,
  cssStr,
  defaultValue,
}) => {
  return (
    <Select
      placeholder={placeholder}
      options={data}
      className={`${selectClass} select`}
      classNamePrefix="select"
      onChange={(value) => action(value)}
      noOptionsMessage={() => 'Не найдено'}
      value={defaultValue.value && defaultValue.label && defaultValue}
      css={css`
        ${cssStr}
      `}
    />
  );
};

SelectComponent.defaultProps = {
  cssStr: ``,
  defaultValue: {},
  action: () => console.log('forgot me? :c'),
  data: [],
};

SelectComponent.propTypes = {
  placeholder: PropTypes.string.isRequired,
  selectClass: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  action: PropTypes.func,
  cssStr: PropTypes.string,
  defaultValue: PropTypes.objectOf(PropTypes.string),
};

export default SelectComponent;
