import Select from 'common/select';
import FormIosCheckbox from 'components/common/form-ios-checkbox';
import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import styled from '@emotion/styled';
import { ReactComponent as Star } from 'icons/star.svg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { bindActionCreators } from 'redux';
import { setSpecialists } from 'Redux/actions/actions';
import Load from 'components/common/load';
import { getSpecialistsNamesArray } from 'components/utils/specialists';
import DatePicker from 'components/common/datePicker';
import TimePicker from 'components/common/timePicker';

const CommentForm = ({ specialists }) => {
  const [isLoading, setLoading] = useState(false);
  const theme = useTheme();

  const FieldSet = styled.fieldset`
    padding: 0;
    padding-bottom: 5px;
    border: none;
  `;

  const selectNamesData = getSpecialistsNamesArray(specialists).map((el) => ({
    value: el,
    label: el,
  }));

  return (
    <form
      action="post"
      css={css`
        padding-bottom: 10px;

        ${breakpointsMap.DESKTOP} {
          display: flex;
          flex-wrap: wrap;
          padding-top: 27px;
          margin-bottom: 26px;
        }
      `}
    >
      <FieldSet
        css={css`
          padding-right: 0;
          padding-left: 0;

          ${breakpointsMap.TABLET} {
            margin-right: 0;
          }

          ${breakpointsMap.DESKTOP} {
            margin-right: 30px;
          }
        `}
      >
        <legend
          css={css`
            margin-bottom: 15px;

            ${breakpointsMap.DESKTOP} {
              margin-bottom: 29px;
            }
          `}
        >
          Как к вам обращаться?
        </legend>
        <input
          type="text"
          className="search__input"
          placeholder="Ваше имя*"
          aria-label="Ваше имя*"
          aria-describedby="comment-name"
          css={css`
            width: 100%;
            padding-left: 28px;
            border: 1px solid ${theme.colors.blue};
            margin-bottom: 10px;
            border-radius: 4px;
            font-size: 13px;

            ${breakpointsMap.DESKTOP} {
              width: 245px;
              margin-bottom: 0;
            }
          `}
        />
        <p className="visually-hidden" id="comment-name">
          Введите ваше имя
        </p>
      </FieldSet>
      <FieldSet
        css={css`
          padding: 0;

          ${breakpointsMap.DESKTOP} {
            display: flex;
            padding-right: 0;
            padding-bottom: 5px;
            padding-left: 0;
            margin-right: 30px;
          }
        `}
      >
        <legend
          css={css`
            margin-bottom: 15px;

            ${breakpointsMap.DESKTOP} {
              margin-bottom: 29px;
            }
          `}
        >
          Данные о приеме
        </legend>
        <DatePicker />
        <TimePicker />
      </FieldSet>
      <FieldSet
        css={css`
          padding-right: 0;
          padding-left: 0;
          margin-bottom: 10px;

          .select {
            width: 100%;
          }

          .select__control {
            height: 47px;
            border-color: ${theme.colors.blue};
          }

          .select__indicator {
            color: ${theme.colors.blue};
          }

          ${breakpointsMap.DESKTOP} {
            margin-bottom: 0;

            .select {
              width: 345px;
              height: 100%;
            }

            .select__control {
              height: 100%;
            }
          }
        `}
      >
        <Load state={isLoading}>
          <legend
            css={css`
              margin-bottom: 15px;

              ${breakpointsMap.DESKTOP} {
                margin-bottom: 29px;
              }
            `}
          >
            Выберете о ком ваш отзыв
          </legend>
          <Select
            placeholder="Введите ФИО специалиста"
            data={selectNamesData}
          />
        </Load>
      </FieldSet>
      <FieldSet
        css={css`
          display: flex;
          flex-direction: row;
          padding-top: 20px;
          padding-right: 0;
          padding-bottom: 20px;
          padding-left: 0;
          margin-bottom: 10px;
          ${breakpointsMap.DESKTOP} {
            width: 100%;
            padding-bottom: 24px;
          }
        `}
      >
        <div
          className="filter__checkbox-group"
          css={css`
            margin-right: 30px;

            ${breakpointsMap.DESKTOP} {
              margin-right: 176px;
            }
          `}
        >
          <input
            type="checkbox"
            name="anon"
            id="anon"
            value="true"
            aria-label="Хотите чтобы отзыв был анонимным?"
            className="filter__input filter__input--checkbox"
          />
          <label className="filter__label" htmlFor="anon">
            Анонимно
          </label>
        </div>
      </FieldSet>
      <FieldSet
        css={css`
          padding-right: 0;
          padding-left: 0;

          ${breakpointsMap.DESKTOP} {
            display: flex;
          }
        `}
      >
        <legend
          css={css`
            margin-bottom: 29px;
            text-align: left;
          `}
        >
          Оставьте подробный отзыв
        </legend>

        <div
          css={css`
            ${breakpointsMap.DESKTOP} {
              margin-right: 32px;
            }
          `}
        >
          <textarea
            className="form__input form__input--textarea"
            placeholder="Ваше сообщение"
            css={css`
              width: 100%;
              height: 247px;
              border-color: ${theme.colors.blue};

              ${breakpointsMap.DESKTOP} {
                width: 795px;
                margin-bottom: -3px;
              }
            `}
          />
        </div>
        <div
          css={css`
            ${breakpointsMap.DESKTOP} {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              margin-bottom: 10px;

              &:hover svg {
                color: #ffab1a;
              }

              svg:hover ~ svg {
                color: #ddd;
              }

              ${breakpointsMap.DESKTOP} {
                margin-bottom: 0;
              }
            `}
          >
            {new Array(5).fill().map(() => (
              <Star
                fill="currentColor"
                css={css`
                  color: #ddd;
                  cursor: pointer;
                `}
              />
            ))}
          </div>
          <div
            className="form__input-checkbox-container"
            css={css`
              ${breakpointsMap.DESKTOP} {
                margin: 0;
              }
            `}
          >
            <FormIosCheckbox
              action={() => console.log(true)}
              id="agreement"
              name="agreement"
              label="Нажимая на кнопку отправить вы соглашаетесь с нашей политикой
    конфиденциальности"
            />
            <small
              className="form__agreement-hint"
              css={css`
                opacity: 0.4;
              `}
            >
              Нажимая на кнопку отправить вы соглашаетесь с нашей политикой
              конфиденциальности
            </small>
          </div>
          <button
            className="form__button"
            type="submit"
            css={css`
              width: 100%;
            `}
          >
            Отправить
          </button>
        </div>
      </FieldSet>
    </form>
  );
};

CommentForm.propTypes = {
  specialists: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSpecialistsState: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { specialists } = state;

  return { specialists };
};

const mapDispatchToProps = (dispatch) => ({
  setSpecialistsState: bindActionCreators(setSpecialists, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
