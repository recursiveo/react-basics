import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import { Route, Switch } from 'react-router-dom'

function App() {
    return (
        <div>
            <Switch>
                <Route path='/' exact>
                    <AllMeetupsPage/>
                </Route>
                <Route path='/favs'>
                    <FavoritesPage/>
                </Route>
                <Route path='/new-meetup'>
                    <NewMeetupPage/>
                </Route>
            </Switch>
        </div>
    );
}
export default App;
