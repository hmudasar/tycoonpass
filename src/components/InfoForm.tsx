import React from "react";

const InfoForm = () => {
  return (
    <div className="billing-detail">
      <h2>Billing Details</h2>
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>
                First Name<span className="red-clr">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>
                Last Name<span className="red-clr">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label>
                Email <span>(optional)</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label>
                Country/Region<span className="red-clr">*</span>
              </label>
              <select className="form-control">
                <option>Pakistan</option>
                <option>India</option>
                <option>China</option>
                <option>Bangladesh</option>
                <option>USA</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label>
                Street Address<span className="red-clr">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label>
                City<span className="red-clr">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label>
                State<span className="red-clr">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>
                State<span className="red-clr">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>
                Phone<span className="red-clr">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InfoForm;
