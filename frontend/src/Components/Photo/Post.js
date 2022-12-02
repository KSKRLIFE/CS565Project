import React, {Component, useEffect, useRef, useState} from 'react';
import styles from './Post.module.scss';
import {Link} from 'react-router-dom';
import {doLike} from "../../API/apis";
// import {BlurhashCanvas} from "react-blurhash";


const Post = ({item, style, isFullSize}) => {

    let [liked,setLiked] = useState(false)
    var postImageContainer = {
        paddingBottom: `${((item.height) / (item.width) * 100)}%`,
    };
    let isLoggedIn = localStorage.getItem('token')

    async function onClickLike() {
        let data = await doLike(item.id)
        setLiked(true)
    }

    return (
        <div style={style} className={`${styles.PostContainer} ${isFullSize && styles.PostContainerBig}`}>
            <Link to={`/user/${item.user.username}`}>
                <div className={styles.postHeader}>
                    <div className={styles.profileImageContainer}>
                        <img src={item.user.profile_image.small}
                             className={styles.profileImage} alt="Profile Picture"/>
                    </div>
                    {item.user.name}
                </div>
            </Link>
            <Link to={`/photo/${item.id}`}>
                <div className={styles.postImageContainer}>
                    <div style={{backgroundColor: `${item.color}`}} className={styles.bgColor}/>
                    {/* {item.blur_hash && <BlurhashCanvas className={styles.canvas} hash={item.blur_hash} punch={2} />} */}
                    <img className={styles.postImage} src={item.urls.regular} alt={item.description}/>
                    <div style={postImageContainer}/>
                </div>
            </Link>
            <div className={styles.postFooter}>
                <div onClick={onClickLike}
                     className={`${styles.postFooterButton} ${liked&&styles.likedButon} ${isLoggedIn && styles.postFooterButtonEnabled}`}>
                    {`${liked?(item.likes+1):item.likes}`} Likes
                </div>
            </div>
        </div>
    );
}

export default Post;