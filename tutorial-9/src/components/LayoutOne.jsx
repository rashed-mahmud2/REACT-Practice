import useScreenSize from "../hooks/useScreenSize"


function LayoutOne() {
  const onSmallDevice = useScreenSize(768)

  return (
    <>
       <h1 id="heading">I am on {onSmallDevice ? "Small" : "Big"} Device</h1>
    </>
  )   
}

export default LayoutOne 
