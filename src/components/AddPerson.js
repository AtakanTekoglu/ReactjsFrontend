import React from 'react'
import phoneBookService from '../services/phonebook'

const AddPerson = (props) =>{
        
        let myObj = {
            name : '',
            phone : ''
        }
        
        const inputHandler = (event) => {
            const inputName = event.nativeEvent.target.name;
            const inputValue = event.nativeEvent.target.value;
            myObj[inputName] = inputValue;  
     
        }

        const postData = (e) =>{
            e.preventDefault()
            phoneBookService
            .create(myObj)
            .then(returnedPhone => {
                alert('The person has been added successfully.')
                window.location.reload()
            })
            .catch(()=>{
                console.log('Error')
            })
        }



        
        return(
            <div className="add-person">
                <form onSubmit={postData}>
                <div className="form-group">
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    onChange={inputHandler} 
                    className="form-control"/>
                </div>
                <div className="form-group">
                <label>Phone Number</label>
                <input 
                    type="text" 
                    name="phone" 
                    onChange={inputHandler} 
                    className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        )
}

export default AddPerson;