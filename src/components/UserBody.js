import Items from './Items'
import {useState} from 'react'
let product =[{id:"1a1",parentId:"1a",name:"Guitar-Ms",deal:"todays-deal",img:"logo192.png",rating:1,price:10000},{id:"1a1",parentId:"1a",name:"Guitar-Ms",deal:"todays-deal",img:"logo192.png",rating:1,price:10000},{id:"1a1",parentId:"1a",name:"Guitar-Ms",deal:"todays-deal",img:"logo192.png",rating:1,price:10000},{id:"1a1",parentId:"1a",name:"Guitar-Ms",deal:"todays-deal",img:"logo192.png",rating:1,price:10000},{id:"1a1",parentId:"1a",name:"Guitar-Ms",deal:"todays-deal",img:"logo192.png",rating:1},{id:"1a1",parentId:"1a",name:"Guitar-Ms"},{id:"1a2",parentId:"1a",deal:"todays-deal",name:"Guitar-Mb",img:"logo192.png"},{id:"1a3",parentId:"3a",name:"Voilin-product"}]
let todaysDeal = product.filter((proObj)=>proObj.deal === "todays-deal")
console.log("todaydeal",todaysDeal);
function UserBody(){
    let [ratedCount,setRatedCount] = useState('')
    console.log("ratedcount",ratedCount);
    return(
        <div className="container">
             <Items products={todaysDeal} deal={"Todays-deal"} setRatedCount={setRatedCount}/>
        </div>
    )
}
 
export default UserBody;