import { useEffect, useRef } from "react";


const Main: React.FC = () => {
  
  const $ = (selector: string) => {
    return document.querySelector(selector)
  }

  const elHeadline = useRef<HTMLHeadingElement>(null)
  console.log('elHeadline',elHeadline.current);
  

  useEffect(()=>{
    console.group('useEffect')

      console.log($('#headline'));
      console.log(elHeadline.current);

    console.groupEnd()
    
  }, [])
  return (
    <main>
      <h1 id="headline">Headline</h1>
      <h2 ref={elHeadline}>Headline2</h2>
    </main>
  )
}

export default Main
