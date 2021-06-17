import { useContext } from 'react';
import FavContext from '../store/favourites-context';
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage(){
    const fvContext = useContext(FavContext);
    let content;
    console.log(fvContext.totalFavourites);
    if(fvContext.totalFavourites === 0) {
        content = <p>You have no favourites...</p>
    }else {
        content = <MeetupList items={fvContext.favourites} />
    }

    return (
        <section>
            <h1>My Favourites</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;