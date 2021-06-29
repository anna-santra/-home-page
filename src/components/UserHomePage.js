import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom'
import Header from './Header';
import Carousels from './Carousels';
import UserBody from './UserBody';
import Banner from './Banner';
import Footer from './Footer';

 
function UserHomePage(){
    return (
        <BrowserRouter>
        <div>
        <Header/>
        <Carousels/>
        <UserBody/>
        <Banner/>
        <UserBody/>
        <Footer/>
        </div>
 
            <div >
                <Switch>
                    <Route path="/home">
                           
                    </Route>

 
                    <Route path="/">
                        <Redirect to="/home"/>
                    </Route> 
 
                </Switch>
            </div>
        </BrowserRouter>
    )
}
 
export default UserHomePage;