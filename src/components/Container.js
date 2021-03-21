import React,{useState,useEffect} from 'react'
import PersonList from './PersonList'
import AddPerson from './AddPerson'
import phoneBookService from '../services/phonebook'



const Container = () => {
        const [phoneBook,setPhoneBook] = useState([])
       
        //! Get all from db
        useEffect(() => {
            phoneBookService
                .getAll()
                .then(initialPhonebook => {
                    console.log(initialPhonebook)
                    setPhoneBook(initialPhonebook)
                })
            },[])

        //! Delete Person
        const deletePhone = id => {
            
            const target =phoneBook.find(m => m.id === id)
            console.log(target)
            if(window.confirm("Do you really want to delete the record?")){
                phoneBookService
                .deletePhone(target.id)
                .then(response =>{
                    if(response === 200){
                        window.location.reload()
                    }
                })
                .catch(()=>{
                    console.log('Error')
                })
            }
            
        }

        
   

        return(
            <div className="disp-container">
                <div className="person-list">
                    {phoneBook.map(item =>
                        <PersonList 
                            key={item.id} 
                            list={item} 
                            delPhone={()=>deletePhone(item.id)}/>
                    )}
                 </div>
                 <div className="right-section">
                     <AddPerson list={phoneBook}/>
                     
                 </div>
                

            </div>
            
        )
    }

export default Container;