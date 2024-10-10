import React, { useState } from 'react';
import './App.css';

function App() {
  const [enterSite, setEnterSite] = useState<boolean>(false);
  const [formData, setFormData] = useState<string>('');

  const playAudio = () => {
    const audio = document.getElementById("gunshotAudio") as HTMLAudioElement;
    if (audio) {
      audio.play();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    playAudio();
    // The form will be submitted to FormSubmit service
    alert('Submitting data... (DO NOT EXIT THE WEBSITE UNTIL CONFIRMATION, Close this message to continue, may take up to a minute)');
    // Submit the form programmatically
    e.currentTarget.submit();
  };

  return (
    <>
      <audio id="gunshotAudio" src="/src/assets/gunshot.mp3"></audio> 
      {!enterSite && (
        <>
          <h1>Balancing K'Ching</h1>
          <p>By clicking enter, you are not allowed to talk about any relationship with this site.</p>
          <button onClick={() => setEnterSite(true)}>Enter Site</button>
        </>
      )}
    
      {enterSite && (
        <>
          <p>
            Our Mission is to balance our K'Ching experience from any corruption found between student council,
            ridiculous laws, illegal operations, dangerous situations, etc. from escalating. Which is why we will use
            the information you provide us and attempt to take care of it <strong>free of charge</strong>.
          </p>
          <form onSubmit={handleSubmit} action="https://formsubmit.co/e3187c230738a792451b420d50e6f74f" method="POST" className="columncss">
            <input type="hidden" name="_subject" value="New submission from K'Ching site" />
            <input type="hidden" name="_captcha" value="false" />
            <textarea 
              name="message"
              className="textareacss"
              value={formData}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData(e.target.value)}
            ></textarea>
            <button type="submit" className="submitbutton">Submit</button>
          </form>
        </>
      )}
    </>
  );
}

export default App;