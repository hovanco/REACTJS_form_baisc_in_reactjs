import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      txtUsername: '', //ten state phai trung voi thuoc tinh name trong input
      txtPasswprd: '',
      txtDesc: '',
      sltGender: 1,
      rdLang: 'VI',
      chkbStatus: false
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }
  onHandleChange(event){
    var target = event.target; // lay gia tri tung input
    var name = target.name // moi input co moi thuoc tinh name
    // var value = target.value //lay gia tri cua moi input theo name khi chua co checkbox
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value // luu nhieu gia tri input
    });
  }
  onHandleSubmit(event){
    event.preventDefault(); //chan tu dong load lai khi nhan save
    console.log(this.state)
  }
  render() {
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Form in ReactJS</h3>
                </div>
                <div className="panel-body">
                  <form onSubmit={ this.onHandleSubmit }>
                    <div className="form-group">
                      <label >username</label>
                      <input
                       type="text"
                       className="form-control"
                       name="txtUsername"
                       value={this.state.txtUsername}
                       onChange={ this.onHandleChange }
                      />
                    </div>
                    <div className="form-group">
                      <label >password</label>
                      <input
                       type="password"
                       className="form-control"
                       name="txtPasswprd"
                       value={this.state.txtPasswprd}
                       onChange={ this.onHandleChange }
                      />
                    </div>
                    <div className="form-group">
                      <label >description</label>
                      <textarea
                       className="form-control"
                       name="txtDesc"
                       value={this.state.txtDesc}
                       onChange={ this.onHandleChange }
                      />
                    </div>
                    <label>gender</label>
                    <select
                     className="form-control"
                     name="sltGender"
                     value={this.state.sltGender}
                     onChange={this.onHandleChange}
                     >
                      <option value={0}>Female</option>
                      <option value={1}>Male</option>
                    </select>
                    <br/>
                    <label>language</label>
                    <div className="radio">
                      <label>
                        <input
                         type="radio"
                         name="rdLang"
                         value="VI"
                         onChange={this.onHandleChange}
                         checked={this.state.rdLang === "VI"}
                        />
                        Vietnamese
                      </label>&nbsp;&nbsp;&nbsp;&nbsp;
                      <label>
                        <input
                         type="radio"
                         name="rdLang"
                         value="EN"
                         onChange={this.onHandleChange}
                         checked={this.state.rdLang === "EN"}
                        />
                        English
                      </label>&nbsp;&nbsp;&nbsp;&nbsp;

                      <label>
                        <input
                         type="radio"
                         name="rdLang"
                         value="JP"
                         onChange={this.onHandleChange}
                         checked={this.state.rdLang === "JP"}
                        />
                        Japanese
                      </label>
                    </div>
                    
                    <div className="checkbox">
                      <label>
                        <input 
                          type="checkbox"
                          name="chkbStatus"
                          value={true}
                          onChange={this.onHandleChange}
                          checked={this.state.chkbStatus === true}
                        />
                        status
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                    <button type="reset" className="btn btn-danger">Remove White</button>
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
