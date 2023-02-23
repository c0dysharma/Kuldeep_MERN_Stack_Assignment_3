import {
  EditOutlined,
  HeartOutlined,
  HeartFilled,
  DeleteFilled,
} from "@ant-design/icons";
import { AiOutlineMail, BsGlobe, AiOutlinePhone } from "react-icons/all";

import { Card } from "antd";
const { Meta } = Card;
import parse from "html-react-parser";

const CardBody = ({ userDetails }) => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <AiOutlineMail />
        <span style={{ "margin-left": "10px" }}>{userDetails.email}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <BsGlobe />
        <span style={{ "margin-left": "10px" }}>{userDetails.website}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <AiOutlinePhone />
        <span style={{ "margin-left": "10px" }}>{userDetails.phone}</span>
      </div>
    </div>
  );
};

const CardCompo = ({ width, user, onLike, onEdit, onDelete }) => {
  const Image = ({ img }) => <div>{img}</div>;
  return (
    <Card
      style={{
        width,
      }}
      key={user._id}
      cover={<Image img={parse(user.displayImage)} />}
      actions={[
        user.isLoved ? (
          <HeartFilled
            style={{ fontSize: "20px", color: "red" }}
            onClick={() => onLike(user._id)}
          />
        ) : (
          <HeartOutlined
            style={{ fontSize: "20px", color: "red" }}
            onClick={() => onLike(user._id)}
          />
        ),
        <EditOutlined
          style={{ fontSize: "20px" }}
          onClick={() => onEdit(user._id)}
        />,
        <DeleteFilled
          style={{ fontSize: "20px" }}
          onClick={() => onDelete(user._id)}
        />,
      ]}
    >
      <Meta title={user.name} description={<CardBody userDetails={user} />} />
    </Card>
  );
};

export default CardCompo;
