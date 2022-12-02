import React, {Component, useEffect, useState} from "react";
import styles from "../Photo/Post.module.scss";
import getDetailPhoto from "../../API/getDetailPhoto";
import Post from "../Photo/Post";

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

    

    return (isLoading ? <p>Loading...</p> : <div>
            {/*single post*/}
            <Post item={photo}/>
            
        </div>
    );
}


export default DetailPhoto;