import { useEffect, useState } from "react";
import UserItem from "../userItem/UserItem";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => {
                    setUsers(data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
        }, 5000);
    }, []);


    if (loading) {
        return <p>Cargando usuarios...</p>;
    }

    if (error) {
        return <p>Ocurrió un error al cargar los usuarios</p>;
    }

    return (
        <>
            <h2>Lista de usuarios</h2>
            <ul>
                {users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </ul>
        </>
    );
};

export default UserList;
