import React, { Component } from "react";
import $ from "jquery";
import Dashboard from "./Dashboard";
class SideNavPage extends Component {

    componentDidMount() {
        $("#wrapper").toggleClass("toggled");
    }

    viewSideBar = (event) => {
        event.preventDefault();
        $("#wrapper").toggleClass("toggled");
    }

    render() {
        return (
            <div>
                <div className="d-flex" id="wrapper">


                    <div className="bg-light border-right" id="sidebar-wrapper">
                        <div className="sidebar-heading">Start Bootstrap</div>
                        <div className="list-group list-group-flush">
                            <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
                            <a href="#" className="list-group-item list-group-item-action bg-light">Shortcuts</a>
                            <a href="#" className="list-group-item list-group-item-action bg-light">Overview</a>
                            <a href="#" className="list-group-item list-group-item-action bg-light">Events</a>
                            <a href="#" className="list-group-item list-group-item-action bg-light">Profile</a>
                            <a href="#" className="list-group-item list-group-item-action bg-light">Status</a>
                        </div>
                    </div>

                    <div id="page-content-wrapper">

                        <nav className="navbar navbar-expand-lg navbar-light bg-primary border-bottom text-white">
                            <button className="btn btn-secondary" id="menu-toggle" onClick={this.viewSideBar}><i className="fas fa-align-justify"></i></button>

                            <p style={{margin : "auto"}} className="mx-2"> Dashboard ></p>

                        </nav>
                        <Dashboard/>

                    </div>


                </div>
            </div>
        );
    }
}

export default SideNavPage;