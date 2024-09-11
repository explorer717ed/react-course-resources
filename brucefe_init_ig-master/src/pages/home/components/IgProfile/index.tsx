import IgUser from "components/IgUser"

const IgProfile: React.FC = () => {

  const friends = [
    {
      id: 1,
      location: "Singapore",
      account: "max_999",
      isFollowing: true,
      avatar: "/images/avatars/a1.png",
    },
    {
      id: 2,
      location: "Singapore",
      account: "fm_999",
      isFollowing: true,
      avatar: "/images/avatars/a2.png",
    },
    {
      id: 3,
      location: "Singapore",
      account: "joanne_999",
      isFollowing: true,
      avatar: "/images/avatars/a3.png",
    },
    {
      id: 4,
      location: "Singapore",
      account: "focus_999",
      isFollowing: true,
      avatar: "/images/avatars/a4.png",
    },
  ]


  return (
    <div className="mt-8 ml-8 shadow-lg box-border p-2">
      <IgUser account="717" location="NZ" avatar="/images/avatars/a3.png" size="medium"/>
      <p className="font-bold text-gray-400 mt-4 mb-3 text-sm">You are following</p>
      {
        friends.map(f=>{
          return(
            <div className="-mt-3" key={f.id}>
              <IgUser
                location={f.location}
                account={f.account}
                isFollowing={f.isFollowing}
                avatar={f.avatar}
                showFollow
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default IgProfile