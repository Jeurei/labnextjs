import { useState } from 'react';
import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import { ReactComponent as Star } from 'icons/star.svg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Comment from 'components/common/comment';
import MenuTabs from './menu-tabs';
import CommentForm from './comment-form';

const Comments = ({ children }) => {
  const theme = useTheme();
  const [isComments, setComments] = useState(false);

  const onCreateCommentClickHandler = () => {
    setComments(!isComments);
  };

  return (
    <>
      <h2 className="main__title">Отзывы</h2>
      <MenuTabs
        routes={children.find((el) => el.link === '/comments')}
        root="comments"
        action={onCreateCommentClickHandler}
        isShown={isComments}
      />
      {isComments && <CommentForm />}

      <div>
        <h3
          css={css`
            margin: 0;
            margin-bottom: 29px;
            font-size: 16px;
            font-weight: 500;
          `}
        >
          Отзывы
        </h3>
        <div
          css={css`
            display: grid;
            padding: 0;
            gap: 30px;
            grid-template-columns: repeat(2, 1fr);
            list-style: none;
          `}
        >
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </>
  );
};

Comments.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const {
    routes: {
      routes: {
        aboutUs: { children },
      },
    },
  } = state;

  return { children };
};

export default connect(mapStateToProps, null)(Comments);
