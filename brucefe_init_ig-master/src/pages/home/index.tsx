import IgContainer from "components/IgContainer";
import IgHeader from "components/IgHeader";
import IgStories from "./components/IgStories";
import IgUser from "components/IgUser";
import IgPost from "./components/IgPost";
import IgProfile from "./components/IgProfile";

const Home: React.FC = () => {

  const posts = [
    {
      "id": 1,
      "location": "布魯斯前端",
      "account": "bruce_1234",
      "avatar": "/images/avatars/a1.png",
      "photo": "/images/posts/main1.png",
      "likes": 999,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "1 HOURS AGO"
    },
  ]

  return <>
    <IgHeader></IgHeader>
    <IgContainer>
      <div className="flex lg:justify-center">
        <div className="w-full lg:w-[600px]">
          <IgStories></IgStories>
          {
            posts.map(post => <IgPost
              account={post.account}
              location={post.location}
              avatar={post.avatar}
              photo={post.photo}
              likes={post.likes}
              description={post.description}
              hashTags={post.hashTags}
              createdTime={post.createTime}
            />)
          }
        </div>
        <div className="hidden lg:block lg:w-[424px]">
          <IgProfile/>
        </div>
      </div>
    </IgContainer>
  </>;
};

export default Home;
