import React, { useState } from "react";

const FormInputType = () => {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState({
    fname: '',
    gender: '',
    country: '',
    interests: [], // To hold selected interests
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkbox input
    if (type === 'checkbox') {
      setData((prevData) => {
        const updatedInterests = checked
          ? [...prevData.interests, value] // Add interest if checked
          : prevData.interests.filter((interest) => interest !== value); // Remove if unchecked

        return { ...prevData, interests: updatedInterests };
      });
    } else {
      setData({ ...data, [name]: value });
    }

    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllData([...allData, data]); // Add current form data to allData
    setData({ // Reset the form
      fname: '',
      gender: '',
      country: '',
      interests: [],
    });
  };

  return (
    <main>
    <hr/>
      <h3> Form Data </h3>
      <form onSubmit={handleSubmit} style={{width:"40%",margin:"0 auto"}}>
        <label>First Name</label>
        <input name="fname" value={data.fname} onChange={handleChange} required /><br />

        
        <label>Gender:</label>
        <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
        <input type="radio" name="gender" value="female" onChange={handleChange} /> Female<br />

        <label>Country:</label>
        <select name="country" value={data.country} onChange={handleChange} required>
          <option value="">Select a country</option>
          <option value="UK">UK</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
        </select><br />

        <label>Interests:</label><br />
        <input type="checkbox" name="interests" value="Reading" onChange={handleChange} /> Reading<br />
        <input type="checkbox" name="interests" value="Traveling" onChange={handleChange} /> Traveling<br />
        <button type="submit">Submit</button>
      </form>

    {allData.name && <>  <h6>Submitted Data</h6>
      <pre>{JSON.stringify(allData, null, 2)}</pre></>}
    </main>
  );
};

export default FormInputType;
