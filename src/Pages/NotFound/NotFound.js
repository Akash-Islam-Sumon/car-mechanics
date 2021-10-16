import React from 'react';
import { Link } from 'react-router-dom';
import notfound from "../../images/404/404.png"

const NotFound = () => {
    return (
        <div>
            <h3>Page not found</h3>
            <img src={notfound} alt="" />
            <Link to="/"><br /><button className="mt-5 bg-warning p-2 ">Go to Back</button></Link>
            
        </div>
    );
};

export default NotFound;