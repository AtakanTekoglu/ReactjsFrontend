import React,{useState,useEffect} from 'react'
import PersonList from './PersonList'
import AddPerson from './AddPerson'
import phoneBookService from '../services/phonebook'
import loginService from '../services/login' 


const Container = () => {
        const [phoneBook,setPhoneBook] = useState([])
       
        const [username, setUsername] = useState('') 
        const [password, setPassword] = useState('') 

        const [user, setUser] = useState(null)

        const handleLogin = async  (event) => {
            event.preventDefault()
            console.log('logging in with', username, password)
            try {
                const user = await loginService.login({username,password}) //!Destructuring
                window.localStorage.setItem(
                    'loggedAppUser',JSON.stringify(user)
                )
                phoneBookService.setToken(user.token)
                setUser(user)
                setUsername('')
                setPassword('')
              } catch (exception) {
                console.log("Error:",exception);
              }
          }
          useEffect(() => {
            const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
            if (loggedUserJSON) {
              const user = JSON.parse(loggedUserJSON)
              setUser(user)
              phoneBookService.setToken(user.token)
            }
          }, [])
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

        const handleLogOut = () => {
            setUser(null)
            window.localStorage.clear()
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
                     {user !== null ? 
                        <AddPerson 
                        list={phoneBook} 
                        userLog={user}
                        logOut={()=>{handleLogOut()}}/>
                        : 
                        //!Login ---------------
                            <div className="login">
                                <form onSubmit={handleLogin}>
                                <div className="form-group">
                                <label>Username</label>
                                <input 
                                    type="text" 
                                    name="username"
                                    value={username}
                                    onChange={({target}) => setUsername(target.value)} 
                                    className="form-control"/>
                                </div>
                                <div className="form-group">
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    value={password}
                                    onChange={({target})=>setPassword(target.value)} 
                                    className="form-control"/>
                                </div>
                                <button type="submit" className="btn btn-success">Login</button>
                                </form>
                            </div>
                        //!Login ---------------------------   
                    }
                     
                     
                 </div>
                

            </div>
            
        )
    }

export default Container;