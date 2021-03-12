import { css, useTheme } from '@emotion/react';

import { ReactComponent as TelIcon } from 'icons/tel-icon.svg';
import { ReactComponent as MailIcon } from 'icons/mail.svg';
import { ReactComponent as MarkIcon } from 'icons/map-mark-icon.svg';
import { breakpointsMap } from 'constants/styles';

const Contacts = () => {
  const theme = useTheme();
  return (
    <section className="footer__section footer__section-contacts section contacts">
      <h2 className="section__title visually-hidden">Как с нами связаться?</h2>
      <div className="section__inner">
        <ul className="contacts__list">
          <li className="contacts__contact contact contact--tel">
            <a
              href="tel:8 800 3000 789"
              css={css`
                color: #4a4a4a;

                &:hover,
                &:active {
                  color: #4a4a4a;
                }
              `}
            >
              <p className="contact__text-small">Ежедневно и круглосуточно</p>
              <p className="contact__text">8 800 3000 789</p>
            </a>
            <TelIcon
              fill="currentColor"
              css={css`
                position: absolute;
                top: 14px;
                left: -32px;
                width: 15px;
                height: 16px;
                color: ${theme.colors.white};

                ${breakpointsMap.DESKTOP} {
                  top: 28px;
                  left: -36px;
                }
              `}
            />
          </li>
          <li className="contacts__contact contact contact--email">
            <a
              href="mailto:>info@labdiag.perm.ru"
              css={css`
                color: #4a4a4a;

                &:hover,
                &:active {
                  color: #4a4a4a;
                }
              `}
            >
              <p className="contact__text-small">E-mail</p>
              <p className="contact__text">info@labdiag.perm.ru</p>
            </a>
            <MailIcon
              fill="currentColor"
              css={css`
                position: absolute;
                top: 17px;
                left: -32px;
                width: 13px;
                height: 10px;
                color: ${theme.colors.white};

                ${breakpointsMap.DESKTOP} {
                  top: 31px;
                  left: -36px;
                }
              `}
            />
          </li>
          <li className="contacts__contact contact contact--adress">
            <p className="contact__text-small">Адрес</p>
            <p className="contact__text">Пермь, 9 мая, 18а</p>
            <MarkIcon
              fill="currentColor"
              css={css`
                position: absolute;
                top: 17px;
                left: -30px;
                width: 10px;
                height: 14px;
                color: ${theme.colors.white};

                ${breakpointsMap.DESKTOP} {
                  top: 29px;
                  left: -35px;
                }
              `}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
