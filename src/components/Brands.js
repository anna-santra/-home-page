export default function Brands()
{
   
    let brands=[{id:1,name:"Gibson"},{id:2,name:"Harman Professional"},{id:3,name:"Shure"},{id:4,name:"Yamaha"},{id:5,name:"Roland"}]
    return(
        <li className="nav-item dropdown" id="maindrop">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Brands
           </a>
        <ul className="dropdown-menu brands" aria-labelledby="navbarDropdownMenuLink">
         {
             brands.map((brandname,map)=>{
                 return  <li> <a class="dropdown-item" href="#">{brandname.name}</a>
                 </li>
             })
         }
       
           
      </ul>
      </li>
    )
}