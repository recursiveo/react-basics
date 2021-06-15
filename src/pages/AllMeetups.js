import MeetupList from "../components/meetups/MeetupList";
import * as data from '../secrets.json';
import {useState, useEffect} from 'react';

// const DUMMY_DATA = [
//     {
//         id: 'm1',
//         title: 'This is a first meetup',
//         image:
//             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description:
//             'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//         id: 'm2',
//         title: 'This is a second meetup',
//         image:
//             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description:
//             'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
// ];

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([])

    useEffect(() => {
        fetch(data.db_url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                const allmeetups = [];

                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key],
                    }
                    allmeetups.push(meetup);
                }
                setLoadedMeetups(allmeetups)
                setIsLoading(false);
            });
    },[]);

    if(isLoading){
        return <section>
            <div>
                <p>
                    Loading...
                </p>
            </div>
        </section>
    }

    return (
        <section>
            <h1>
                AllMeetupsPage
            </h1>
            <MeetupList items={loadedMeetups}/>
        </section>
    );
}

export default AllMeetupsPage;