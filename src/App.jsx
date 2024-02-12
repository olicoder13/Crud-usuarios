import { useEffect, useState } from "react";
import "./App.css";
import useCrud from "./assets/hooks/useCrud";
import FormUser from "./assets/components/FormUser";
import CardUser from "./assets/components/CardUser";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [editUser, setEditUser] = useState();
  const url = "https://users-crud.academlo.tech/";
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url);

  useEffect(() => {
    getUsers("/users/");
  }, []);
  //console.log(users);
  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="container">
      <h1 className="titulo_principal">Crud de usuarios</h1>
      <button className="btn_principal" onClick={handleOpen}>+ Crear nuevo usuario</button>
      <FormUser
        createUser={createUser}
        editUser={editUser}
        updateUser={updateUser}
        setEditUser={setEditUser}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <div className="card__container">
        {users?.map((user) => (
          <CardUser
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setEditUser={setEditUser}
            setIsOpen={setIsOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
