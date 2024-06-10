import './Contact.css';


function Contact() {
    

  return (
        <div>
            <div className="flex">
                <h1>Contact</h1>
            </div>
            <div className="flex">
                <label>
                    First Name    
                    <input/>
                </label>
                <label>
                    Last Name 
                    <input/>
                </label>
            </div>  
            <div className="flex">
                <label>
                    Email
                    <input/>
                </label>
                <label>
                    Phone Number
                    <input/>
                </label>
            </div>  
            <div className="flex">
                <label>
                    Subject
                    <input className="input-full"/>
                </label >
                
            </div>
            <div className="flex">
                <label>
                    Message
                    <textarea/>
                </label>
                
            </div>  
            <div className="flex">
                <button>Send</button>
            </div>
        </div>
  ) 
}

export default Contact