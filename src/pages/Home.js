import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import SlideBar from '../components/SlideBar';
import {categoryItem} from '../static/data';
import {collection,onSnapshot,query} from "firebase/firestore";
import {db} from "../FireBase";
import Video from './Video';
import ThumbnailVideo from "../components/ThumbnailVideo"

export const Home = () => {
  const [active, setActive] = useState("All")
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const q = query(collection(db,"videos"))
    onSnapshot(q, (snapShot)=>{
      setVideos(
            snapShot.docs.map(doc => ({
              ...doc.data(),
              id: doc.id,
            })))
    })
  },[])
  console.log(videos)
  return (
    <div className='main d-flex flex-wrap'>
      <SlideBar/>
      <div className='content_page'>
        <div className='category-wraper mt-2 mb-3'>
          <ul className='categery_box d-flex flex-nowrap'>
            {categoryItem.map((item,i)=>{
              return <li key={i} ><Link className={`${item === active ? "categery_active" : null}`} id="link" onClick={()=>setActive(item)}>{item}</Link></li>
            })}
          </ul>
        </div>
        <div className='videos_wraper d-flex flex-wrap'>
            {videos.length === 0 ? (
              <div></div>
            ):(
              videos.map((video,i)=>(
                (<div className='w-25 mb-3' key={video.id}>
                  <Link  to={`/video/${video.id}`} id="videos_link" >
                    <ThumbnailVideo {...video}/>
                  </Link>
                </div>
                ) 
             ))
            )}
        </div>
      </div>
    </div>
  )
}
