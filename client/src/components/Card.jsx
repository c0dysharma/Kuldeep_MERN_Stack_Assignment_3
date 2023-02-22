import {
  EditOutlined,
  HeartOutlined,
  HeartFilled,
  DeleteFilled,
} from "@ant-design/icons";

import { Card } from "antd";
const { Meta } = Card;
import parse from "html-react-parser";

const CardBody = ({ userDetails }) => {
  return (
    <div>
      <p>{userDetails.email}</p>
      <p>{userDetails.phone}</p>
      <p>{userDetails.website}</p>
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
            style={{ color: "red" }}
            onClick={() => onLike(user._id)}
          />
        ) : (
          <HeartOutlined onClick={() => onLike(user._id)} />
        ),
        <EditOutlined onClick={() => onEdit(user._id)} />,
        <DeleteFilled onClick={() => onDelete(user._id)} />,
      ]}
    >
      <Meta title={user.name} description={<CardBody userDetails={user} />} />
    </Card>
  );
};

export default CardCompo;
