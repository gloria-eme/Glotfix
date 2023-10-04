import { Movies } from './pages/Movies/Movies';
import { Nav } from './components/Nav/nav';
import { MyList } from './pages/MyList/myList';
import './style.css'
import { LinkPage, insertDom } from './utils/utils';


insertDom ("#header", Nav)


LinkPage("#savedlink", MyList)
LinkPage("#movieslink", Movies)
