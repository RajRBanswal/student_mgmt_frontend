import React, { useEffect, useState } from 'react'
import { useStudent } from '../helpers/StudentContext'
import { useContext } from 'react';

const studentDashboard = () => {
    const userData = useStudent();

    return (
        <div>
            <h1>welcome {userData?.name}</h1>
        </div>
    )
}

export default studentDashboard