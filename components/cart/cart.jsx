import { css } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import SectionInner from 'components/header/section-inner';
import SearchInput from 'components/common/Search-input';
import Form from './form';
import UserCart from './user-cart';

const Cart = () => {
  return (
    <>
      <SectionInner>
        <h2 className="main__title">Корзина</h2>
        <section>
          <SearchInput placeholder="Введите название анализа" />
          <div
            css={css`
              display: flex;
              flex-direction: column;

              ${breakpointsMap.DESKTOP} {
                flex-direction: row;
              }
            `}
          >
            <UserCart />
            <Form />
          </div>
        </section>
      </SectionInner>
    </>
  );
};

export default Cart;
