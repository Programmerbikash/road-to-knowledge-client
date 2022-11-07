import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { fullName } = useContext(AuthContext);
    console.log(fullName);

    return (
        <div>
            <form action="">
                <input type="text" name="name" id="" />
            </form>
        </div>
    );
};

export default Login;