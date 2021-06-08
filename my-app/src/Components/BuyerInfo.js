
import { useFormik } from 'formik';
import './Buyer.css';

function BuyerInfo() {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      contact: '',
      address: '',
      area: '',
      zipcode: ''

    },
    onSubmit: (values, onSubmitProps) => {
      console.log('Form data', values)
      onSubmitProps.resetForm()
    },
    validate: values => {
      // values.firstName values.middelName values.lastName values.email 
      // errors.firstName
      // errors.name = 'this field is required'
      let errors = {}

      if (!values.firstName) {
        errors.firstName = 'Required'
      }
      if (!values.middleName) {
        errors.middleName = 'Required'
      }
      if (!values.lastName) {
        errors.lastName = 'Required'
      }
      if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid'
      }

      if (!values.contact) {
        errors.contact = 'Required'
      }
      if (!values.address) {
        errors.address = 'Required'
      }
      if (!values.area) {
        errors.area = 'Required'
      }
      if (!values.zipcode) {
        errors.zipcode = 'Required'
      }


      return errors
    }
  })

  return (
    <div>
      <header className='heading' >Buyer Details Form</header>

      <p className="menudisplay">
        Here all the items selected by the user will be displayed
        </p>
      <br></br>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label >First Name :</label>
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
        <br />
        <br />
        <div className='form-control'>
          <label >Middle Name:</label>
          <input className="cinput"
            placeholder='Middle Name'
            type='text'
            name='middleName'
            id='middleName'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.middleName}
          />
          {formik.touched.middleName && formik.errors.middleName ? <div className='error'>{formik.errors.middleName}</div> : null}
        </div>
        <br />
        <br />

        <div className='form-control'>
          <label >Last Name : </label>
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
        <br />
        <br />

        <div className='form-control'>
          <label >Email ID : </label>
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
        <br />
        <br />

        <div className='form-control'>
          <label >Contact :</label>

          <input className="cinput"
            placeholder='Contact'
            type='tel'
            name='contact'
            id='contact'
            maxLength="10"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contact}
          />


          {formik.touched.contact && formik.errors.contact ? <div className='error'>{formik.errors.contact}</div> : null}
        </div>
        <br />
        <br />

        <div className='form-control'>
          <label >Address :</label>
          <input className="cinput"
            placeholder='Address'
            type='text'
            name='address'
            id='address'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}

          />
          {formik.touched.address && formik.errors.address ? <div className='error'>{formik.errors.address}</div> : null}
        </div>
        <br />
        <br />

        <div className='form-control'>
          <label >Area :</label>
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
        <br />
        <br />

        <div className='form-control'>
          <label >Zipcode :</label>
          <input className="cinput"
            placeholder='Zipcode'
            type='tel'
            name='zipcode'
            id='zipcode'
            pattern="[A-Z0-9]{6}"
            maxLength="6"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.zipcode}
          />
          {formik.touched.zipcode && formik.errors.zipcode ? <div className='error'>{formik.errors.zipcode}</div> : null}
        </div>
        <div className="centerblock">
          <input type="checkbox" id="checkbox" />&nbsp;
        I hereby agree to share my details with the seller

         <br />

          <br />
          <button type='submit' disabled={!formik.isValid}>Submit</button>
        </div>
      </form>
    </div>

  );

}
export default BuyerInfo;