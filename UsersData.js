import React,{ useState,useEffect } from "react";
const UsersData=()=>{
    const [user,setUser]=useState({
        First:"",Email:"",phone:"",Country:""
    });
    let name,value;
    const getLocalItems=()=>{
        let list=localStorage.getItems('list')
    }
    const handleInputs=(e)=>{
      console.log(e);
      name=e.target.name;
      value=e.target.value;
      setUser({...user,[name]:value})
    }
    useEffect(()=>{
        
        localStorage.setItem("list",JSON.stringify(name))
    },[name]);

   
    return(
        <>
        <h1>User REGISTRATION</h1>
        <h2>fields marked*are required</h2>
            <div>
                <div>
                    <label>Email*</label>
                    <input type="text"  name="Email"value={user.Email} onChange={handleInputs}></input>
                </div>
                <div>
                  <label>Password*</label>
                  <input type="text" ></input>
              </div>
              <div>
                  <label>Retype Password*</label>
                    <input type="text" /> 
                </div>
              <div>
                  <label>First Name*</label>
                  <input type="text"name="First"value={user.First} onChange={handleInputs} />
                </div>
                 <div>
                   <label>Last Name*</label>
                   <input type="text" />
                </div>
                <div>
                   <label>Phone Number*</label>
                   <input type="text"name="phone" value={user.phone} onChange={handleInputs} />
                </div>
                <div>
                  <label>Address*</label>
                  <input type="text"  />
                 </div>
                 {/* <div>
                 <input type="text" />
                </div> */}
                 <div>
                 <label>Town</label> 
                 <input type="text" />
                </div>
                <div>
                   <label>Region</label>
                   <input type="text" />
                </div>
        <div>
        <label>Zip Code</label>
        <input type="text" />
        </div>
        <div>
        <label>Country</label>
        <input placeholder="Enter your country"name="Country" type="text" value={user.Country} onChange={handleInputs}></input>
        </div>
        <div>
        <button>submit</button>
        </div>
        </div>
        
        
        </>
    );
    
}
export default UsersData;