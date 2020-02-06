import React, { useState } from "react";

const ChildForm = props => {
  const [child, setChild] = useState({
       first_name: "",
       last_name: "",
       grade: "",
       address: "",
       background: "",
       status: "",
       age: "",
       expiration_date: "",
       special_needs: "",
       representative_name: "",
       representative_contact: "",
   
  });

  const handleChanges = e => {
    setChild({
        ...child, [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewChild(child);
  };

  return (
    <form onSubmit={submitForm}>
                <label for="first_name">First Name:</label>
                <input
                    type="text"
                    name="first_name"
                    value={child.first_name}
                    onChange={handleChanges}
                />
                <label for="last_name">Last Name:</label>
                <input
                    type="text"
                    name="last_name"
                    value={child.last_name}
                    onChange={handleChanges}
                />
      <button type="submit">Add Child</button>
    </form>
  );
};

export default ChildForm;