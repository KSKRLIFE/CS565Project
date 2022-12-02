import React, {Component} from 'react';
import getPhotos from '../../API/getPhotos';
import Post from '../../Components/Photo/Post';
import {getTopicPhotos, getTopicsList} from "../../API/apis";
import style from './MainView.module.scss'

class MainView extends Component {
    state = {
        feed: [],
        page: 1,
        topic: 'editorial',
        topicList: [{
            slug: 'editorial',
            title: 'Editorial',
            id: 'editorial'
        }],
        isLoading: true
    };

    async componentDidMount() {
        let topicList = await getTopicsList()
        let editorial = {
            slug: 'editorial',
            title: 'Editorial',
            id: 'editorial'
        }
        topicList.unshift(editorial)
        let feed = await getPhotos(this.state.page)
        this.setState({
            feed,
            topicList,
            isLoading: false
        })
    }

    fetchTopicPhotos = async (topic=this.state.topic) => {
        if(topic!==this.state.topic){
            this.setState({
                topic,
                page:1,
                isLoading: true
            })
        }else{
            this.setState({
                topic,
                isLoading: true
            })
        }

        let data = topic === 'editorial' ? await getPhotos(this.state.page) : await getTopicPhotos(topic,this.state.page)
        this.setState({
            feed: data,
            isLoading: false
        })
    }

    nextPhoto = ()=>{
        const page = this.state.page+1
        this.setState({
            page
        },()=>{
            this.fetchTopicPhotos()
        })
    }

    prevPhoto = ()=>{
        const page = this.state.page-1
        if(page>=1){
            this.setState({
                page
            },()=>[
                this.fetchTopicPhotos()
            ])
        }

    }
    render() {
        let state = {...this.state};
        return (
            <div className={style.mainViewContainer}>
                <div className={style.topicContainer}>
                    {state.topicList.map(topic => {
                        return <p id={topic.id}
                                  className={`${style.topic} ${state.topic === topic.slug && style.active}`}
                                  onClick={() => this.fetchTopicPhotos(topic.slug)}>{topic.title}</p>
                    })}
                </div>
                {state.isLoading ? <p>Loading...</p> : state.feed.map(item => {
                    return !item.sponsorship && <Post key={item.id} item={item}/>
                })}
                <div className={style.pagination}>
                    <button disabled={this.state.page===1} onClick={this.prevPhoto}>Previous</button>
                    <span>{this.state.page}</span>
                    <button onClick={this.nextPhoto}>Next</button>
                </div>

            </div>
        );
    }
}

export default MainView;

export const Loading = () => {

}