import { useState, useEffect } from 'react';
import "./App.css";


function App() {

  return (
    <div class="container-fluid">
      <div class="main container bg-info">
        <h1 className='text-center mb-4'>Resume Maker</h1>
        <form>
          <div class="form-group row">
            <label for="validationDefault01" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-4">
              <input type="text"class="form-control" id="validationDefault01"/>
            </div>
            <label for="inputPassword3" class="col-sm-2 col-form-label">Birthdate</label>
            <div class="col-sm-4">
              <input type="date" class="form-control" id="inputPassword3"/>
            </div>
          </div>

          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Email Id</label>
            <div class="col-sm-4">
              <input type="email" class="form-control" id="Enquiry" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">About</label>
            <div class="col-sm-10">
              <input type="textarea" class="form-control" id="Enquiry" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Experience</label>
            <div class="col-sm-10">
              <div class="form-check pt-2">
                <input class="form-check-input" type="checkbox"value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Experience
                </label>
              </div>
              <div class="form-group row " id='collapseExample'>
                <label for="inputEmail3" class="col-sm-2 col-form-label pt-3">Company Name</label>
                <div class="col-sm-4 pt-3">
                  <input type="text" class="form-control" id="Enquiry" />
                </div>
                <label for="inputEmail3" class="col-sm-2 col-form-label pt-3">Job Post</label>
                <div class="col-sm-4 pt-3">
                  <input type="text" class="form-control" id="Enquiry" />
                </div>
                <label for="inputEmail3" class="col-sm-2 col-form-label pt-3">Location</label>
                <div class="col-sm-4 pt-3">
                  <input type="text" class="form-control" id="Enquiry" />
                </div>
                <label for="inputEmail3" class="col-sm-2 col-form-label pt-3">Description</label>
                <div class="col-sm-4 pt-3">
                  <input type="text" class="form-control" id="Enquiry" />
                </div>
                <label for="inputEmail3" class="col-sm-2 col-form-label pt-3">From</label>
                <div class="col-sm-4 pt-3">
                  <input type="date" class="form-control" id="Enquiry" />
                </div>
                <label for="inputEmail3" class="col-sm-2 col-form-label pt-3">To</label>
                <div class="col-sm-4 pt-3">
                  <input type="date" class="form-control" id="Enquiry" />
                </div>
                <div class="col-sm-4 pt-3">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      isCurrent
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Education</label>
            <div class="col-sm-10">
              <div class="form-check pt-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                Education
                </label>
              </div>
              <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label pt-3">Name</label>
                <div class="col-sm-4 pt-3">
                  <input type="text" class="form-control" id="Enquiry" />
                </div>
                <label for="inputEmail3" class="col-sm-2 col-form-label pt-3">Location</label>
                <div class="col-sm-4 pt-3">
                  <select name="cars" class="custom-select">
                    <option selected>..select..</option>
                    <option value="volvo">Volvo</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <label for="inputEmail3" class="col-sm-2 col-form-label pt-3">About</label>
                <div class="col-sm-10 pt-3">
                  <input type="textarea" class="form-control" id="Enquiry" />
                </div>
                <label for="inputEmail3" class="col-sm-2 col-form-label pt-3">From</label>
                <div class="col-sm-4 pt-3">
                  <input type="date" class="form-control" id="Enquiry" />
                </div>
                <label for="inputEmail3" class="col-sm-2 col-form-label pt-3">To</label>
                <div class="col-sm-4 pt-3">
                  <input type="date" class="form-control" id="Enquiry" />
                </div>
                <div class="col-sm-4 pt-3">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      isCurrent
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Skills</label>
            <div class="col-sm-4">
              <select name="cars" class="custom-select">
                <option selected>select</option>
                <option value="volvo">Volvo</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <label for="inputEmail3" class="col-sm-2 col-form-label">Languages</label>
            <div class="col-sm-4">
              <select name="cars" class="custom-select">
                <option selected>select</option>
                <option value="volvo">Volvo</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Projects</label>
            <div class="col-sm-10">
              <div class="form-check pt-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                Projects
                </label>
              </div>
              <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label pt-3">Name</label>
                <div class="col-sm-4 pt-3">
                  <input type="text" class="form-control" id="Enquiry" />
                </div>
                <label for="inputEmail3" class="col-sm-2 col-form-label pt-3">Project Role</label>
                <div class="col-sm-4 pt-3">
                  <input type="text" class="form-control" id="Enquiry" />
                </div>
                <label for="inputEmail3" class="col-sm-2 col-form-label pt-3">Description</label>
                <div class="col-sm-10 pt-3">
                  <input type="textarea" class="form-control" id="Enquiry" />
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="text-center">
          <button type="button" class="btn btn-success mx-2">Submit</button>
          <button type="button" class="btn btn-danger mx-2">Cancel</button>
        </div>
      </div>
      
    </div>
  );
}

export default App
