import './css/modern-normalize.min.css';
import './css/styles.css';
import './css/fontawesome.min.css';
import './css/regular.min.css';

import dom from './dom';
import handlers from './handler';

dom.responsiveSidebar();
dom.renderProjects();
dom.changeLink('inbox');

handlers.resizeHandler();
handlers.clickHandler();
handlers.keyboardHandler();