import NewMeetupForm from "../components/meetups/NewMeetupForm";
import * as data from '../secrets.json';
import { useHistory } from 'react-router-dom';

function NewMeetupPage(){
    const history = useHistory();

    async function addMeetupHandler(newMeetup) {
		const SERVER_URL = data.db_url;     //GET FROM FIREBASE;
        fetch(
            SERVER_URL,
            {
                method: 'POST',
                body: JSON.stringify(newMeetup),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then(() => {
            history.replace('/');
        });
    }
    return (
        <section>
            <h1>NewMeetupPage</h1>
            <NewMeetupForm addNewMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetupPage;