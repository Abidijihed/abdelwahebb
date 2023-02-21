import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import axios from "axios";
import React, { Component } from "react";
import { Form } from "react-bootstrap";


export class addnewcasting extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      imageselected: [],
      title: "",
      content: "",
     
    };
  }
  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async addnewpost() {
    const { imageselected, title, content } =
      this.state;
      
    const formData = new FormData();
    formData.append("file", imageselected);
    formData.append("upload_preset", "kgiezron");
if (imageselected){
  await axios
    .post("https://api.cloudinary.com/v1_1/dm1xlu8ce/upload", formData)
    .then((res) => {
      axios
        .post("https://abdelwahebbouden.com/api/addnew/casting", {
          title: title,
          content: content,
          video: res.data.url,
          image:""
        })
        .then((res) => {
          if (res.data === "poste done") {
            window.location.href = "https://abdelwahebbouden.com/";
          }
        })
      
        .catch((err) => {
          console.log(err);
        })
      
    })
}else{
          axios
            .post("https://abdelwahebbouden.com/api/addnew/casting", {
              title: title,
              content: content,
              video: "",
              image: ""
            })
            .then((res) => {
              if (res.data === "poste done") {
                window.location.href = "https://abdelwahebbouden.com/";
              }
            })

            .catch((err) => {
              console.log(err);
            });
}
    this.handleClose();
  }
  render() {
    const { show, spiner } = this.state;
    return (
      <>
        <Button
          variant="primary"
          onClick={() => this.handleShow()}
          id="postbutton"
        >
          Ajouter un nouveau casting
        </Button>

        <Modal show={show} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                name="title"
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicContent">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                name="content"
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>
          

            <input
              type="file"
              accept="image/*,.mp4"
              name="image-upload"
              id="input"
              onChange={(event) =>
                this.setState({ imageselected: event.target.files[0] })
              }
            />
            <div className="label">
              <label className="image-upload" htmlFor="input">
                <AddAPhotoIcon />
                Choose your video
              </label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.handleClose()}
              id="postbutton1"
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => this.addnewpost()}
              id="postbutton"
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default addnewcasting;