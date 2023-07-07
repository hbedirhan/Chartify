import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { radarLabels, radarDataName, radarData } from '../redux/radarSlice';
import { validationSchema } from './validation';

function Radar() {
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (values) => {

    const { datasetName, datasetData, label } = values;

    const labelArray = label.replaceAll(' ', '').split(',')
      .filter((item) => item !== '');
    const data = datasetData.replaceAll(' ', '').split(',')
      .filter((d) => d !== '')
      .map(d => Number(d))
      .filter((d) => !isNaN(d) && (d !== ''));

    if (labelArray.length == data.length) {
      dispatch(radarDataName(datasetName));
      dispatch(radarData(data));
      dispatch(radarLabels(labelArray));
    } else {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 6000);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          datasetName: '',
          datasetData: '',
          label: ''
        }}
        validationSchema={validationSchema}
        onSubmit={values => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              className={errors.datasetName && touched.datasetName ? 'alert-input' : 'input'}
              type="text"
              id="datasetName"
              name="datasetName"
              placeholder="Dataset Name"
            />

            <Field
              className={errors.datasetData && touched.datasetData ? 'alert-input' : 'input'}
              type="text"
              id="datasetData"
              name="datasetData"
              placeholder="Dataset (e.g. 100, 200, 300...)"
            />

            <Field
              className={errors.label && touched.label ? 'alert-input' : 'input'}
              type="text"
              id="label"
              name="label"
              placeholder="Labels (e.g. Thing 1, Thing 2, Thing 3...)"
            />

            <button type="submit">Submit</button>

            {alert ? <div className="alert">
              <span className="closebtn" onClick={() => setAlert(false)}>&times;</span>
              The number of data points and the number of labels are not equal.
            </div> : null}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Radar