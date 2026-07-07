import React from 'react'

const StudentManagement = () => {
    return (
        <div>                            <div className="page-heading">
            <div className="page-heading-copy">
                <span className="page-icon"><i className="bi bi-speedometer2" aria-hidden="true"></i></span>
                <div>
                    <h1 className="h3 mb-1">Student Management</h1>
                    <p className="text-muted mb-0">Monitor performance, sales, users, and support from one clean workspace.</p>
                </div>
            </div>
            <div className="heading-actions"><button className="btn btn-outline-secondary btn-sm" type="button"><i className="bi bi-download" aria-hidden="true"></i> Export</button><button className="btn btn-primary btn-sm" type="button"><i className="bi bi-file-earmark-plus" aria-hidden="true"></i> Create Report</button></div>
        </div></div>
    )
}

export default StudentManagement