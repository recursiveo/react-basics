import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import { Route, Switch } from 'react-router-dom'
import Layout from "./components/layouts/Layout";

function App() {
    return (
        <Layout>
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
        </Layout>
    );
}
export default App;
