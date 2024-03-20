import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData()
    console.log(users)
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)'
            }}>
                {
                    users.map(user => <User key={user.id} user={user} />)
                }
            </div>
        </div>
    );
};

export default Users;