import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import './UserList.css'
import data from "./dummyData.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
    guardian:"",
    guardiancon:"",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
    guardian:"",
    guardiancon:"",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
      guardian:addFormData.guardian,
      guardiancon:addFormData.guardiancon,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
      guardian:editFormData.guardian,
      guardiancon:editFormData.guardiancon
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
      guardian:contact.guardian,
      guardiancon:contact.guardiancon,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Guardian</th>
              <th>Guardian's Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add a Contact</h2>
      <div className="new5">
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Full Name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Address"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Phone number"
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Email"
          onChange={handleAddFormChange}
        />
         <input
          type="text"
          name="guardian"
          required="required"
          placeholder="Guradian's name"
          onChange={handleAddFormChange}
        />
         <input
          type="text" 
          name="guardiancon"
          required="required"
          placeholder="Guardian's contact"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
      </div>
      </div>
  
  );
};

export default App;

// const Student_detail = ({ setAuth }) => {
//   const [inputs, setInputs] = useState({
//     name: "",
//     address: "",
//     phone_num: "",
//     email: "",
//     guard_name: "",
//     guard_num: ""
//   });

//   const { name, address, phone_num, email, guard_name, guard_num } = inputs;

//   const onChange = e =>
//     setInputs({ ...inputs, [e.target.name]: e.target.value });

//   const onSubmitForm = async e => {
//     e.preventDefault();
//     try {
//       const body = { name, address, phone_num, email, guard_name, guard_num };
//       const response = await fetch(
//         "http://localhost:5000/dashboard/getstudents",
//         {
//           method: "POST",
//           headers: {
//             "Content-type": "application/json"
//           },
//           body: JSON.stringify(body)
//         }
//       );
//       const parseRes = await response.json();

//     } catch (err) {
//       console.error(err.message);
//     }
//   };