import React from 'react'

const RecommentedVideo = ({thumbnail,name,channel,views,uploadTime}) => {
  return (
    <div className='recomneted_box mb-2 d-flex'>
        <div>
        <img src={thumbnail}
            alt="recomneted video"
            className='recomented_videos'
        />
        </div>
        <div className='recom_detials'>
            <p className='content'>{name}</p>
            <p className='channel_name'>{channel}{}</p>
            <span>{views}  Views・ {uploadTime}</span>
        </div>
    </div>
  )
}

export default RecommentedVideo