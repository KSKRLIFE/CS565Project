import React, {Component, useEffect, useState} from "react";
import styles from "./DetailCollection.module.css";
import {getDetailCollection, getCollectionPhotos} from "../../API/apis";
import Post from "../Photo/Post";
import style from "../../Containers/MainView/MainView.module.scss";

function DetailCollection(props) {
    const [details, setDetails] = useState({});
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function f() {
            let details = await getDetailCollection(props.match.params.id),
                photos = await getCollectionPhotos(props.match.params.id, page);

            setDetails(details);
            setPhotos(photos);
            setLoading(false);
        }

        f()
    }, []);

    let headerStyle = {};
    const nextPhoto = () => {
        const t = page + 1
        setLoading(true)
        setPage(t)
    }

    useEffect(() => {
        async function f() {
            let tempPhotos = await getCollectionPhotos(props.match.params.id, page);
            setPhotos(tempPhotos);
            setLoading(false);
        }
        f()
    }, [page])

    const prevPhoto = () => {
        const t = page - 1
        if (page >= 1) {
            setLoading(true)
            setPage(t)
        }
    }
    return !isLoading ? (
        <div>

            {/*Header*/}
            {Object.keys(details).length > 1 && (
                <div style={headerStyle} className={styles.header}>
                    <h3 className={styles.title}>{details.title}</h3>
                    {details.description && (
                        <p className={styles.description}>{details.description}</p>
                    )}
                    <div className={styles.postHeader}>
                        <div className={styles.profileImageContainer}>
                            <img
                                src={details.user.profile_image.medium}
                                className={styles.profileImage}
                                alt="Profile Picture"
                            />
                        </div>
                        {details.user.name}
                    </div>
                    {details.total_photos} Photos
                </div>
            )}
            {/*Posts*/}
            <div className={styles.posts}>
                {Object.keys(details).length > 1 &&
                    photos.length > 1 &&
                    photos.map((post) => {
                        return <Post item={post}/>;
                    })}
            </div>
            <div className={style.pagination}>
                <button disabled={page === 1} onClick={prevPhoto}>Previous</button>
                <span>{page}</span>
                <button onClick={nextPhoto}>Next</button>
            </div>
        </div>
    ) : (
        ""
    );
}

export default DetailCollection;
