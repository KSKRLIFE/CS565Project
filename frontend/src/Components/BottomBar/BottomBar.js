import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './BottomBar.module.scss';

class BottomBar extends Component {

    render() {
        return (
            <div className={styles.BottomBarParent}>
                <div className={styles.BottomBar}>
                    <Link className={`${styles.title} ${styles.active}`} to='/'>
                        <h1>Splashgram</h1>
                    </Link>
                    <Link className={`${styles.bottomAction} ${styles.active}`} to='/'>
                        <i className="material-icons">
                            view_headline
                        </i>
                        Feed
                    </Link>
                    <Link className={`${styles.bottomAction} ${styles.active}`} to="/collections">
                        <i className="material-icons">
                            graphic_eq
                        </i>
                        Collections
                    </Link>
                    <Link className={`${styles.bottomAction} ${styles.active}`} to="/search">
                        <i className="material-icons">
                            search
                        </i>
                        Search
                    </Link>
                    <Link className={`${styles.bottomAction} ${styles.active}`} to="/profile">
                        <i className="material-icons">
                            perm_identity
                        </i>
                        Account
                    </Link>

                </div>
            </div>
        );
    }
}

export default BottomBar;