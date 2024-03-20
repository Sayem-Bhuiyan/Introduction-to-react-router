import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, username, phone} = user;
    const divStyle = {
        border: '2px solid yellow',
        padding: '5px',
        margin: '10px',
        textAlign: 'center',
        borderRadius: '15px'
    }
    return (
        <div style={divStyle}>
            <h4>{id}</h4>
            <h3>Name: {name}</h3>
            <h4>Phone: {phone.split(' ')[0]}</h4>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button>Click me</button>
            </Link>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object,
}

export default User;