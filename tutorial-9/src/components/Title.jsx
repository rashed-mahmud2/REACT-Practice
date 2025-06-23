import React from "react";
function Title() {
    console.log("Rendering Title");
    
    return (
        <>
          <h2>UseCallback Hook Tutorial</h2>
        </>
    )
}

// export default Title
export default React.memo(Title)