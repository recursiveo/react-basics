import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){
    function addMeetupHandler(newMeetup) {
		const SERVER_URL = '' //GET FROM FIREBASE;
        // let response = fetch(
        //   SERVER_URL,
        //     {
        //         method: 'POST',
        //         body: JSON.stringify(newMeetup),
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     }
        // );
        // console.log(response)
    }
    return (
        <section>
            <h1>NewMeetupPage</h1>
            <NewMeetupForm addNewMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetupPage;