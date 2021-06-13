import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Meetups App</div>
            <nav>
                <ul>
                    <li>
                      <Link to='/'>All Meetups Page</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add new Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favs'>Favourites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;