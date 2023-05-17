import React, { useState, useContext } from 'react'; 
import { GlobalContext } from './GlobalContext';

const ManageUserRequests = () => {

  // Use global context to access, update and delete request items
  let { userRequests, deleteUserRequest, updateUserRequest } = useContext( GlobalContext );

  // Apply filters using local state variables and helper functions 
  let [ filterActive, setFilterActive ] = useState( false );  
  let [ filteredRequests, setFilteredRequests ] = useState( userRequests );

  // Update filtered requests array to include those where business area matches function argument value
  const filterByBusinessArea = businessArea => {
    setFilterActive(true)
    setFilteredRequests(
      userRequests.filter(request => request.businessArea === businessArea)
    )
  }

  // Display only requests that have not been completed
  const showActiveOnly = () => {
    setFilterActive(true)
    setFilteredRequests(
      userRequests.filter(request => request.completed === false)
    )
  }

  // Display all requests
  const showAll = () => {
    setFilterActive(false)
    setFilteredRequests(userRequests)
  }

  return (
    
    <>
      
      <div className="requests-list">  

      <h5>Manage Requests</h5>
      
        { userRequests.length > 0 ? ( 
        
        <>
          <ul className='spaced'>
              <li className="requests-list-header">
                <span className="request-item">ID</span>
                <span className="request-item">Name</span>
                <span className="request-item">Job Title</span>
                <span className="request-item">Manager</span>
                <span className="request-item">Start Date</span>
                <span className="request-item">Business Area</span>
                <span className="request-item">Req Status</span>
              </li>

            { filterActive ? 
              
              filteredRequests.map( item => 
                <li key={item.id} className='request'>
                   <span className="request-item">{ item.id }</span>
                   <span className="request-item">{ item.firstName } { item.lastName }</span>
                   <span className="request-item">{ item.jobTitle }</span>
                   <span className="request-item">{ item.lineManager }</span>
                   <span className="request-item">{ item.startDate }</span>
                   <span className="request-item">{ item.businessArea }</span>
                   <span className="request-item">{ item.completed ? 'Completed' : 'Active' }</span>
                    <div>
                      <button className={ item.completed ? "request-item-btn hidden" : "request-item-btn" } onClick={ () => updateUserRequest( item.id ) }>Completed</button>
                      <button className="request-item-btn" onClick={ () =>  deleteUserRequest( item.id ) }>Delete</button>
                    </div>
                </li> 
              
            ) : (
            
            userRequests.map( item => 
               <li key={item.id} className='request'>
                  <span className="request-item">{ item.id }</span>
                  <span className="request-item">{ item.firstName } { item.lastName }</span>
                  <span className="request-item">{ item.jobTitle }</span>
                  <span className="request-item">{ item.lineManager }</span>
                  <span className="request-item">{ item.startDate }</span>
                  <span className="request-item">{ item.businessArea }</span>
                  <span className="request-item">{ item.completed ? 'Completed' : 'Active' }</span>
                  <div>
                    <button className={ item.completed ? "request-item-btn hidden" : "request-item-btn" } onClick={ () => updateUserRequest( item.id ) }>Completed</button>
                    <button className="request-item-btn" onClick={ () => deleteUserRequest( item.id ) }>Delete</button>
                  </div>
               </li> 
            
            ) ) }

          </ul>

          <div className='filters spaced'>
            <label>Filter by department:</label>
            <select className='filter-btn' onChange={e => filterByBusinessArea(e.target.value)}>
              <option value=''>Select business area</option>        
              <option value='IT'>IT</option>
              <option value='Finance'>Finance</option>
              <option value='HR'>HR</option>
              <option value='Housing'>Housing</option>
              <option value='Care'>Care</option>
            </select>

            <button className='filter-btn' onClick={ () => showAll() }>Show All</button>
            <button className='filter-btn' onClick={ () => showActiveOnly() }>Show Active Only</button>
          </div>
        </>

        ) : (

          <p className='request-item spaced'>There are no user requests to display.</p>
        
        )}

      </div>
      
  </>
  
  )
}

export default ManageUserRequests;
