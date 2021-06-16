import classes from './MeetupListItem.module.css';
import Cards from '../ui/Cards';
import {useContext} from 'react';
import FavContext from '../../store/favourites-context'

function MeetupListItem(props) {
    const favContext = useContext(FavContext);
    const isFav = favContext.isFavourite(props.id);

    function favouritesHandler() {
        if (isFav) {
            favContext.removeUsrFav(props.id);
        } else {
            favContext.addUsrFav({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.desc,
            });
        }
    }

    return (
        <Cards>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.desc}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={favouritesHandler}>{isFav ? 'Remove Favourite' : 'Add Favourite'}</button>
                </div>
            </li>
        </Cards>
    );
}

export default MeetupListItem;