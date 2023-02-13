import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

function Signup() {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Sign Up</h3>
                <form action="" className="d-flex flex-column gap-15">
                    <CustomInput type="text"
                      name="firstName"
                      placeholder="First name"
                      className="form-control"/>
                    <CustomInput
                      type="text"
                      name="lastName"
                      placeholder="Last ame"
                      className="form-control"
                    />
                    <CustomInput
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  <div className="mt-1">
                    <CustomInput
                      type="password"
                      name="password"
                      placeholder="Passsword"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Sign Up</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
}

export default Signup;
