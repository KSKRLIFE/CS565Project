import React, {Component} from 'react';
import {getCollections} from '../../API/apis'
import Collection from '../../Components/Collections/Collections'
import styles from './Collections.module.scss'
import style from "../MainView/MainView.module.scss";

class Collections extends Component {
  state={
    collections:[],
    isLoading:true,
    page: 1,
  };
  async componentDidMount() {
    this.setState({
      collections: await getCollections(this.state.page),
      isLoading:false
    })
  }

  fetchCollection = async ()=>{
    this.setState({
      collections: await getCollections(this.state.page),
      isLoading:false
    })
  }

  nextPhoto = ()=>{
    const page = this.state.page+1
    this.setState({
      page,
      isLoading:true
    },()=>{
      this.fetchCollection()
    })
  }

  prevPhoto = ()=>{
    const page = this.state.page-1
    if(page>=1){
      this.setState({
        page
      },()=>[
        this.fetchCollection()
      ])
    }

  }

  render() {
    let state = {...this.state};
    return (
        <div className={styles.CollectionsContainer}>
          <h3 className={styles.title}>Collections</h3>
          {state.isLoading?<p>Loading...</p> : state.collections.map((collection)=>{
            return <Collection history={this.props.history} {...collection}/>
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



export default Collections;