// TODO: сделать более универсальным

const Tab = () => {
  return (
    <div className="footer__nav-tab tab">
      <input
        className="tab__checkbox"
        type="checkbox"
        onChange={() => console.log('hi')}
      />
      <label className="tab__title">Анализы</label>
      <div className="tab__content">
        <a href="/" className="tab__content-title">
          Услуги лаборатории
        </a>
        <ul className="tab__list">
          <li className="tab__list-item">
            <a
              href="./"
              className="li tab__link"
              aria-label="Перейти на страницу с комплексные исследованиями"
            >
              Комплексные исследования
            </a>
          </li>
          <li className="tab__list-item">
            <a
              href="./"
              className="li tab__link"
              aria-label="Перейти на страницу с комплексные исследованиями"
            >
              Комплексные исследования
            </a>
          </li>
          <li className="tab__list-item">
            <a
              href="./"
              className="li tab__link"
              aria-label="Перейти на страницу с комплексные исследованиями"
            >
              Комплексные исследования
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tab;
