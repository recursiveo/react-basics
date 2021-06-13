import classes from './MeetupListItem.module.css';
import Cards from '../ui/Cards';

function MeetupListItem(props) {
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
                    <button>To Favorites</button>
                </div>
            </li>
        </Cards>
    );
}

export default MeetupListItem;