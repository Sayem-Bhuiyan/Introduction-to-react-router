import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData()

    const {userId, title} = post;
    const nevigate = useNavigate();
    const handleGoBack = () => {
        nevigate(-1)
    }
    return (
        <div>
            <h4>Post UserId : {userId} </h4>
            <h3>{title}</h3>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;