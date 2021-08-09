import React, { Component } from "react";
import axiosFetch from "../../../axios";
import "./css.css";
export default class ModalUser extends Component {
  constructor(props) {
    super(props);
    const { name, email, sdt, address } = props.dataUser;
    this.state = {
      name: name,
      email: email,
      sdt: sdt,
      address: address,
    };
  }
  handleOnchange = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.updateUser();
    console.log(this.state);
  };

  updateUser = () => {
    axiosFetch(
      `https://mini-project-crm-api.herokuapp.com/api/v1/users/${this.props.dataUser._id}`,
      "PATCH",
      this.state
    )
      .then((result) => {
        console.log(result);

        alert("ok roi do ");
        this.props.handleUpdate();
        const myModal = document.getElementById("btn-close2");
        myModal.click();
      })
      .catch((err) => {
        console.log(err);
        console.log("loi roi ");
      });
  };
  render() {
    const { name, email, sdt, address } = this.state;
    return (
      <div>
        <div className="ModalUser">
          <div
            className="modal fade"
            id="exampleModal1"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Update User
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Name:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        name="name"
                        onChange={this.handleOnchange}
                        value={name}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        email:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        name="email"
                        value={email}
                        onChange={this.handleOnchange}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        SDT:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        name="sdt"
                        value={sdt}
                        onChange={this.handleOnchange}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        Address:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        name="address"
                        value={address}
                        onChange={this.handleOnchange}
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        id="btn-close2"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        UPDATE
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
