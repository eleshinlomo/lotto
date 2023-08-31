import { testDate } from "./test";

const getData = ()=>{
    return <RenderData person1 = {testDate.person1} />
}

export const RenderData = (()=>{
return (
    <>
   <RenderData />
   {getData()}
   </>
)
})