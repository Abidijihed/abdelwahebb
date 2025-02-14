import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import axios from "axios";
import React, { Component } from "react";
import { Form } from "react-bootstrap";



export class addnewtext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      imageselected: [],
      title: props.post.title,
      content: props.post.content,
      bigTitle:props.post.bigTitle
     
     
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
    var id=this.props.post.id
    const { imageselected, bigTitle, title, content } =
      this.state;
    var datavideo = "";
    var dataimage = "";
    const formData = new FormData();
    formData.append("file", imageselected);
    formData.append("upload_preset", "kgiezron");
    if(imageselected.length>0){
    await axios
      .post("https://api.cloudinary.com/v1_1/dm1xlu8ce/upload", formData)
      .then((res) => {
        axios.put("https://abdelwahebbouden.com/api/get/updatepostText/"+id, {
            bigTitle:bigTitle,
            title: title,
            content: content,
            imagees: res.data.url,
          })
          .then((res) => {
            if (res.data === "update done") {
              window.location.href = "https://abdelwahebbouden.com/";
            }
           
          })
          })
        }else{
            axios.put("https://abdelwahebbouden.com/api/get/updatepostText/"+id, {
            bigTitle:bigTitle,
            title: title,
            content: content,
            imagees: "undefinde",
          })
          .then((res) => {
            if (res.data === "update done") {
              window.location.href = "https://abdelwahebbouden.com/";
            }
          
          }).catch((err)=>{
            console.log(err)
          })
        }
   

    this.handleClose();
  }
  render() {
    const { show,title,content,bigTitle } = this.state;
    return (
      <>
        <Button
          variant="primary"
          onClick={() => this.handleShow()}
          id="postbutton1"
        >
          Modifier le texte
        </Button>

        <Modal show={show} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Grand Titre"
                name="bigTitle"
                onChange={(e) => this.handleChange(e)}
                value={bigTitle}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Sous Titre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                name="title"
                onChange={(e) => this.handleChange(e)}
                value={title}
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
                value={content}
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
                Choose your Photo
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

export default addnewtext;
