import StarRating from './StarRating'
function Item({proObj,setRatedCount}){
    
    const handleOnclick =(proObj)=>{
        console.log("productObject",proObj);
       
    }
    return (
        <div className="col ms-2 Item-Style" onClick={()=>handleOnclick(proObj)} >
            <div className="card">
                <img src={proObj.img} width="200px" className="d-block mx-auto w-100" alt={`${proObj.name}productimage`}/>
                <div className="card-body ">
                <h5 className="card-title">{proObj.name}</h5>
                <p className="card-text">Price:{proObj.price}</p>
                </div>
                <div className="card-footer mx-auto border-0 bg-white">
                    <StarRating numberOfSelected={proObj.rating} onSelectStatus={true} setRatedCount={setRatedCount}/>
                </div>
            </div>
        </div>
    )
}
 
export default Item;