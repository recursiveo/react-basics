import Cards from '../ui/Cards';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(){
    return <Cards>
        <form className={classes.form}>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' required/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Image</label>
                <input type='url' id='image' required/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type='text' id='address' required/>
            </div>
            <div className={classes.control}>
                <label htmlFor='desc'>Description</label>
                <textarea id='desc' rows='5' required></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add New Meetup</button>
            </div>
        </form>
    </Cards>
}

export default NewMeetupForm;