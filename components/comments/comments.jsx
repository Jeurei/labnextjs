import { useState } from 'react';
import { css } from '@emotion/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Comment from 'components/common/comment';
import SectionInner from 'containers/section-inner';
import MenuTabs from './menu-tabs';
import CommentForm from './comment-form';

const Comments = ({ children, comments }) => {
  const [isComments, setComments] = useState(false);

  const onCreateCommentClickHandler = () => {
    setComments(!isComments);
  };

  return (
    <SectionInner>
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
          {comments.map((el) => (
            <Comment data={el} />
          ))}
        </div>
      </div>
    </SectionInner>
  );
};

Comments.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const {
    routes: {
      routes: {
        aboutUs: { children },
      },
    },
    comments,
  } = state;

  return { children, comments };
};

export default connect(mapStateToProps, null)(Comments);
