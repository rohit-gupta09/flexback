import React,{useState} from 'react'
import axios from 'axios';


function Form() {
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        contactInfo: '',
        selectedBatch: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("hgj")
          const response = await axios.post('http://localhost:5000/api/enroll', formData);
          if (response.data.success) {
            alert('Enrollment successful!');
          } else {
            alert('Enrollment failed.');
          }
        } catch (error) {
          console.error('Error during form submission:', error);
          alert('Error submitting form.');
        }
      };
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" onChange={handleChange} />
      <input name="dateOfBirth" type="date" placeholder="Date of Birth" onChange={handleChange} />
      <input name="contactInfo" type="text" placeholder="Contact Info" onChange={handleChange} />
   
      <br />
        <label>
          Select Batch:
          <select name="selectedBatch" onChange={handleChange} required>
            <option value="">Select Batch</option>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
        </label>
      <button type="submit">Enroll</button>
    </form>

    </div>
  )
}

export default Form
