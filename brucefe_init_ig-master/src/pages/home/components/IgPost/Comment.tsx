
interface CommentProps{
  likes: number
  account: string
  description: string
  createdTime: string
  hashtags: string
}

const Comment: React.FC<CommentProps> = ({
  likes,
  account,
  description,
  createdTime,
  hashtags
}) => {
  return (
    <div className="px-4">
      <div className="flex justify-between box-border mt-4 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[28px] w-[28px] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[28px] w-[28px] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[28px] w-[28px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </div>
      <p className="text-sm font-bold mb-2">{likes} likes</p>
      <p className="text-sm">
        <span className="text-sm font-bold inline-block mr-1">{account}</span>
        {description}
      </p>
      <div className="text-blue-900 text-sm">{hashtags}</div>
      <div className="text-gray-400 text-[10px] mt-1">{createdTime}</div>
    </div>
  )
}

export default Comment