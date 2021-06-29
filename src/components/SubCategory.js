export default function SubCategory(props)
{
    let categoryid=props.categoryid
    let sub=[{id:1,pid:1,name:'Electric Guitar'},{id:2,pid:2,name:'66-key'},{id:3,pid:1,name:'Acoustic Guitar'},{id:4,pid:3,name:'Classical Violin'},{id:5,pid:4,name:'Bass Drum'},{id:6,pid:2,name:'76-key'}]
    return(
        <ul className="dropdown-menu dropdown-submenu">
           {
               sub.map((subC,ind)=>{
                   if(categoryid===subC.pid)
                   {
                    return <li>
                    <a className="dropdown-item" href="#">{subC.name}</a>
                  </li>
                   }
                 
               })
           }
        </ul>
    )
}