import MeetupListItem from './MeetupListItem';
import classes from './MeetupList.module.css';
function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {props.items.map((meetup) => {
                return <MeetupListItem key={meetup.id} image={meetup.image} title={meetup.title} address={meetup.address}
                                       desc={meetup.description}/>

            })}
        </ul>

    );
}

export default MeetupList;