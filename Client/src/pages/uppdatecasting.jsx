import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import axios from "axios";
import React, { Component } from "react";
import { Form } from "react-bootstrap";



export class updatepostes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      imageselected: [],
      title: props.post.title,
      content: props.post.content,
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
    const { imageselected, title, content } =
      this.state;
    const formData = new FormData();
    formData.append("file", imageselected);
    formData.append("upload_preset", "kgiezron");
    if(imageselected){
    await axios
      .post("https://api.cloudinary.com/v1_1/dm1xlu8ce/upload", formData)
      .then((res) => {
    
        axios.put("https://abdelwahebbouden.com/api/update/casting/"+id, {
         
            title: title,
            content: content,
            imagee:res.data.url,
          })
          
          .then((res) => {
            if (res.data === "post updated") {
              window.location.href = "https://abdelwahebbouden.com/";
            }
           
          })

          })
        }else{

            axios
              .put("https://abdelwahebbouden.com/api/update/casting/"+ id, {
                title: title,
                content: content,
                video: this.props.post.video,
              })
              .then((res) => {
                if (res.data === "post updated") {
                  window.location.href = "https://abdelwahebbouden.com/";
                }
        ;
              })
              .catch((err) => {
                console.log(err);
              });
        }
   

    this.handleClose();
  }
  render() {
    const { show,title,content } = this.state;
    return (
      <>
        <Button
          variant="primary"
          onClick={() => this.handleShow()}
          id="postbutton3"
        >
          Modifier le casting
        </Button>
        <Modal show={show} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                Choose your video or photo
              </label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.handleClose()}
              id="postbutton1"
            >
              Ferme
            </Button>
            <Button
              variant="primary"
              onClick={() => this.addnewpost()}
              id="postbutton"
            >
              Sauvgarder
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default updatepostes;
