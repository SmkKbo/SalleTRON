import { advSlider } from './siema';
import {
  renderMarkup,
  mobileTemplate,
  tabletTemplate,
  desktopTemplate,
} from './services';
import { adChange } from './adChanger';

//FIXME:
// [] remove 'container' class from mainPage
// [x] Montserrat for cyrillic fonts
//
// TODO:
// Предназначен для отображения информации о товарах рекламного характера.
// Через определенный интервал времени содержимое одного из блоков обновляется в произвольном (случайном) порядке.
// Категории из которыx происходит выбор товаров тоже случайные.
//
// [x] mobile first make slider Siema
// [x] mobile first make markup
//      number of elements in slider 5
//
// [x] random element gets changed within some period of time.
// [] rerender at breakpoints
// [] get api database
// [] beautify

// window.addEventListener("resize", callback);

const onAdvInit = () => {
  if (window.innerWidth < 768) {
    renderMarkup(mobileTemplate());
    advSlider();
    return;
  }

  if (window.innerWidth > 767 && window.innerWidth < 1280) {
    renderMarkup(tabletTemplate());
    return;
  }

  renderMarkup(desktopTemplate());
  adChange();
};

onAdvInit();
