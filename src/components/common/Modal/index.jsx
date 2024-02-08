import React, { useState } from "react";
import { Button, Col, Form, Input, Modal, Progress, Row } from "antd";
import { AiOutlinePicture } from "react-icons/ai";
import ReactQuill from "react-quill";
import "./index.scss";
import TextArea from "antd/es/input/TextArea";
import { createPost } from "../../../utils/user/post";

const ModalComponent = ({
  modalOpen,
  setModalOpen,
  sendStatus,
  setStatus,
  status,
  isEdit,
  updateStatus,
  uploadPostImage,
  setPostImage,
  postImage,
  currentPost,
  setCurrentPost,
}) => {
  const [form] = Form.useForm();
  const [progress, setProgress] = useState(0);

  const handlingPostCreate = async (values) => {
    console.log(values);
    const body = {
      title: "postTitle01",
      content: values["content"],
      images: "postImage01",
    };

    const creatingPost = await createPost(body);
    console.log(creatingPost);
    // if(creatingPost.status ===) {
  };

  return (
    <>
      <Modal
        title="Create a post"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
      >
        <Form
          form={form}
          name="basic"
          onFinish={handlingPostCreate}
          autoComplete="off"
        >
          <Form.Item
            name="content"
            rules={[
              {
                required: true,
                message: "Please write something to create post!",
              },
            ]}
          >
            <TextArea placeholder="What do you want to talk about?" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Post
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default ModalComponent;
