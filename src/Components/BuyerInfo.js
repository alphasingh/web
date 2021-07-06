import React from 'react';
import Axios from 'axios';
import { useFormik } from 'formik';
import './Buyer.css';


export default function App(props) {
  const url = "https://tiffin-umbrella.herokuapp.com/post_buyer";
  console.log(props.location.data)
  const sellerinfo = props.location.data
  // const seller_id = sellerinfo.seller_id
  // const plan_id = sellerinfo.planid  
  
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      area: '',
      zip: ''
    },

    onSubmit: (values, onSubmitProps, seller_id, plan_id) => {
      console.log('Form data', values)
      onSubmitProps.resetForm()
      const postData = {
        firstName: values.firstName,
        lastName: values.lastName,
        contact: {
          phone: values.phone,
          email: values.email,
          address: {
            line1: values.address,
            area: values.area,
            zip: values.zip
          }
        },
        seller_id:sellerinfo.seller_id,
        plan_id: sellerinfo.planid
        
      };

      Axios.post(url, postData, { headers: { 'Content-Type': 'application/json' } })
        .then(res => { if(res.status === 200) {console.log("Success"); alert("Your Order is placed successfully, please check your email.") }})
        .catch(errors => { console.log(errors) })

    },

    validate: values => {

      let errors = {}

      if (!values.firstName) {
        errors.firstName = 'Required'
      }

      if (!values.lastName) {
        errors.lastName = 'Required'
      }

      if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid'
      }

      if (!values.phone) {
        errors.phone = 'Required'

      } else if (!/([0-9])/.test(values.phone)) {
        errors.phone = 'Invalid'
      }

      if (!values.address) {
        errors.address = 'Required'
      }

      if (!values.area) {
        errors.area = 'Required'
      }

      if (!values.zip) {
        errors.zip = 'Required'
      }
      else if (/([a-z])/.test(values.zip)) {
        errors.zip = 'Invalid'
      }

      return errors
    }
  })
  
  return (

    <div>
     
      {/* <div className='p'>Here the Buyers order will be displayed!!</div> */}
      {/* <div className='p' >
         <div className="responsive">
         <div className="gallery">
       <a target="_blank" ><img src=" https://i.ibb.co/k1x404S/chinese-img1.jpg" width="600" height="400"></img></a>
   
         </div>
       </div>
    </div> */}

      <div className='p'>
        <h2>Order Summary</h2>
        <div className="container-fluid">
          <div className="row">

            <div className="col-mt-4 w" >
              <div className="card mt-4">

                <img className="card-img-top" src={sellerinfo.sellerphoto} alt="" />
                <div className="card-body">
                  <h4 className="card-title text-secondary">{sellerinfo.seller_name}</h4>
                  <p className="card-text text-secondary"><h6><strong>Plan Name :</strong> {sellerinfo.planname}</h6></p>
                  <p className="card-text text-secondary"><h6><strong>Plan Type :</strong> {sellerinfo.plantype}</h6></p>
                  <p className="card-text text-secondary">{sellerinfo.description}</p>
                  <p className="card-text text-secondary" ><h6><strong>Plan Price :</strong>{sellerinfo.planprice}$</h6></p>
                  {/* <p className="card-text text-secondary" type="hidden" value={sellerinfo.id}></p> */}
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>










      <div className="inner">

        <h2 className='heading' >Buyer Details Form</h2>

        <div className="form-group">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label ></label>
              <input className="cinput"
                placeholder='First Name'
                type='text'
                name='firstName'
                id='firstName'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? <div className='error'>{formik.errors.firstName}</div> : null}
            </div>

            <div >
              <label > </label>
              <input className="cinput"
                placeholder='Last Name'
                type='text'
                name='lastName'
                id='lastName'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? <div className='error'>{formik.errors.lastName}</div> : null}
            </div>

            <div >
              <label ></label>
              <input className="cinput"
                placeholder='Email'
                type='email'
                name='email'
                id='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
            </div>

            <div>
              <label ></label>

              <input className="cinput"
                placeholder='Phone'
                type='text'
                name='phone'
                id='phone'
                maxLength="10"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? <div className='error'>{formik.errors.phone}</div> : null}
            </div>

            <div>
              <label ></label>
              <input className="cinput"
                placeholder='Address'
                type='textarea'
                name='address'
                id='address'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address ? <div className='error'>{formik.errors.address}</div> : null}
            </div>

            <div>
              <label ></label>
              <input className="cinput"
                placeholder='Area'
                type='text'
                name='area'
                id='area'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.area}
              />
              {formik.touched.area && formik.errors.area ? <div className='error'>{formik.errors.area}</div> : null}
            </div>

            <div>
              <label ></label>
              <input className="cinput"
                placeholder='Zipcode'
                type='tel'
                name='zip'
                id='zip'
                pattern="[A-Z0-9]{6}"
                maxLength="6"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.zip}
              />
              {formik.touched.zip && formik.errors.zip ? <div className='error'>{formik.errors.zip}</div> : null}
            </div>

            <br />

            <div className="centerblock">


              Note: All fields are mandatory to fill

            <br />
              <br />

              <button type='submit' disabled={!formik.isValid}>Submit</button>
            </div>
          </form>

        </div>
      </div>
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
         <br></br> 
        <br></br>
        <br></br>
        <br></br>

     
    </div>

  );

}