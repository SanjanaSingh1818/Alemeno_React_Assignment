import React from "react";
import {Link} from "react-router-dom"

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1 className="userName=text-3xl font-extrabold">Sanjana Singh</h1>
                <table style={{'border':'2px solid black'}}>
                    <tr>
                        <th className="dashboard">Enrolled Courses</th>
                        <th className="dashboard">Progress(%)</th>
                    </tr>
                    <tr>
                        <td className="dashboard">
                        <Link to="courses">
                           Data Science and AI
                        </Link>
                        </td>
                        <td className="dashboard">70</td>
                    </tr>
                    <tr>
                        <td className="dashboard">
                        <Link to="courses">
                            Deep Learning Specialization
                        </Link>
                        </td>
                        <td className="dashboard">50</td>
                    </tr>
                    <tr>
                        <td className="dashboard">
                        <Link to="courses">
                            Amazon Web Services
                        </Link> 
                        </td>
                        <td className="dashboard">80</td>
                    </tr>
                    <tr>
                        <td className="dashboard">
                        <Link to="courses">
                            Front-End Web Development
                        </Link> 
                        </td>
                        <td className="dashboard">90</td>
                    </tr>
                    <tr>
                        <td className="dashboard">
                        <Link to="courses">
                        React Basics: Meta                            
                        </Link> 
                        </td>
                        <td className="dashboard">95</td>
                    </tr>
                </table><br />
                <p><b>Instructor name: </b> Pro. Akhtar Hussain </p>
            </div>
        );
    }
}

export default AboutPage;
