import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
    return(
        <p>
            Your message has been successfully sent. I will contact you soon.
        </p>
    )
}

function ContractComponent() {

    const form = useRef();

    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_pittf41', 'template_w5htryn', form.current, 'user_kqOJOq0n9dZ6YNK9asqmN')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };
      setTimeout(() => {
          showResult(false);
      }, 5000);
 return (
    <form ref={form} onSubmit={sendEmail}>
    <div class="formWord">
      <h2>Say Hello!</h2>
      <span>Full Name</span>
      <br />
      <input class="input100" type="text" name="fullName" required />
      <br />
      <span>Phone Number</span>
      <br />
      <input class="input100" type="text" name="phone" required />
      <br />
      <span>Enter Email</span>
      <br />
      <input class="input100" type="text" name="email" required />
      <br />
    </div>
    <div class="formWord">
      <span>Message</span>
      <br />
      <textarea name="message" required></textarea>
      <br />
      <button>SUBMIT</button>

      <div class="row">{result ? <Result /> : null}</div>
    </div>
  </form>
 )   
}

export default ContractComponent;