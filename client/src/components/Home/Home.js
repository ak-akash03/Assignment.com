import React from "react";
import vectorimg from "../../IMAGE/VectorImg.png";
import "./Home.css";
import logo from "../../IMAGE/assignmentcom.png";

export default function Home() {
  return (
    <>
      {/* <div class="container">
        <div class="row">
          <div class="col colx">
            <img width={"100%"} src={vectorimg} alt="png"></img>
          </div>
          <div class="col coly">
            <div className="divCenter">
              <img width={"100%"} src={logo} alt="png"></img>
            </div>
            <h4 className="text-center">
              A Goal Without A Plan Is Just A Wish.
            </h4>
            <h5 className="text-center">
              The Best Way To Get A Project Done Faster Is To Start Sooner.
            </h5>

            <div className="text-center my-5">
              <button type="button" class="btn btn-primary mx-3">
                Register
              </button>
              <button type="button" class="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div class="row">
          <div class="col-sm-6">
            <img width={"100%"} src={vectorimg} alt="png"></img>
          </div>
          <div class="col-sm-6">
            <div className="divCenter">
              <img width={"100%"} src={logo} alt="png"></img>
            </div>
            <h4 className="text-center colorgray">
              A Goal Without A Plan Is Just A Wish.
            </h4>
            <h5 className="text-center colorgray">
              The Best Way To Get A Project Done Faster Is To Start Sooner.
            </h5>

            <div className="text-center my-5">
             <button type="button" className="px-3 py-1 btnx mx-2">Register</button>
             <button type="button" className="px-3 py-1 btnx">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
