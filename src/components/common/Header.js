import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import LoadingDots from "./LoadingDots";

const Header = ({ loading, courses, authors }) => {
    let courseLink,
        authorLink,
        numCourses = courses.length + 0,
        numAuthors = authors.length + 0;

    if (numCourses > 0) {
        
        courseLink = (
            <NavLink to={"/courses"} activeClassName="active">
                Courses ({numCourses})
            </NavLink>
        );
       
    } else {
       
        courseLink = (
            <NavLink to={"/course"} activeClassName="active">
                Add Course
            </NavLink>
        );
    }

   
    if (numAuthors > 0) {
        
        authorLink = (
            <NavLink to="/authors" activeClassName="active">
                Authors ({numAuthors})
            </NavLink>
        );
        
    } else {
       
        authorLink = (
            <NavLink to="/author" activeClassName="active">
                Add Author
            </NavLink>
        );
    }

    const navSeparator = " | ";
    return (
        <nav>
            <NavLink exact to={"/"} activeClassName="active">
                Home
            </NavLink>
            {navSeparator}

            {courseLink}
            {navSeparator}

            {authorLink}
            {navSeparator}

            <NavLink to="/about" activeClassName="active">
                dashboard
            </NavLink>
            {loading && <LoadingDots interval={100} dots={20} />}
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired,
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
};

export default Header;
