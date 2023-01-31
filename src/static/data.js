import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';

import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';

import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';

import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';

import AccessTimeIcon from '@mui/icons-material/AccessTime';

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import WhatshotIcon from '@mui/icons-material/Whatshot';

import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';

import LiveTvIcon from '@mui/icons-material/LiveTv';

import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import FeedIcon from '@mui/icons-material/Feed';

import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

import DryCleaningOutlinedIcon from '@mui/icons-material/DryCleaningOutlined';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';

import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HelpIcon from '@mui/icons-material/Help';

import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import FeedbackIcon from '@mui/icons-material/Feedback';

const slideBarItems={
    top:[
        {icon: <HomeOutlinedIcon className='slbar-icons'/>  , name:"Home"},
        {icon:<VideoCameraFrontOutlinedIcon className='slbar-icons'/>  , name:"Shorts"},
        {icon:<SubscriptionsOutlinedIcon className='slbar-icons'/>  , name:"Subscription"},
    ],
    middle:[
        {icon:<VideoLibraryOutlinedIcon className='slbar-icons'/>  , name:"Library"},
        {icon:<HistoryOutlinedIcon className='slbar-icons'/>  , name:"History"},
        {icon:<OndemandVideoOutlinedIcon className='slbar-icons'/>  , name:"Your videos"},
        {icon:<AccessTimeIcon className='slbar-icons'/>  , name:"Wathch later"},
        {icon:<ThumbUpOutlinedIcon className='slbar-icons'/>  , name:"liked videos"},
    ],
    explore:[
        {icon:<WhatshotOutlinedIcon className='slbar-icons'/>  , name:"Trending"},
        {icon:<MusicNoteOutlinedIcon className='slbar-icons'/>  , name:"Music"},
        {icon:<MovieFilterOutlinedIcon className='slbar-icons'/>  , name:"Movies"},
        {icon:<LiveTvIcon className='slbar-icons'/>  , name:"Live"},
        {icon:<SportsEsportsOutlinedIcon className='slbar-icons'/>  , name:"Gaming"},
        {icon:<FeedOutlinedIcon className='slbar-icons'/>  , name:"News"},
        {icon:<EmojiEventsOutlinedIcon className='slbar-icons'/>  , name:"Sports"},
        {icon:<EmojiObjectsOutlinedIcon className='slbar-icons'/>  , name:"Learning"},
        {icon:<DryCleaningOutlinedIcon className='slbar-icons'/>  , name:"Fashion & Beauty"},
    ],
    setting:[
        {icon:<SettingsOutlinedIcon className='slbar-icons'/>  , name:"Setting"},
        {icon:<OutlinedFlagIcon className='slbar-icons'/>  , name:"Report history"},
        {icon:<HelpOutlineOutlinedIcon className='slbar-icons'/>  , name:"Help"},
        {icon:<FeedbackOutlinedIcon className='slbar-icons'/>  , name:"Send feedback"},
    ]
}

export const categoryItem = [
    "All","Music","Mixes","Comedy","JavaScripts","Live","Gadgets","Lessons","Recently uploaded","Watched","New to you",
    ,"Cooking"
]

export default slideBarItems;