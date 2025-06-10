import { useEffect, useState } from "react";

export default function Rendering() {
  const [userName, setUserName] = useState([]);
  const [email, setEmail] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((data) => {
        setUserName(data.map((user) => user.name));
        setEmail(data.map((user) => user.email));
      });
  }, []);

  // fetch("https://jsonplaceholder.typicode.com/users/")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setUserName(data.map((user) => user.name));
  //     setEmail(data.map((user) => user.email));
  //   });

  return (
    <div style={{ padding: "20px" }}>
      <h2>이름</h2>
      <ul>
        {userName.map((name) => {
          return <li>{name}</li>;
        })}
      </ul>

      <h2>이메일</h2>
      <ul>
        {email.map((email) => {
          return <li>{email}</li>;
        })}
      </ul>
    </div>
  );
}
