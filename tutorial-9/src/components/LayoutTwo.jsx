import useScreenSize from "../hooks/useScreenSize"

function LayoutTwo() {
  const onSmallDevice = useScreenSize(576) 
  

    return (
        <>
          <h1 className={onSmallDevice ? "small" : "big"} >Layout Two</h1>
        </>
    )
}

export default LayoutTwo
