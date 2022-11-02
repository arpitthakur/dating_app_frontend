import React from 'react'
import '../src/css/header.css'
 const Header = () => {
  return (<div className='container-fluid'>
  
   
    <div className='row bg-white height'>
        <div className='col-md-4 '>
   <img  src='new.png'></img>
   </div>
   <div className='col-md-4'></div>
   <div className='col-md-4 toggle'>
   <i class="fa-solid fa-bars icon p-4"></i>
    <div className='bg-white'>    <h3 className='bg-dark text-white bg p-4'><i class="fa-solid fa-user m-3"></i>Profile Setting</h3>
    <input type="text" placeholder="Enter your name" className='m-3'/><i className='fa-solid fa-pen-to-square m-3'></i><i className="fa-sharp fa-solid fa-trash m-2"></i>
     <input type="text" placeholder="Enter your Phone no." className='m-3'/><i className='fa-solid fa-pen-to-square m-3'></i><i className="fa-sharp fa-solid fa-trash m-2"></i>
    <input type="text" placeholder="Enter your Email-Id" className='m-3'/><i className='fa-solid fa-pen-to-square m-3'></i><i className="fa-sharp fa-solid fa-trash m-2"></i>
    <input type="text" placeholder="Enter your Age" className='m-3'/><i className='fa-solid fa-pen-to-square m-3'></i><i className="fa-sharp fa-solid fa-trash m-2"></i>
    
    <select className="m-3 sel">
   < option>State</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
    </select>
    <select className='m-3  sel'>
        <option> Gender</option>
        <option>Male</option>
        <option>Female</option>
    </select><br></br>
    <button type="button" class="btn btn-info m-3 mb-4 but">Save</button>
    </div>

   </div>
   </div>
   
   
   </div>
  )
}
export default Header
