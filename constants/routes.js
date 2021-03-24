const routesConstants = {
  MAIN: {
    route: '/',
    name: 'Главная',
  },
  SPECIALISTS: {
    route: '/specialists',
    name: 'Специалисты',
  },
  SERVICES: {
    route: '/services',
    name: 'Услуги',
    subRoutes: {
      CENTERS: {
        route: '/centers',
        name: 'Медицинские центры',
      },

      ONLINE: {
        route: '/online',
        name: 'Онлайн консультация',
      },

      COMPLEXES: {
        route: '/complex',
        name: 'Комплексные анализы',
      },

      LAB: {
        route: '/lab',
        name: 'Услуги лаборатории',
      },

      ADDITION: {
        route: '/additions',
        name: 'Дополнительно',
      },
    },
  },
  MEDCENTERS: {
    route: '/medCenters',
    name: 'Медицинские центры',
  },
  REFERENCES: {
    route: '/references',
    name: 'Справки',
  },
  SPECIALITY: {
    route: '/speciality',
    name: 'Специальность',
  },
  ILLNES: {
    route: '/illnes',
    name: 'Заболевание',
  },
  ONLINE: {
    route: '/online',
    name: 'Онлайн консультация',
  },
  TOHOME: {
    route: '/tohome',
    name: 'Выезд на дом',
  },
  COMPLEXANALYZE: {
    route: '/complexAnalyze',
    name: 'Комплексный анализ',
  },
  PRICELIST: {
    route: '/priceList',
    name: 'Прайс по услугам',
  },
  VACANSIES: {
    route: '/vacansies',
    name: 'Вакансии',
  },
  VACANSY: {
    route: '/vacansy',
    name: 'Вакансия',
  },
  MAINTAINCE: {
    route: '/maintaince',
    name: 'Обслуживание по полисам ДМС',
  },
  NOTFOUND: {
    route: '/404',
    name: '404',
  },
  CORPO: {
    route: '/corpo',
    name: 'Корпоративным клиентам',
  },
  ARTICLES: {
    route: '/articles',
    name: 'Пресс центр',
  },
  DISCOUTNS: {
    route: '/discountes',
    name: 'Дисконтная программа',
  },
  SUPPLIERS: {
    route: '/suppliers',
    name: 'Поставщикам расходных материалов',
  },
  COMMENTS: {
    route: '/comments',
    name: 'Отзывы',
  },
  MEDCENTER: {
    route: '/medcenter',
    name: 'Медицинский центр',
  },
  CART: {
    route: '/cart',
    name: 'Корзина',
  },
  SHARES: {
    route: '/shares',
    name: 'Акции',
  },
  ABOUTUS: {
    route: '/aboutus',
    name: 'О компании',
  },
  REFUND: {
    route: '/refund',
    name: 'Возврат',
  },
};

const routesConstantsWODirectLinks = {
  ANALYZE: {
    route: '/analyze/:analyzename',
    name: 'Анализ',
  },
};

export { routesConstantsWODirectLinks };
export default routesConstants;
