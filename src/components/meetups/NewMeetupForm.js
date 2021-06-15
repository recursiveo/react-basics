import Cards from '../ui/Cards';
import classes from './NewMeetupForm.module.css';
import { useRef } from 'react';

function NewMeetupForm(props){
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const titletext = titleInputRef.current.value;
        const imageUrl = imageInputRef.current.value;
        const addresstext = addressInputRef.current.value;
        const descriptiontext = descInputRef.current.value;

        const newMeetup = {
            title: titletext,
            image: imageUrl,
            address: addresstext,
            description: descriptiontext,
        }
        props.addNewMeetup(newMeetup);
    }
    return <Cards>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' required ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Image</label>
                <input type='url' id='image' required ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type='text' id='address' required ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='desc'>Description</label>
                <textarea id='desc' rows='5' required ref={descInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add New Meetup</button>
            </div>
        </form>
    </Cards>
}

export default NewMeetupForm;