import React, {useState} from 'react';

const FormHook = (props) => { 

    let [firstName, setfirstName] = useState(null);
    let [lastName, setlastName] = useState(null);
    let [email, setemail] = useState(null);
    let [password, setpassword] = useState(null);
    let [confirmpassword, setconfirmpassword] = useState(null);
    
    return(
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="">First Name: </label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=> setfirstName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name: </label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=> setlastName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email: </label>
                    <input type="email" name="" id="" className="form-control" onChange={(e)=> setemail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password: </label>
                    <input type="password" name="" id="" className="form-control" onChange={(e)=> setpassword(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password: </label>
                    <input type="password" name="" id="" className="form-control" onChange={(e)=> setconfirmpassword(e.target.value)}/>
                </div>
            </form>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmpassword}</p>
            </div>
        </div>
    );
};

export default FormHook;