import React, { useState } from "react";
import { Button, Col, Form, Input, Modal, Progress, Row } from "antd";
import { AiOutlinePicture } from "react-icons/ai";
import ReactQuill from "react-quill";
import "./index.scss";
import TextArea from "antd/es/input/TextArea";
import { createPost, updatePost } from "../../../utils/user/post";
import { toast } from "react-toastify";
import { FaRegImage } from "react-icons/fa6";

const ModalComponent = ({
  modalOpen,
  setModalOpen,
  fetchingPosts,
  isEdit,
  posts,
}) => {
  const [form] = Form.useForm();
  const [imageUpload, setImageUpload] = useState(null);

  const handleFileUpload = (event) => {
    setImageUpload(event.target.files[0]);
  };

  const handlingPostCreate = async (values) => {
    form.validateFields().then(async (formValues) => {
      const formData = new FormData();
      formData.append("title", formValues.content.slice(0, 2));
      formData.append("content", formValues.content);
      formData.append("images", formValues.image);

      if (isEdit !== true) {
        const creatingPost = await createPost(formData);
        if (creatingPost.status === 201) {
          toast.success("You created a new post");
          form.resetFields();
          setImageUpload(null);
          setModalOpen(false);
          fetchingPosts();
        } else {
          toast.error("Something went wrong");
        }
      } else {
        const updatingPost = await updatePost(formData, posts._id);
        if (updatingPost.status === 200) {
          toast.success("You updated your post");
          form.resetFields();
          setImageUpload(null);
          setModalOpen(false);
          fetchingPosts();
        } else {
          toast.error("Something went wrong");
        }
      }
    });
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
          initialValues={{
            content: posts !== null ? posts.content : null,
          }}
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
            {posts?.content ? (
              <TextArea
                defaultValue={posts.content}
                placeholder="What do you want to talk about?"
              />
            ) : (
              <TextArea placeholder="What do you want to talk about?" />
            )}
          </Form.Item>
          <Form.Item name="image">
            <input
              type="file"
              accept="image/*"
              onChange={(event) => handleFileUpload(event)}
            />
          </Form.Item>
          {/* <FaRegImage
            color="#666666"
            style={{ transform: "scaleX(-1)" }}
            type="file"
          /> */}
          <Button type="primary" htmlType="submit">
            {isEdit !== true ? "Post" : "Update"}
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default ModalComponent;
