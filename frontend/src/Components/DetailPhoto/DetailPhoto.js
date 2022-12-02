import React, { useEffect, useState} from "react";
import styles from "../Photo/Post.module.scss";
import stylesDetailPhoto from "./DetailPhoto.module.css";
import getDetailPhoto from "../../API/getDetailPhoto";
import Post from "../Photo/Post";
import Collection from "../Collections/Collections";

function DetailPhoto(props) {
    const [isLoading, setLoading] = useState(true)
    const [photo, setPhoto] = useState({})
    useEffect(() => {
        async function fetchData() {
            const photo = await getDetailPhoto(props.match.params.id)
            setPhoto(photo)
            setLoading(false)
        }

        fetchData()
    }, [])
    const relatedCollections = () => {
        let item = {...photo};
        let data = []
        item.related_collections && item.related_collections.results.map((collection) => {
            data.push(<Collection history={props.history} {...collection}/>)
        })
        return data
    }

    return (isLoading ? <p>Loading...</p> : <div className={stylesDetailPhoto.container}>
            {/*single post*/}
            <Post isFullSize={true} item={photo}/>
            <div className={styles.related}>
                <h4> Related Collections</h4>
                {relatedCollections()}
            </div>
        </div>
    );
}


export default DetailPhoto;