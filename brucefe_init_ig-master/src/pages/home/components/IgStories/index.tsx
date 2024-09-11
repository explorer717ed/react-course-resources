import Item from "./item"


const IgStories: React.FC = () => {
  const isLoading = false
  const data = [
    {
      id:1,
      name:'haha',
      avatar:"/images/avatars/a1.png"
    }
  ]

  
  return (
    <div className="w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8">
      { isLoading
        ? <div className="flex justify-center w-full">
          loading
          </div>
        : data?.map(({ id, name, avatar }) => <Item key={id} name={name} avatar={avatar} />)
      }
    </div>
  )
}

export default IgStories