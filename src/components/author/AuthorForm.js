import PropTypes from "prop-types";
import React from "react";
import TextInput from "../common/TextInput";



const AuthorForm = ({ author, onSave, onChange, saving, errors }) => {
    return (
        <form>
            <h1>Manage Author</h1>

            {/*<TextInput*/}
            {/*name="authorId"*/}
            {/*label="Author ID"*/}
            {/*value={author.authorId}*/}
            {/*onChange={onChange}*/}
            {/*error={errors.authorId}/>*/}

            <TextInput
                name="firstName"
                label="First Name"
                value={author.firstName || ""}
                onChange={onChange}
                error={errors.firstName}
            />

            <TextInput
                name="lastName"
                label="Last Name"
                value={author.lastName || ""}
                onChange={onChange}
                error={errors.lastName}
            />

            <input
                type="submit"
                disabled={saving}
                value={saving ? "Saving..." : "Save"}
                className="btn btn-primary"
                onClick={onSave}
            />
        </form>
    );
};

AuthorForm.propTypes = {
    author: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object,
};

export default AuthorForm;
