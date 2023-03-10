import { Modal, List } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

import { Card, Form } from "./components";

function App() {
  const baseURL = "https://mern-stack-assignment-3.onrender.com";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    const result = await axios.get(`${baseURL}/api/v1/user`);

    if (result.data.success) setUser(result.data.data);
    else alert(result.data.message);
  };

  const updateUser = async (newUserData) => {
    const result = await axios.patch(`${baseURL}/api/v1/user`, {
      ...newUserData,
      id: newUserData._id,
    });

    if (result.data.success) getUsers();
    else alert(result.data.message);
  };

  const deleteUser = async (id) => {
    const result = await axios.delete(`${baseURL}/api/v1/user/${id}`);

    console.log(result.data);
    if (result.data.success) getUsers();
    else alert(result.data.message);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const [modelValue, setModelValue] = useState({});

  const handleOk = async () => {
    await updateUser(modelValue);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onLikeHandler = (id) => {
    const users = user.map((userVal) => {
      if (userVal._id === id) userVal.isLoved = !userVal.isLoved;
      return userVal;
    });
    setUser(users);
  };

  const onEditHandler = (id) => {
    const userVal = user.find((user) => user._id === id);
    setModelValue(userVal);
    setIsModalOpen(true);
  };

  const onDeleteHandler = async (id) => {
    await deleteUser(id);
    setIsModalOpen(false);
  };

  const handleFormChange = (e) =>
    setModelValue({ ...modelValue, [e.target.name]: e.target.value });

  return (
    <div>
      <Modal
        title="Edit User"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form formValue={modelValue} onFormChange={handleFormChange} />
      </Modal>

      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
          xxl: 5,
        }}
        dataSource={user}
        renderItem={(userVal) => (
          <List.Item>
            <Card
              key={userVal._id}
              user={userVal}
              onLike={onLikeHandler}
              onEdit={onEditHandler}
              onDelete={onDeleteHandler}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default App;
