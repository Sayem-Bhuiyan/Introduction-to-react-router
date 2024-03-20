import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData()
    const {userId, title} = post;
    return (
        <div>
            <h4>Post UserId : {userId} </h4>
            <h3>{title}</h3>
        </div>
    );
};

export default PostDetails;