import React,{useState,useEffect,Component} from 'react';
import Axios from 'axios';
import { useFormik } from 'formik';
import { useField } from 'formik';
import './AddPlan.css';
import CustomSelect from './CustomSelect';


const options =[
  {value:'WEEKLY', label: 'WEEKLY'},
  {value:'MONTHLY', label: 'MONTHLY'},
  {value:'ONCE', label: 'DAILY'}
]

export default function App(props) {

  // const[image, setImage]= useState();
  const url = " https://tiffin-umbrella.herokuapp.com/sellers/60db667a8247d42edb05cbae/plans";
    const handleFile = async (e) => {

    const file = document.getElementsByName("file");

    var reader = new FileReader();
    var fileByteArray = [];
    reader.readAsArrayBuffer(e.target.files[0]);
    reader.onloadend = function (evt) {
        if (evt.target.readyState == FileReader.DONE) {
           var arrayBuffer = evt.target.result,
               array = new Uint8Array(arrayBuffer);
           for (var i = 0; i < array.length; i++) {
               fileByteArray.push(array[i]);
            }
        }
        console.log(typeof fileByteArray);
    }
    await Axios.post("https://api.imgur.com/3/image", fileByteArray,  { headers: { 'Content-Type': 'multipart/form-data', 'Authorization':'Client-ID 2f7124444928e3e' }})
    .then(res => { if(res.status === 200){
      console.log("Success!!");
      console.log(res.data.link);
    }
    })}
  const formik = useFormik({
    initialValues: {
      planType: '',
      planName: '',
      planDescription: '',
      planPrice: '',
      imageUrl: '',
      modelUrl:''
      // file: ''
    },

    onSubmit: (values, onSubmitProps) => {
      console.log('Form data', values)
      onSubmitProps.resetForm()
      const postData = {
        name: values.planName,
        description: values.planDescription,
        price: values.planPrice,
        type: values.planType,
        imageUrl: values.imageUrl,
        modelUrl: values.modelUrl
        
        
      };

      Axios.post(url, postData,  { headers: { 'Content-Type': 'application/json' }}) 
        .then(res => { if(res.status === 200){
          console.log("Success!!")
        }console.log(res.values) })
        .catch(errors => { console.log(errors) })

    },
   
    validate: values => {

      let errors = {}
      if (!values.planType) {
          errors.planType = 'Required'
      }

      if (!values.planName) {
        errors.planName = 'Required'
    }

      if (!values.planDescription) {
          errors.planDescription = 'Required'
      }

      if (!values.planPrice) {
        errors.planPrice = 'Required'
      }
      else if (!/([0-9])/.test(values.planPrice)) {
        errors.planPrice = 'Invalid'}

      // if (!values.file) {
      //   errors.file = 'Required'
      // }

      return errors
    }
  })

  return (
    <>

    <div>
      <hr />
  {/* <div className='p'></div> */}
  


      <div className="inner">

        <h2 className='heading'>Add Plan</h2>

        <div className="form-group">
          <form onSubmit={formik.handleSubmit}>
            <div>    
            <label></label>            
            <CustomSelect
               
              onChange={value=>formik.setFieldValue('planType',value.value)}
              options = {options}
              value = {formik.values.planType}
              className = 'input' 
             
            />
            {formik.touched.planType && formik.errors.planType ? <div className='error'>{formik.errors.planType}</div> : null}
            </div>
          &nbsp;
            <div>
              <label ></label>
              <input className="cinput"
                placeholder='Plan Name'
                type='text'
                name='planName'
                id='planName'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.planName}
              />
              {formik.touched.planName && formik.errors.planName ? <div className='error'>{formik.errors.planName}</div> : null}
            </div>

            <div >
              <label ></label>
              <input className="cinput"
                placeholder='Plan Description'
                type='text'
                name='planDescription'
                id='planDescription'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.planDescription}
              />
              {formik.touched.planDescription && formik.errors.planDescription ? <div className='error'>{formik.errors.planDescription}</div> : null}
            </div>

            <div>
              <label ></label>

              <input className="cinput"
                placeholder='Price'
                type='tel'
                maxLength = "3"
                name='planPrice'
                id='planPrice'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.planPrice}
              />
              {formik.touched.planPrice && formik.errors.planPrice ? <div className='error'>{formik.errors.planPrice}</div> : null}
            </div>

            
           
          <br></br>

          {/* <input
              label="Light Icon:"
              type="image"
              name="lightIcon"
              accept="image/x-png"
              onBlur
              onChange={event => {formik.values.dishImage = event.target.files[0]
                // setFieldValue('lightIcon', e.target.files[0]);
            }}
          /> */}
           <div>
              <label ></label>
              <input className="cinput"
                placeholder='Image URL'
                type='text'
                name='imageUrl'
                id='imageUrl'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.imageUrl}
              />
              {formik.touched.imageUrl && formik.errors.imageUrl ? <div className='error'>{formik.errors.imageUrl}</div> : null}
            </div>

            <div>
              <label ></label>
              <input className="cinput"
                placeholder='Model URL'
                type='text'
                name='modelUrl'
                id='modelUrl'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.modelUrl}
              />
              {formik.touched.modelUrl && formik.errors.modelUrl ? <div className='error'>{formik.errors.modelUrl}</div> : null}
            </div>

          <input id="file" name="file" type="file" accept="image/*" onChange={handleFile}/>
          <br></br>
            {/* <input type="file" onChange={event => {formik.values.file = event.target.files[0]} } /> onChange={props.handleFileUpload}*/}
            <div className="centerblock">

              {/* <input type="checkbox" id="checkbox" className="check" />&nbsp;
                I hereby agree to share my details with the seller */}
              Note: All fields are mandatory to fill

            <br />
            

              <button type='submit' disabled={!formik.isValid}>
                {/* <Link to='/ValidatedLoginForm'> */}
                  Add Plan
                  {/* </Link> */}
                  </button>
              
              
            </div>
          </form>

        </div>
      </div>
    <hr />
    </div>
</>
  );

}

