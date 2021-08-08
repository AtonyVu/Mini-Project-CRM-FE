import React, { Component } from "react";
import "./css.css";
import axiosFetch from "../../axios";
export default class User extends Component {
  clickUser = (data) => {
    this.props.profile(data);
  };
  deleteUser = async (id) => {
    console.log(id);
    await axiosFetch(
      `https://mini-project-crm-api.herokuapp.com/api/v1/users/${id}`,
      "DELETE",
      null
    )
      .then((result) => {
        console.log(result);
        this.props.deleteUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const data = this.props.dataItem;
    return (
      <div
        className="User_container"
        onClick={() => {
          this.clickUser(data);
        }}
      >
        <div className="User_container_content">
          <img src="https://static.toiimg.com/thumb/resizemode-4,msid-76729536,width-1200,height-900/76729536.jpg"></img>
          <div>
            <p>{data.name}</p>
            <p>{data.email}</p>
          </div>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-ellipsis-v"></i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Sửa
              </a>
            </li>
            <li
              onClick={() => {
                this.deleteUser(data._id);
              }}
            >
              <a class="dropdown-item" href="#">
                Xóa
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
