import { IPORTFOLIO_ITEM } from "../types/components/portfolio-item";
import { IPORTFOLIO_LI } from "../types/components/portfolio-li";

export const portfolioLinks: IPORTFOLIO_LI[] = [
  { text: "Мистецтво", href: "/" },
  { text: "Харчування", href: "/" },
  { text: "Дорога", href: "/" },
  { text: "Автомобілі", href: "/" },
  { text: "Курс", href: "/" },
  { text: "Тварини", href: "/" },
  { text: "Бухгалтерський облік", href: "/" },
  { text: "Турагентство", href: "/" },
  { text: "Нерухомість", href: "/" },
  { text: "Лід", href: "/" },
  { text: "Маркетинг", href: "/" },
];

export const portfolioItems: IPORTFOLIO_ITEM[] = [
  {
    href: "/",
    title: "Лендинг",
    description: "Продаж авто, франшиза, курсовий продаж, продаж дорожніх знаків, бухгалтерія",
    imageSrc: "/images/portfolio-items/ZenBookDuo14.png",
    category: "Мистецтво"
  },
  {
    href: "/",
    title: "сайт з 2+ сторінками",
    description: "Художні матеріали, доставка їжі, продаж сухого льоду, продаж їжі, туристичне агентство",
    imageSrc: "/images/portfolio-items/ZenBookDuo15.png",
    category: "Мистецтво"
  },
  {
    href: "/",
    title: "Маркетплейс",
    description: "Продаж авто, турфірма, тварини, лід, курс, нерухомість",
    imageSrc: "/images/portfolio-items/ZenBookDuo16.png",
    category: "Мистецтво"
  },
];
