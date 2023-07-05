import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { scatterDataName, scatterData } from '../redux/scatterSlice';
import { scatterValidate } from './validation';

function Scatter() {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {

    const { datasetName, datasetX, datasetY } = values;

    let dataX = datasetX.replaceAll(' ', '').split(',').map(d => Number(d));
    let dataY = datasetY.replaceAll(' ', '').split(',').map(d => Number(d));

    const data = dataX.map((value, index) => ({ x: value, y: dataY[index] }));


    dispatch(scatterDataName(datasetName));
    dispatch(scatterData(data));
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
            <Field type="text" id="datasetName" name="datasetName" placeholder="Dataset Name" />
            {errors.datasetName && touched.datasetName ? (
              <div>{errors.datasetName}</div>
            ) : null}
            <Field type="text" id="datasetX" name="datasetX" placeholder="Dataset Data (e.g. 100, 200, 300...)" />
            {errors.datasetX && touched.datasetX ? (
              <div>{errors.datasetX}</div>
            ) : null}
            <Field type="text" id="datasetY" name="datasetY" placeholder="datasetYs (e.g. Thing 1, Thing 2, Thing 3...)" />
            {errors.datasetY && touched.datasetY ? (
              <div>{errors.datasetY}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Scatter