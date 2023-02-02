import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import './Signup.css';


const studentDetail = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    reg_id: "",
    fullname: "",
    std_address: "",
    std_email: "",
    guard_name: "",
    guard_num: ""
  });

  const { reg_id, fullname, std_address, std_email, guard_name, guard_num } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { reg_id, fullname, std_address, std_email, guard_name, guard_num };
      const response = await fetch(
        "http://localhost:5000/dashboard/getstudents",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Student Added");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
    </>
  );
};

export default studentDetail;