import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button, IconButton, TextField } from '@mui/material';
import { addDoc, collection, doc, onSnapshot, query } from 'firebase/firestore';
import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import { db, timeStamp } from '../FireBase';
import {useDispatch,useSelector} from 'react-redux';
// import {} from '../slices/UserSlice'

import ButtonGroup from '@mui/material/ButtonGroup';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SortIcon from '@mui/icons-material/Sort';
import { async } from '@firebase/util';
import RecommentedVideo from '../components/RecommentedVideo';

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const [data, setData] = useState(null);

  // const dispatch = useDispatch();
  // const user = useSelector(state => state.user);
  // console.log(user)

  const {id} = useParams();
  useEffect(() => {
    if(id){
      const q = query(doc(db,"videos",id));
      onSnapshot(q,(snapshot) => {
        setData(snapshot.data());
      });
      // const commentsQuery = query(db,"videos",id,"comments");
      // onSnapshot(commentsQuery,(snapshot)=>{
      //   setComments(
      //     snapshot.docs.map((doc)=>({
      //       ...doc.data(),
      //       id:doc.id
      //     }))
      //   )
      // })
    }
  }, [id])
 
  // useEffect(()=>{
  //   if(id)
  // },[])


  const handleComment = async (e)=>{
    e.preventDefault();
    let comment = {
      // image: user.photoUrl,
      // name:user.displayTime,
      comments,
      uploadTime:timeStamp,
    };
    if(id){
      await addDoc(collection(db,"videos",id,"comments"),comment);
      setComments("")
    }
  }

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
  
  return (
    <section className='video_page'>
      <div className='container mt-4'>
        <div className='row'>
          <div id='primary'>
            <div className='inner_primary ml-3 mx-1'>
              <iframe className='video_screen' src={`https://www.youtube.com/embed/${data?.link}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <h5 className='my-2'>{data?.name}</h5>
            <div className='video_detials mb-3 justify-content-between d-flex'>
              <div className='owner_dtl d-flex align-items-center'>
                <img src={data?.logo} alt='channel_logo' className='channel_logo'/>
                <div className='channel_dtl mx-3'>
                  <p>{data?.channel}  {<CheckCircleIcon id='verified_icon'/>}</p>
                  <span>{data?.subscribers} subscribers</span>
                </div>
                <Button id='sub_btn'>subscribe</Button>
              </div>
              <div className='like_detials d-flex align-items-center'>
                  <ButtonGroup
                  disableElevation
                  variant="contained"
                  aria-label="Disabled elevation buttons"
                  id="like_grp"
                  >
                  <Button id="like_btn" startIcon={< ThumbUpOutlinedIcon/>}>121K</Button>
                  <Button id="like_btn" startIcon={< ThumbDownOffAltOutlinedIcon/>}></Button>
                </ButtonGroup>
                <Button id="control_btn" startIcon={< ReplyOutlinedIcon/>}>share</Button>
                <Button id="control_btn" startIcon={< ContentCutIcon/>}>share</Button>
                <IconButton id="dtl control_btn"><MoreHorizIcon /></IconButton>
              </div>
              
            </div>
            <div className='discription_dtl mb-3'>
              <span>{`${data?.views} views  ${data?.uploadTime} #40 on Trending`}</span>
              <p className='m-0'>{data?.description}</p>
            </div>
            <div className='comment_wraper'>
              <div className='cmt_dtl mb-3'>
                <span className='cmt'>{comments.length} Comments</span>
                {/* <span><SortIcon/>Sort by</span> */}
                <Button id="sort_btn" startIcon={<SortIcon/>}>Sort by</Button>
              </div>
              <div className='form_wraper d-flex flex-wrap'>
                <div className='mx-2'><img src={data?.logo} alt='channel_logo' className='cmt_icon'/></div>
                <form className='cmt_inner' onSubmit={handleComment}>
                  <TextField id="standard-basic" label="Add a comments..." variant="standard" fullWidth value={comments} onChange={(e)=> setComments(e.target.value)} />
                </form>
              </div>
            </div>
          </div>
          <div id='secondary'>
            <div>
              {
                videos.map((video,i)=>{
                  if(video.id !== id){
                    return(
                      <Link key={i} to={`/video/${video.id}`}>
                        <RecommentedVideo {...video}/>
                      </Link>
                    )
                  }
                })
              }
            </div>
          </div>
        </div>
    </div>
    </section>
  )
}

export default Video;