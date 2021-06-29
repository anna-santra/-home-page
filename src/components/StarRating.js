import ReactStarRating from "react-star-ratings-component";
 
function StarRating({numberOfSelected,onSelectStatus,setRatedCount}){
    return(
        <ReactStarRating
        numberOfStar={4}
        numberOfSelectedStar={numberOfSelected}
        colorFilledStar="yellow"
        colorEmptyStar="black"
        starSize="20px"
        spaceBetweenStar="10px"
        disableOnSelect={onSelectStatus}
        onSelectStar={val =>setRatedCount(val)}
    />
    )
}
 
export default StarRating;