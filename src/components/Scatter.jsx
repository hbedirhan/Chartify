import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { scatterDataName, scatterData } from '../redux/scatterSlice';
import { scatterValidate } from './validation';

function Scatter() {
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (values) => {

    const { datasetName, datasetX, datasetY } = values;

    let dataX = datasetX.replaceAll(' ', '').split(',')
      .filter((d) => d !== '')
      .map(d => Number(d))
      .filter((d) => !isNaN(d) && (d !== ''));
    let dataY = datasetY.replaceAll(' ', '').split(',')
      .filter((d) => d !== '')
      .map(d => Number(d))
      .filter((d) => !isNaN(d) && (d !== ''));

    const data = dataX.map((value, index) => ({ x: value, y: dataY[index] }));

    if (data.length == dataY.length) {
      dispatch(scatterDataName(datasetName));
      dispatch(scatterData(data));
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
          datasetX: '',
          datasetY: '',
        }}
        validationSchema={scatterValidate}
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
              className={errors.datasetX && touched.datasetX ? 'alert-input' : 'input'}
              type="text"
              id="datasetX"
              name="datasetX"
              placeholder="X Dataset (e.g. 100, 200, 300...)" />

            <Field
              className={errors.datasetY && touched.datasetY ? 'alert-input' : 'input'}
              type="text"
              id="datasetY"
              name="datasetY"
              placeholder="Y Dataset (e.g. 100, 200, 300...)"
            />

            <button type="submit">Submit</button>

            {alert ? <div className="alert">
                    <span className="closebtn" onClick={() => setAlert(false)}>&times;</span>
                    The X and Y data are not of equal length.
                    </div> : null}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Scatter