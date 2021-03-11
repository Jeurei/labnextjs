import SectionInner from 'containers/section-inner';
import Picture from 'common/picture';
import Tab from 'common/tab';
import Image from 'next/image';
import { ReactComponent as Logo } from 'icons/logo.svg';

const FooterBottom = () => (
  <section className="footer__bottom">
    <h2 className="footer__title visually-hidden">Полезные ссылки</h2>
    <section className="footer__section footer__section--footer-nav section footer-nav">
      <h2 className="section__title visually-hidden">Навигация</h2>
      <SectionInner>
        <Tab />
        <Tab />
        <Tab />
      </SectionInner>
      <SectionInner>
        <Logo
          className="footer-nav__logo"
          width="230"
          height="36"
          alt="Логотип компании Лабдиагностика"
        />
        <div className="footer-nav__top copyright-top">
          <p className="copyright-top__text">
            Сеть многопрофильных медицинских центров
            <br className="copyright-top__text-br" />и заборных пунктов в Перми
            и городах Пермского края.
          </p>
          <div className="copyright-top__logo">
            <Image
              src="/img/site-logos.png"
              width="191"
              height="20"
              layout="responsive"
              alt="Логотипы компаний с которыми мы сотрудничаем"
            />
          </div>
          <small className="copyright-top__small">
            © Лабдиагност и К. Все права защищены.
          </small>
        </div>
      </SectionInner>
    </section>
  </section>
);

export default FooterBottom;
