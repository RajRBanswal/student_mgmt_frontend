import React from "react";
import Facts from "./Facts";

const Home = () => {
    return (
        <>
            <div className="container py-5">
                <h1>Welcome in Home</h1>
                <Facts totalStudent="40" totalSubject="6" totalSem="6" />
            </div>

        </>
    )
}

export default Home;