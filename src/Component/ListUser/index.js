import React, { Component } from "react";
import axiosFetch from "../../axios";
import "./css.css";
import User from "../User";
export default class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      DataSearchfi: [],
      searchfi: "",
      stateSearchfi: true,
      dataProfile: "",
      dataA: "",
      dataB: "",
      dataState: 1,
    };
  }
  fetchGetUser = () => {
    axiosFetch(
      "https://mini-project-crm-api.herokuapp.com/api/v1/users/",
      "GET",
      null
    )
      .then((result) => {
        this.setState({ data: result.data.data.users, loading: false });
        console.log(result.data.data.users);
        this.setState({
          dataProfile: result.data.data.users[0],
          dataA: result.data.data.users[0].name,
          dataB: result.data.data.users[0].email,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.fetchGetUser();
  }
  deleteUsers = () => {
    alert("Xoa Thanh cong");
    this.fetchGetUser();
  };
  handleOnchange = (e) => {
    console.log(e.target.value);
    this.setState({ searchfi: e.target.value });
  };
  renderUser = (data) => {
    return data.map((item) => {
      return (
        <User
          dataItem={item}
          profile={this.dataUserProfile}
          deleteUser={this.deleteUsers}
        />
      );
    });
  };
  clickSearch = () => {
    const search = document.getElementById("search_fi");
    if (this.state.stateSearchfi) {
      search.style.width = "150px";
      search.style.display = "inline";
      this.setState({ stateSearchfi: false });
    } else {
      search.style.width = "0px";
      search.style.display = "none";
      this.setState({ stateSearchfi: true });
    }
  };
  dataUserProfile = (data) => {
    console.log(data);
    this.setState({ dataProfile: data, dataA: data.name, dataB: data.email });
    this.setState({
      dataState: 2,
    });
    const wheel = document.getElementById("wheel_item1");
    const wheel2 = document.getElementById("wheel_item2");
    const wheel3 = document.getElementById("wheel_item3");
    wheel.style.height = "30px";
    wheel2.style.height = "10px";
    wheel3.style.height = "10px";
  };
  handleOnScroll = () => {
    if (this.state.dataState === 1) {
      this.setState({
        dataA: this.state.dataProfile.name,
        dataB: this.state.dataProfile.email,
        dataState: 2,
      });
      const wheel = document.getElementById("wheel_item1");
      const wheel2 = document.getElementById("wheel_item2");
      const wheel3 = document.getElementById("wheel_item3");

      wheel.style.height = "30px";
      wheel2.style.height = "10px";
      wheel3.style.height = "10px";
    }
    if (this.state.dataState === 2) {
      this.setState({
        dataA: this.state.dataProfile.sdt,
        dataB: this.state.dataProfile.address,
        dataState: 3,
      });
      const wheel = document.getElementById("wheel_item1");
      const wheel2 = document.getElementById("wheel_item2");
      const wheel3 = document.getElementById("wheel_item3");
      wheel.style.height = "10px";
      wheel2.style.height = "30px";
      wheel3.style.height = "10px";
    }
    if (this.state.dataState === 3) {
      this.setState({
        dataA: this.state.dataProfile.CurrentSigninAt,
        dataB: this.state.dataProfile.CurrentSigninAt,

        dataState: 1,
      });
      const wheel = document.getElementById("wheel_item1");
      const wheel2 = document.getElementById("wheel_item2");
      const wheel3 = document.getElementById("wheel_item3");
      wheel.style.height = "10px";
      wheel2.style.height = "10px";
      wheel3.style.height = "30px";
    }

    console.log(2);
  };
  render() {
    if (this.state.loading) {
      return "dang loading";
    }

    const DataSearch = this.state.data.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.state.searchfi.toLowerCase());
    });
    console.log(DataSearch);
    return (
      <div className="containerr">
        {/* <input
          type="text"
          onChange={this.handleOnchange}
          className="search_fi"
        /> */}
        <div className="ListUser_container">
          <div className="ListUser_container_menu">
            <h5>Tất Cả Liên Hệ</h5>
            <div className="ListUser_container_menu_icon">
              <input
                type="text"
                onChange={this.handleOnchange}
                className="search_fi"
                id="search_fi"
              />
              <i class="fas fa-search" onClick={this.clickSearch}></i>
              <i class="fas fa-filter"></i>

              <i
                class="fas fa-plus-circle text-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              ></i>
            </div>
          </div>
          <ul className="ListUser_container_ul">
            {this.renderUser(DataSearch)}
          </ul>
        </div>
        <div className="User_profile">
          <div className="User_profile_container">
            <div className="User_profile_container_content">
              <div className="User_profile_container_content_avatar">
                <img src="https://static.toiimg.com/thumb/resizemode-4,msid-76729536,width-1200,height-900/76729536.jpg" />
              </div>
              <div
                className="User_profile_container_content_text"
                onWheel={this.handleOnScroll}
              >
                <div
                  className="User_profile_container_content_text_text"
                  id="User_profile_container_content_text_text"
                >
                  <p className="text-primary">{this.state.dataA}</p>
                  <p className="text-primary">{this.state.dataB}</p>
                </div>
                <div className="User_profile_container_content_text_wheel">
                  <div className="item" id="wheel_item1"></div>
                  <div className="item" id="wheel_item2"></div>
                  <div className="item" id="wheel_item3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
