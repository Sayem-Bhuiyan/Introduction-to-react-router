import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const{id, title, body} = post;
    const nevigate = useNavigate()

    const handleShowDetails = () => {
        nevigate(`/posts/${id}`)
    }

    return (
        <div style={{
            border: '2px solid blue',
            borderRadius: '15px',
            padding: '15px',
            margin: '10px'
        }}>
            <h4>{id}</h4>
            <h4>{title.slice(0, 20)}</h4>
            <p>{body.slice(0, 50)}</p>
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleShowDetails}>Click to show details</button>
        </div>
    );
};
Post.propTypes ={
    post: PropTypes.object,
}

export default Post;