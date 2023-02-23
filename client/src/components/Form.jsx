import React from "react";
import { Form, Input } from "antd";

const FormCompo = ({ formValue, onFormChange }) => {
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        valuePropName="name"
        rules={[
          {
            required: true,
            message: "Please input new email!",
          },
        ]}
      >
        <Input name="name" value={formValue.name} onChange={onFormChange} />
      </Form.Item>

      <Form.Item
        label="Email"
        valuePropName="email"
        rules={[
          {
            required: true,
            message: "Please input new email!",
          },
        ]}
      >
        <Input name="email" value={formValue.email} onChange={onFormChange} />
      </Form.Item>

      <Form.Item
        label="Phone"
        valuePropName="phone"
        rules={[
          {
            required: true,
            message: "Please input new phone!",
          },
        ]}
      >
        <Input name="phone" value={formValue.phone} onChange={onFormChange} />
      </Form.Item>

      <Form.Item
        label="Website"
        name="website"
        valuePropName="website"
        rules={[
          {
            required: true,
            message: "Please input new website!",
          },
        ]}
      >
        <Input
          name="website"
          value={formValue.website}
          onChange={onFormChange}
        />
      </Form.Item>
    </Form>
  );
};

export default FormCompo;
