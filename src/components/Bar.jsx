import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { barTitle, barData1, barData2, barDataname1, barDataname2, barLabel } from '../redux/barSlice';
import { validations } from './validation';

function Bar() {
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (values) => {

    const { chartTitle, datasetName1, datasetData1, datasetName2, datasetData2, label } = values;

    const labelArray = label.replaceAll(' ', '').split(',')
      .filter((item) => item !== '');
    const data1 = datasetData1.replaceAll(' ', '').split(',')
      .filter((d) => d !== '')
      .map(d => Number(d))
      .filter((d) => !isNaN(d) && (d !== ''));
    const data2 = datasetData2.replaceAll(' ', '').split(',')
      .filter((d) => d !== '')
      .map(d => Number(d))
      .filter((d) => !isNaN(d) && (d !== ''));

    if (labelArray.length === data1.length && data1.length === data2.length) {
      dispatch(barTitle(chartTitle));
      dispatch(barDataname1(datasetName1));
      dispatch(barDataname2(datasetName2));
      dispatch(barData1(data1));
      dispatch(barData2(data2));
      dispatch(barLabel(labelArray));
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
          chartTitle: '',
          datasetName1: '',
          datasetData1: '',
          datasetName2: '',
          datasetData2: '',
          label: '',
        }}
        validationSchema={validations}
        onSubmit={values => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              className={errors.chartTitle && touched.chartTitle ? 'alert-input' : 'input'}
              type="text"
              id="chartTitle"
              name="chartTitle"
              placeholder="Chart Title"
            />

            <Field
              className={errors.datasetName1 && touched.datasetName1 ? 'alert-input' : 'input'}
              type="text"
              id="datasetName1"
              name="datasetName1"
              placeholder="Dataset 1 Name"
            />

            <Field
              className={errors.datasetData1 && touched.datasetData1 ? 'alert-input' : 'input'}
              type="text"
              id="datasetData1"
              name="datasetData1"
              placeholder="Dataset 1 (e.g. 100, 200, 300...)"
            />

            <Field
              className={errors.datasetName2 && touched.datasetName2 ? 'alert-input' : 'input'}
              type="text"
              id="datasetName2"
              name="datasetName2"
              placeholder="Dataset 2 Name"
            />

            <Field
              className={errors.datasetData2 && touched.datasetData2 ? 'alert-input' : 'input'}
              type="text"
              id="datasetData2"
              name="datasetData2"
              placeholder="Dataset 2 (e.g. 100, 200, 300...)"
            />

            <Field
              className={errors.label && touched.label ? 'alert-input' : 'input'}
              type="text"
              id="label"
              name="label"
              placeholder="Labels (e.g. January, February, March...)"
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
  )
}

export default Bar