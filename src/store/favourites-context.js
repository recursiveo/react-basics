import {createContext, useState} from "react";

const FavContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addUsrFav: (meetup) => {
    },
    removeUsrFav: (meetupId) => {
    },
    isFavourite: (meetupId) => {
    },
});

export function FavouritesContextProvider(props) {
    const [usrFavs, setUsrFavs] = useState([])

    const context = {
        favourites: usrFavs,
        totalFavourites: usrFavs.length,
        addUsrFav: addUsrFavsHandler,
        removeUsrFav: removeUsrFavsHandler,
        isFavourite: isFavouriteHandler,
    }

    function addUsrFavsHandler(meetup) {
        setUsrFavs(previousUsrFavs => {
            return previousUsrFavs.concat(meetup);
        });
    }

    function removeUsrFavsHandler(meetupId) {
        setUsrFavs(previousUsrFavs => {
            return previousUsrFavs.filter(favs => favs.id !== meetupId);
        });
    }

    function isFavouriteHandler(meetupId) {
        return usrFavs.some(fav => fav.id === meetupId);
    }

    return <FavContext.Provider value={context}>
        {props.children}
    </FavContext.Provider>

}

export default FavContext;