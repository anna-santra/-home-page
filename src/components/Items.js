import Item from './Item'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
 
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
function Items({deal,products,setRatedCount}){
    
    return (
        <div>
            <h1>{deal}</h1>
            <Carousel responsive={responsive} centerMode={true}>
                    {
                        products.map((proObj,ind)=>{
                           return <div key={ind}>
                           
                                    <Item  proObj={proObj} setRatedCount={setRatedCount}/>
 
                                  </div>
                        })
                    }
            </Carousel>
            
        </div>
    )
}
 
export default Items;