import Carousel from 'react-bootstrap/Carousel'
import imgOne from '../New folder/imgcar1.jpg'
import imgTwo from '../New folder/imgcar2.jpg'
import imgThree from '../New folder/imgcar3.jpg'


export default function Carousels()
{
    let images=[imgOne,imgTwo,imgThree]
    return(
        <Carousel fade={true} interval={3000}>
            {
                images.map((imgObj,ind)=>{
                    return  <Carousel.Item >
                    <img
                      className="d-block w-100"
                      src={imgObj}
                      alt="First slide"
                      key={ind}
                    />
                  </Carousel.Item>
                })
            }
        </Carousel>

    )
}