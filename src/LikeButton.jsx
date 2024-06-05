import { useState } from "react"
export default function LikeButton(){
    let [isLiked,setIsLiked] =useState(false)
   
    let [click,setClicks]=useState(0);
    let toggleLike=()=>{
    setIsLiked(!isLiked);
    setClicks(click+1);
    }
    let styles={
        color:"red"
    }
    return(
        <div>
            <p>Clicks:{click}</p>
            <p onClick={toggleLike} >
                {
                    isLiked ? <i class="fa-solid fa-heart" style={styles} ></i>: <i class="fa-regular fa-heart"></i>
                }

                {/* {isLiked.toString()} */}
              </p>
        </div>
    )
}