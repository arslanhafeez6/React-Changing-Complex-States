import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleEvent(event) {
    const inputName = event.target.name;
    const newValue = event.target.value;

    setContact((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue,
          email: prevValue.email
        };
      } else if (inputName === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: newValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleEvent}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleEvent}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleEvent}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
