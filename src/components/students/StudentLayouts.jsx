import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { StudentContext } from '../helpers/StudentContext'

const StudentLayouts = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null)
    const getSingleUserData = async () => {
        const token = localStorage.getItem("userToken");
        if (!token) {
            return navigate("/user-login")
        }
        try {
            const res = await fetch("http://localhost:8000/api/students/get_single_students", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const result = await res.json();

            if (result.status === 200) {
                setUserData(result.data);
            } else {
                setUserData(null)
                console.log(result.message);
                return navigate("/user-login")
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleUserData();
    }, [])
    return (
        <StudentContext.Provider value={userData}>
            <div className="admin-shell">
                <div className="sidebar-backdrop" data-sidebar-close></div>

                <aside className="admin-sidebar" id="adminSidebar" aria-label="Main navigation">
                    <div className="sidebar-header">
                        <a className="brand-mark" href="index.html" aria-label="adminHMD dashboard">
                            <span className="brand-icon"><i className="bi bi-grid-1x2-fill" aria-hidden="true"></i></span>
                            <span className="brand-copy">
                                <span className="brand-title">adminHMD</span>
                                <span className="brand-subtitle">{userData?.name}</span>
                            </span>
                        </a>
                    </div>

                    <nav className="sidebar-nav">
                        <a className="nav-link active" href="index.html" aria-current="page">
                            <span className="nav-icon"><i className="bi bi-speedometer2" aria-hidden="true"></i></span>
                            <span className="nav-text">Dashboard</span>
                        </a>
                        <a className="nav-link" href="users.html">
                            <span className="nav-icon"><i className="bi bi-people" aria-hidden="true"></i></span>
                            <span className="nav-text">Users</span>
                        </a>
                        <a className="nav-link" href="add-user.html">
                            <span className="nav-icon"><i className="bi bi-person-plus" aria-hidden="true"></i></span>
                            <span className="nav-text">Add User</span>
                        </a>
                        <a className="nav-link" href="profile.html">
                            <span className="nav-icon"><i className="bi bi-person-badge" aria-hidden="true"></i></span>
                            <span className="nav-text">Profile</span>
                        </a>
                        <Link className="nav-link" to="/students/student-attendence">
                            <span className="nav-icon"><i className="bi bi-bar-chart-line" aria-hidden="true"></i></span>
                            <span className="nav-text">My Attendence</span>
                        </Link>
                        <a className="nav-link" href="tables.html">
                            <span className="nav-icon"><i className="bi bi-table" aria-hidden="true"></i></span>
                            <span className="nav-text">Tables</span>
                        </a>
                        <a className="nav-link" href="forms.html">
                            <span className="nav-icon"><i className="bi bi-ui-checks-grid" aria-hidden="true"></i></span>
                            <span className="nav-text">Forms</span>
                        </a>
                        <a className="nav-link" href="components.html">
                            <span className="nav-icon"><i className="bi bi-grid-3x3-gap" aria-hidden="true"></i></span>
                            <span className="nav-text">Components</span>
                        </a>
                        <a className="nav-link" href="alerts.html">
                            <span className="nav-icon"><i className="bi bi-exclamation-triangle" aria-hidden="true"></i></span>
                            <span className="nav-text">Alerts</span>
                        </a>
                        <a className="nav-link" href="modals.html">
                            <span className="nav-icon"><i className="bi bi-window-stack" aria-hidden="true"></i></span>
                            <span className="nav-text">Modals</span>
                        </a>
                        <a className="nav-link" href="settings.html">
                            <span className="nav-icon"><i className="bi bi-gear" aria-hidden="true"></i></span>
                            <span className="nav-text">Settings</span>
                        </a>
                        <a className="nav-link" href="blank.html">
                            <span className="nav-icon"><i className="bi bi-file-earmark" aria-hidden="true"></i></span>
                            <span className="nav-text">Blank Page</span>
                        </a>
                    </nav>

                    <div className="sidebar-user">
                        <img className="avatar-img avatar-md sidebar-user-avatar" src="../assets/images/avatar/avatar.jpg" alt="Admin Hasan" />
                        <strong>Admin Hasan</strong>
                        <small>Active Workspace</small>
                    </div>

                    <div className="sidebar-footer">
                        <span className="status-dot"></span>
                        <span className="sidebar-footer-text">System running smoothly</span>
                    </div>
                </aside>

                <div className="admin-main">
                    <nav className="navbar admin-navbar navbar-expand bg-white">
                        <div className="container-fluid px-3 px-lg-4">
                            <button className="sidebar-toggle" type="button" data-sidebar-toggle aria-controls="adminSidebar" aria-expanded="true" aria-label="Toggle sidebar">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>

                            <form className="d-none d-md-flex ms-3 flex-grow-1" role="search">
                                <input className="form-control search-input" type="search" placeholder="Search users, orders, reports" aria-label="Search" />
                            </form>

                            <div className="navbar-actions ms-auto">
                                <button className="icon-button theme-toggle" type="button" data-theme-toggle aria-label="Switch color theme" title="Switch color theme">
                                    <i className="bi bi-moon-stars" data-theme-icon aria-hidden="true"></i>
                                </button>
                                <div className="dropdown">
                                    <button className="icon-button" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Notifications">
                                        <span className="notification-dot"></span>
                                        <i className="bi bi-bell" aria-hidden="true"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-end notification-menu">
                                        <div className="dropdown-header fw-bold text-body">Notifications</div>
                                        <a className="dropdown-item" href="users.html">
                                            <span className="notification-title">New user registered</span>
                                            <span className="notification-time">4 minutes ago</span>
                                        </a>
                                        <a className="dropdown-item" href="charts.html">
                                            <span className="notification-title">Revenue target reached</span>
                                            <span className="notification-time">32 minutes ago</span>
                                        </a>
                                        <a className="dropdown-item" href="settings.html">
                                            <span className="notification-title">Security review completed</span>
                                            <span className="notification-time">1 hour ago</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="dropdown">
                                    <button className="profile-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img className="avatar-img avatar-sm" src="../assets/images/avatar/avatar.jpg" alt="Admin Hasan" />
                                        <span className="profile-name d-none d-sm-inline">Admin Hasan</span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><a className="dropdown-item" href="profile.html">Profile</a></li>
                                        <li><a className="dropdown-item" href="settings.html">Account settings</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="login.html">Sign out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <main className="dashboard-content">
                        <div className="container-fluid px-3 px-lg-4 py-4">
                            <Outlet />

                        </div>
                    </main>
                </div>
            </div>
        </StudentContext.Provider>
    )
}

export default StudentLayouts