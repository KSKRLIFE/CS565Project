import React, {useEffect, useState} from 'react';
import style from './UserProfile.module.scss'
import {Link, useParams} from 'react-router-dom'
import {getMe, getUser, getUsersPhotos} from "../../API/apis";
import Post from "../../Components/Photo/Post";
import Collection from "../../Components/Collections/Collections";
import {useHistory} from "react-router";

const TABS = ['photos', 'likes', 'collections']

function MyProfile() {
    const [data, setData] = useState({})
    const [tab, setTab] = useState(TABS[0])
    const [photos, setPhotos] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [isTabLoading, setTabLoading] = useState(true)
    const [userName, setUserName] = useState(localStorage.getItem('me'))
    let history = useHistory();
    useEffect(() => {
        (async () => {
            console.log(userName);
            if (userName) {
                setLoading(true)
                try {
                    let token = localStorage.getItem('token')
                    let _data = await getMe(token)
                    setData(_data)
                    setLoading(false)
                } catch (e) {
                    setLoading(false)
                    console.log(e);
                }
            }

        })()
    }, [])
    useEffect(() => {
        (async () => {

            if (userName && !photos[tab]) {
                setTabLoading(true)
                try {
                    let _data = await getUsersPhotos(userName, tab)
                    setPhotos({...photos, [tab]: _data})
                    setTabLoading(false)
                } catch (e) {
                    setTabLoading(false)
                    console.log(e);
                }
            }
        })()
    }, [tab])

    let doRedirect = () => {
        history.push('/login')
    }
    return (
        <div className={style.userProfileContainer}>
            {!userName ? doRedirect() : isLoading ?
                <p>Loading...</p> :
                <>
                    <div className={style.topSection}>
                        <div>
                            <img className={style.profilePhoto} src={data.profile_image.small} alt=""/>
                            <h4>{data.name}</h4>
                            <p>{data.location}</p>
                        </div>
                    </div>
                    <div className={style.tabContainer}>
                        <div className={style.tabHeader}>
                            {TABS.map(_tab => <div className={`${style.tab} ${tab === _tab && style.active}`}
                                                   onClick={() => setTab(_tab)}>{_tab}</div>)}
                        </div>
                        <div className={style.tabContent}>
                            {<RenderTabContent
                                data={photos}
                                tab={tab}
                                isTabLoading={isTabLoading}
                            />}
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default MyProfile;

const RenderTabContent = ({tab, data, isTabLoading}) => {
    console.log(data);
    console.log(tab);
    return <div>
        {isTabLoading ? <p>loading...</p> :
            data[tab] && data[tab].length > 0 ? data[tab].map((item, i) => {
                return tab !== 'collections' ?
                    <Post key={item.id} item={item}/> :
                    <Collection {...item}/>
            }) : <p>No data :/</p>}
    </div>
}