// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

// // import { useNavigate } from "react-router-dom";

// const DivFirst = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   min-height: 100vh;
//   /* background-image: url(https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg); */
//   background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11a0cc95-aa8d-48be-bc47-e55baa6ecacc/dfxjg2l-920fb5aa-1279-41f4-bff4-e437d234eaac.png/v1/fill/w_1280,h_718,q_80,strp/luxury_city_18_by_mholtsmeier_dfxjg2l-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzE4IiwicGF0aCI6IlwvZlwvMTFhMGNjOTUtYWE4ZC00OGJlLWJjNDctZTU1YmFhNmVjYWNjXC9kZnhqZzJsLTkyMGZiNWFhLTEyNzktNDFmNC1iZmY0LWU0MzdkMjM0ZWFhYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.pGa8-WPOpzfOVD8sUs9MdohHM5Mw4h1qcnphD4HgX3Q);
//   background-repeat: no-repeat;
//   background-size: cover;
//   padding: 20px;
// `;
// const Div = styled.div`
//   border: 2px solid silver;
//   border-radius: 10px;
//   width: 600px;
//   background-color: rgba(0, 0, 0, 0.5);
//   padding: 20px;
// `;
// const LoginForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const InputWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

// const Label = styled.label`
//   margin: 10px 0;
//   color: yellow;
//   font-size: 25px;
// `;

// const InputField = styled.input`
//   padding: 8px;
//   width: 350px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const SubmitButton = styled.button`
//   padding: 10px 20px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   margin-top: 10px;
//   width: 120px;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const Login = () => {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // if (validate()) {
//     //   fetch(
//     //     "https://api.elchocrud.pro/api/v1/545c8632a8ac7732977569470bef8d7e/trello" +
//     //       name
//     //   )
//     //     .then((res) => res.json())
//     //     .then((res) => {
//     //       console.log(res);
//     //       navigate("/home");
//     //     })
//     //     .catch((err) => {
//     //       console.log(err);
//     //     });
//     // }

//     if (name === "Joe" && password === "123") {
//       navigate("/home");
//     } else {
//       alert("Tuura emes");
//     }
//   };

//   const validate = () => {
//     if (!name.trim()) {
//       alert("Tuura jaz...");
//       return false;
//     }
//     if (!password.trim()) {
//       alert("Parol jaz...");
//       return false;
//     }
//     return true;
//   };

//   return (
//     <DivFirst>
//       <Div>
//         <LoginForm onSubmit={handleSubmit}>
//           <InputWrapper>
//             <Label htmlFor="username">User Name</Label>
//             <InputField
//               type="text"
//               value={name}
//               onChange={(event) => setName(event.target.value)}
//             />
//           </InputWrapper>
//           <InputWrapper>
//             <Label htmlFor="password">Password</Label>
//             <InputField
//               type="password"
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//             />
//           </InputWrapper>
//           <SubmitButton type="submit">Login</SubmitButton>
//         </LoginForm>
//       </Div>
//     </DivFirst>
//   );
// };

// export default Login;

//!===============================================

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import axios from "axios";

// const DivFirst = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   min-height: 100vh;
//   background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11a0cc95-aa8d-48be-bc47-e55baa6ecacc/dfxjg2l-920fb5aa-1279-41f4-bff4-e437d234eaac.png/v1/fill/w_1280,h_718,q_80,strp/luxury_city_18_by_mholtsmeier_dfxjg2l-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzE4IiwicGF0aCI6IlwvZlwvMTFhMGNjOTUtYWE4ZC00OGJlLWJjNDctZTU1YmFhNmVjYWNjXC9kZnhqZzJsLTkyMGZiNWFhLTEyNzktNDFmNC1iZmY0LWU0MzdkMjM0ZWFhYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.pGa8-WPOpzfOVD8sUs9MdohHM5Mw4h1qcnphD4HgX3Q);
// `;

// const Div = styled.div`
//   border: 2px solid silver;
//   border-radius: 10px;
//   width: 600px;
//   background-color: rgba(0, 0, 0, 0.2);
//   padding: 20px;
// `;

// const LoginForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const InputWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

// const Label = styled.label`
//   margin: 10px 0;
//   color: yellow;
//   font-size: 25px;
// `;

// const InputField = styled.input`
//   padding: 8px;
//   width: 350px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const SubmitButton = styled.button`
//   padding: 10px 20px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   margin-top: 10px;
//   width: 120px;
// `;

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (username === "Joe" && password === "123") {
//       navigate("/home");
//     } else {
//       alert("Неправильное имя пользователя или пароль");
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     if (name === "username") {
//       setUsername(value);
//     } else if (name === "password") {
//       setPassword(value);
//     }
//   };

//   return (
//     <DivFirst>
//       <Div>
//         <LoginForm onSubmit={handleSubmit}>
//           <InputWrapper>
//             <Label htmlFor="username">User Name</Label>
//             <InputField
//               type="text"
//               value={username}
//               onChange={handleInputChange}
//               name="username"
//             />
//           </InputWrapper>
//           <InputWrapper>
//             <Label htmlFor="password">Password</Label>
//             <InputField
//               type="password"
//               value={password}
//               onChange={handleInputChange}
//               name="password"
//             />
//           </InputWrapper>
//           <SubmitButton type="submit">Login</SubmitButton>
//         </LoginForm>
//       </Div>
//     </DivFirst>
//   );
// };

// export default Login;

//!=================================================================

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const DivFirst = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11a0cc95-aa8d-48be-bc47-e55baa6ecacc/dfxjg2l-920fb5aa-1279-41f4-bff4-e437d234eaac.png/v1/fill/w_1280,h_718,q_80,strp/luxury_city_18_by_mholtsmeier_dfxjg2l-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzE4IiwicGF0aCI6IlwvZlwvMTFhMGNjOTUtYWE4ZC00OGJlLWJjNDctZTU1YmFhNmVjYWNjXC9kZnhqZzJsLTkyMGZiNWFhLTEyNzktNDFmNC1iZmY0LWU0MzdkMjM0ZWFhYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.pGa8-WPOpzfOVD8sUs9MdohHM5Mw4h1qcnphD4HgX3Q);
`;

const Div = styled.div`
  border: 2px solid silver;
  border-radius: 10px;
  width: 600px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 10px 0;
  color: yellow;
  font-size: 25px;
`;

const InputField = styled.input`
  padding: 8px;
  width: 350px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
  width: 120px;
`;

const Login = () => {
  const [username, setUsername] = useState(
    localStorage.getItem("userName") || []
  );
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://api.elchocrud.pro/api/v1/545c8632a8ac7732977569470bef8d7e/trello",
        {
          username,
          password,
        }
      );
      console.log(response.data);
      if (response.data && username === "Joe" && password === "123") {
        localStorage.setItem("userName", username);
        navigate("/home");
      } else {
        alert("Tuura jaz...");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <DivFirst>
      <Div>
        <LoginForm onSubmit={handleSubmit}>
          <InputWrapper>
            <Label htmlFor="username">User Name</Label>
            <InputField
              type="text"
              value={username}
              onChange={handleInputChange}
              name="username"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <InputField
              type="password"
              value={password}
              onChange={handleInputChange}
              name="password"
            />
          </InputWrapper>
          <SubmitButton type="submit">Login</SubmitButton>
        </LoginForm>
      </Div>
    </DivFirst>
  );
};

export default Login;
