import React from "react";
import CreateStudent from "./components/create/Create";
import ReadandDelete from "./components/read-delete/Read-Delete";
import Update from "./components/update/Update";

import "./assets/css/styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar (Vertical Navigation) */}
          <div
            className="col-sm-2"
            style={{ backgroundColor: "#f8f9fa", paddingTop: "40px" }}
          >
            <ul className="nav flex-column" style={{ marginTop: "40px" }}>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#Create"
                  role="tab"
                  aria-controls="Create"
                  aria-selected="true"
                >
                  Create
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#ReadandDelete"
                  role="tab"
                  aria-controls="ReadandDelete"
                  aria-selected="false"
                >
                  Read and Delete
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#Update"
                  role="tab"
                  aria-controls="Update"
                  aria-selected="false"
                >
                  Update
                </a>
              </li>
            </ul>
          </div>

          {/* Main Content Area */}
          <div className="col-sm-10">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="Create"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <CreateStudent />
              </div>
              <div
                className="tab-pane fade"
                id="ReadandDelete"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <ReadandDelete />
              </div>
              <div
                className="tab-pane fade"
                id="Update"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <Update />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
