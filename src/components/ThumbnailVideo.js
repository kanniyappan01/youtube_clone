import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from 'react'

const ThumbnailVideo = ({id,channel,description,duration,logo,link,name,subscribers,thumbnail,uploadTime,views}) => {
  return (
    <div >
      <div className='video_box'>
        <img src={thumbnail} className="thumbnail-img"/>
        <p className='dutn_time'>{duration}</p>
      </div>
      <div className='discrption_box d-flex my-2'>
        <img src={logo} alt='channel_logo' width="35px" height="35px" className='channel_logo'/>
        <div className='thumb_box_con'>
          <p className='discription_para mb-1'>{name}</p>
          <p className='chan_dtl' >{channel}  {<CheckCircleIcon id='verified_icon'/>}</p>
          <p className='chan_dtl'>{views} Views・{uploadTime}</p>
        </div>
      </div>
    </div>
  )
}

export default ThumbnailVideo