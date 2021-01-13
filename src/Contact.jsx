import React from "react";
import emailjs from 'emailjs-com';


const Contact = () => {
    
    //const {Api_a,Api_b,Api_c} = process.env;
   

    function sendEmail(e) {
        e.preventDefault();
    
    emailjs.sendForm('service_9pr78b8', 'template_azb4nn5', e.target, 'user_RQVpYxUvHVFjGCrD5LefH')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      alert("Message send Successfully we will contact soon")
        e.target.reset()
    }

    return (
      <>
       <div  className="serviecs text-center" >
          <h1 >
            Contact us
          </h1>
          <p>
                You can also call us on <strong className="compani">9614696248</strong> this number
          </p>
       </div>
       <div className="row">
           <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={sendEmail}>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter name" name="name" laceholder="First Last"/>
                </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone number</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" name="number"  placeholder="1234567890"/>
                </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"  name="email" placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Masseage</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" name="massege" rows="3"></textarea>
                </div>
                <div className="my-3">
                 <center>
                 <div className="my-3">
                    <input type="submit" className="button" value="Send Message"></input>
                    </div>
                 </center>
                </div>
            </form>
           </div>
       </div>
      </>
    );
};


export default Contact;