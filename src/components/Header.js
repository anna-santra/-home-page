import CategoryDrop from "./CategoryDrop"
import Brands from "./Brands"
import SearchBox from "./SearchBox"
import Icon from "./Icon"
import CategorySamp from "./CategorySamp"

export default function Header()
{
    return(
        <nav className="navbar navbar-expand-lg ">
             <div className="container-fluid">
               <Icon/>
               <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span ><i className="fas fa-bars"></i></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav  mb-2 mb-lg-0">
                       <CategoryDrop/>
                        <Brands/>
                        <li class="nav-item"> <a class="nav-link" href="#">Kids</a> </li>
                        
                   </ul>
                   <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
                   <SearchBox/>
                   <li className="nav-item me-1">
                   <a href="#" className="nav-link d-flex flex-column">
                   <i className="far fa-user text-center"></i>
                     <span className="d-none d-sm-inline">Profile</span>
                     </a>
                    </li>
                     <li className="nav-item me-1">
                     <a href="#" className="nav-link d-flex flex-column">
                     <i className="far fa-heart text-center "></i>
                     <span className="d-none d-sm-inline">Wishlist</span>
                     </a>
        
                    </li>
                     <li className="nav-item me-1"> 
                     <a href="#" className="nav-link d-flex flex-column">
                     <i className="fas fa-shopping-bag text-center"></i>
                     <span className="d-none d-sm-inline">Bag</span>
                     </a>
                     </li>
                   </ul>
               </div>

             </div>
        </nav>
    )
}