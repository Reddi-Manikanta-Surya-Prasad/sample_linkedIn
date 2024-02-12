import React, { useState } from "react";
import { Button, Col, Form, Input, Modal, Progress, Row } from "antd";
import { AiOutlinePicture } from "react-icons/ai";
import ReactQuill from "react-quill";
import "./index.scss";
import TextArea from "antd/es/input/TextArea";
import { createPost } from "../../../utils/user/post";
import { toast } from "react-toastify";

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
  const [imageUpload, setImageUpload] = useState(null);

  const handleFileUpload = (event) => {
    setImageUpload(event.target.files[0]);
  };

  const handlingPostCreate = async (values) => {
    const formData = new FormData();
    formData.append("title", "PostTitle02");
    formData.append("content", values["content"]);
    formData.append("images", imageUpload);

    const creatingPost = await createPost(formData);
    if (creatingPost.status === 201) {
      toast.success("You created a new post");
      form.resetFields();
      setImageUpload(null);
      setModalOpen(false);
    } else {
      toast.error("Something went wrong");
    }
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
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={(event) => handleFileUpload(event)}
          />
          <Button type="primary" htmlType="submit">
            Post
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default ModalComponent;
