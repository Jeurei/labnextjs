import { ReactComponent as OdnIcon } from 'icons/odn.svg';
import { ReactComponent as VkIcon } from 'icons/vk.svg';
import { ReactComponent as FbIcon } from 'icons/fb.svg';
import { ReactComponent as InstIcon } from 'icons/inst.svg';

const Socials = () => (
  <ul className="copyright-bottom__socials-list socials">
    <li className="socials__item social social--odn">
      <a
        href="./"
        className="social__link"
        aria-label="Ссылка на страницу в Одноклассниках"
      >
        <OdnIcon
          className="social__icon"
          width="9"
          height="15"
          stroke="currentColor"
          fill="currentColor"
        />
      </a>
    </li>
    <li className="socials__item social social--vk">
      <a
        href="./"
        className="social__link"
        aria-label="Ссылка на страницу во Вконтакте"
      >
        <VkIcon
          className="social__icon"
          width="18"
          height="11"
          stroke="currentColor"
          fill="currentColor"
        />
      </a>
    </li>
    <li className="socials__item social social--fb">
      <a
        href="./"
        className="social__link"
        aria-label="Ссылка на страницу на Фейсбук"
      >
        <FbIcon
          className="social__icon"
          width="5.5"
          height="11.5"
          stroke="currentColor"
          fill="currentColor"
        />
      </a>
    </li>
    <li className="socials__item social social--inst">
      <a
        href="./"
        className="social__link"
        aria-label="Ссылка на страницу в Инстаграм"
      >
        <InstIcon
          className="social__icon"
          width="12.25"
          height="12.25"
          stroke="currentColor"
          fill="currentColor"
        />
      </a>
    </li>
  </ul>
);

export default Socials;
