import { useParams } from "react-router"
import { useState, useEffect } from "react"

 const PostDetails = () => {
    const postID = useParams();
    console.log(postID);

    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postID.id}`)
        .then(res => res.json())
        .then(data => {
          setPost(data)
          setLoading(false)
    })
    }, [postID])
    
    if(loading) {
      return <h2>Loading......</h2>
    }

  return (
    <>
      <h2>PostDetails of Post id : {postID.id}</h2>
      <h3>Title: {post?.title}</h3>
      <p>Description: {post?.body} </p>
    </>
  )
}
export default PostDetails