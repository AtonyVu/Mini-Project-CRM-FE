import React, { Component } from "react";
import "./css.css";
import axiosFetch from "../../axios";
export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      sdt: "",
      address: "",
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
    this.createUser();
    console.log(this.state);
  };
  createUser = () => {
    axiosFetch(
      "https://mini-project-crm-api.herokuapp.com//api/v1/users",
      "POST",
      this.state
    )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Thêm User
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
                        onChange={this.handleOnchange}
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Send message
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
