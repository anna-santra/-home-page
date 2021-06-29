import SubCategory from "./SubCategory"

export default function CategoryDrop()

{
    let products=[{id:1,name:"Guitar"},{id:2,name:"Keyboard"},{id:3,name:"Violin"},{id:4,name:"Drums"}]
    return(
        <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          >
         Categories
         </a>
        <ul className="dropdown-menu productmenu" aria-labelledby="navbarDropdownMenuLink">
         {
             products.map((pro,map)=>{
                 return  <li> <a class="dropdown-item" href="#">{pro.name} &raquo;</a>
                 <SubCategory categoryid={pro.id}/>
                 </li>
             })
         }
       
           
      </ul>
      </li>
    )
}