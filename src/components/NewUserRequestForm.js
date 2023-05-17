import React, { useState, useContext } from 'react';       
import { GlobalContext } from './GlobalContext';

const NewUserRequest = () => {

    // Track form values as local state variables
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [lineManager, setLineManager] = useState('');
    const [startDate, setStartDate] = useState('');
    const [businessArea, setBusinessArea] = useState('');

    // Use global state to store and access request data 
    let { userRequests, addUserRequest } = useContext( GlobalContext );
  
    const handleSubmit = (event) => {

        event.preventDefault();

        // Initialize new request object
        let newRequest = {
          "id": userRequests.length + 1,
          "firstName": firstName,
          "lastName": lastName,
          "jobTitle": jobTitle,
          "lineManager": lineManager,
          "startDate": startDate,
          "businessArea": businessArea,
          "completed": false
        }

        // Store request data as global context
        addUserRequest( newRequest );

        // Reset form fields
        setFirstName('');
        setLastName('');
        setJobTitle('');
        setLineManager('');
        setStartDate('');
        setBusinessArea('');

    };

    return (
      
      <>

        <div className="request-form" onSubmit={handleSubmit}>

          <h5>New Request</h5>

            <form> 

              <label>First Name</label>
              <input className='form-input' type='text' required value={ firstName }
                onChange={(event) => setFirstName(event.target.value)
                } />
              
              <label>Last Name</label>
              <input className='form-input' type='text' required value={ lastName }
                onChange={(event) => setLastName(event.target.value)
                } />
                      
              <label>Job Title</label>
              <input className='form-input' type='text' required value={ jobTitle }
                onChange={(event) => setJobTitle(event.target.value)
                } />
            
              <label>Line Manager</label>
              <input className='form-input' type='text' required value={ lineManager }
                onChange={(event) => setLineManager(event.target.value)
                } />
            
              <label>Start Date</label>
              <input className='form-input' type='date' required value={ startDate }
                onChange={(event) => setStartDate(event.target.value)
                } />
              
              <label>Business Area</label>
              <select className='form-input' required value={ businessArea }
                onChange={(event) => setBusinessArea(event.target.value) }>
                  <option value=''>Select business area</option>        
                  <option value='IT'>IT</option>
                  <option value='Finance'>Finance</option>
                  <option value='HR'>HR</option>
                  <option value='Housing'>Housing</option>
                  <option value='Care'>Care</option>
              </select>
              
              <button className='submit-btn' type='submit'>Submit</button>

            </form>

        </div>

      </>

    )
}

export default NewUserRequest;
