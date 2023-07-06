import React, { useState } from 'react';

function Audify() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data,setData]=useState({
    author:"",
    title:"",
    comment:"",
  })
  let name,value;
  const handleData=(e)=>{
      name = e.target.name;
      value = e.target.value;
      setData({...data,[name]:value})
  }

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('video', selectedFile);
    formData.append('title',data.title);
    formData.append('author',data.author);
    formData.append('comment',data.comment);
    console.log(formData);
 
      const email=JSON.parse(localStorage.getItem('useraudify')).email;
    try {
      const response = await fetch(`http://localhost:5000/audify?email=${email}`, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = URL.createObjectURL(blob);

        // Create a link element and click it to initiate the file download
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'output.mp3';
        link.click();
      } else {
        console.error('Conversion failed:', response.statusText);
      }
    } catch (error) {
      console.error('Conversion failed:', error);
    }
  };

  return (
    <div className="App" style={{"padding":"1%", "display":"flex","justifyContent":"center","alignItems":"center"}}>
    <div>
      <h1 style={{"fontSize":"40px","margin":"2%","borderRadius":"10px","width":'120%'}}>The audio file will be downloaded</h1>
     
      <p style={{"fontSize":"30px","margin":"1%","borderRadius":"10px"}}>Title</p>
      <input onChange={handleData}  name="title" style={{"padding":"5px","fontSize":"20px","marginLeft":"1%","borderRadius":"10px","width":"100%"}} type="text"/>
      <p style={{"fontSize":"30px","margin":"2%","borderRadius":"10px"}}>Author</p>
      <input  onChange={handleData}  name="author" style={{"padding":"5px","fontSize":"20px","marginLeft":"1%","borderRadius":"10px","width":"100%"}} type="text"/>
      <p style={{"fontSize":"30px","margin":"2%","borderRadius":"10px"}}>Comment</p>
      <input onChange={handleData}  name="comment" style={{"padding":"5px","fontSize":"20px","marginLeft":"2%","borderRadius":"10px","width":"100%"}} type="text"/>
      <input style={{"display":"block","margin":'10% auto',"padding":"1%"}}  type="file" accept="video/*" onChange={handleFileChange} />
      <button style={{"display":"block","margin":'0 auto',"padding":"2%","width":"50%","backgroundColor":"blueviolet","color":"black","fontWeight":"600"}} onClick={handleUpload} disabled={!selectedFile}>
        Convert
      </button>
    </div>
    </div>
  );
}

export default Audify;

