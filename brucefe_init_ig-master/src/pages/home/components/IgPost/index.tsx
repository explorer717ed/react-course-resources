import IgUser from "components/IgUser"
import Comment from "./Comment"

interface IgPostProps {
  account: string
  location: string
  avatar: string
  photo: string
  likes: number
  description: string
  hashTags: string
  createdTime: string
}

const IgPost: React.FC<IgPostProps> = ({
  account,
  location,
  avatar,
  photo,
  likes,
  description,
  hashTags,
  createdTime
}) => {

  
  return (
    <div className="shadow-md pb-4 lg:mb-8">
      <IgUser account={account} location={location} avatar={avatar}/>
      <img src={photo} alt="" />
      <Comment account={account} likes={likes} description={description} hashtags={hashTags} createdTime={createdTime}/>
    </div>
  )
}

export default IgPost