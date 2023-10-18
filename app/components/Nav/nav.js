import { Movies } from "../../pages/Movies/Movies"
import { MyList } from "../../pages/MyList/myList"
import { LinkPage, insertDom } from "../../utils/utils"
import "./navStyle.css"



export const Nav = () => {
    insertDom ("#header", nav)
    LinkPage("#savedlink", MyList)
    LinkPage("#movieslink", Movies)
}


const nav =  () =>  
`
<nav>
    <ul>
        <li>
            <a href="#" id="movieslink">Películas</a>
        </li>
        <li>
            <a href="#" id="savedlink">Mi lista</a>
        </li>
    </ul>
    <h2>Hola ${localStorage.username}</h2>
</nav>
`
