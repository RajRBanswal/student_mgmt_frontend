import React from 'react'
import { useStudent } from '../helpers/StudentContext'

const SAttendence = () => {
    const userData = useStudent();
    return (
        <div>SAttendence {userData?.name}</div>
    )
}

export default SAttendence