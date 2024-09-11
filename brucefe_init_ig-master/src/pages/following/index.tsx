import IgContainer from "components/IgContainer";
import IgHeader from "components/IgHeader";
import IgUser from "components/IgUser";

const Following: React.FC = () => {

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

  return <>
    <IgHeader></IgHeader>
    <IgContainer>
      <h1 className="my-8 font-bold text-2xl px-4 box-border">following</h1>
      <div className="shadow-md mt-8 mx-2 box-border">
        {
          friends.map(f=>{
            return(
              <div className="-mt-3" key={f.id}>
                <IgUser
                  location={f.location}
                  account={f.account}
                  showFollow
                  isFollowing={f.isFollowing}
                  avatar={f.avatar}
                />
              </div>
            )
          })
        }
      </div>
    

    </IgContainer>
  </>;
};

export default Following;
