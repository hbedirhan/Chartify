import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { polarLabels, polarDataName, polarData } from '../redux/polarAreaSlice';
import { validationSchema } from './validation';

function PolarArea() {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {

    const { datasetName, datasetData, label } = values;

    dispatch(polarDataName(datasetName));
    dispatch(polarData(datasetData));
    dispatch(polarLabels(label));
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
            <Field type="text" id="datasetName" name="datasetName" placeholder="Dataset Name" />
            {errors.datasetName && touched.datasetName ? (
              <div>{errors.datasetName}</div>
            ) : null}
            <Field type="text" id="datasetData" name="datasetData" placeholder="Dataset Data (e.g. 100, 200, 300...)" />
            {errors.datasetData && touched.datasetData ? (
              <div>{errors.datasetData}</div>
            ) : null}
            <Field type="text" id="label" name="label" placeholder="Labels (e.g. Red, Blue, Yellow...)" />
            {errors.label && touched.label ? (
              <div>{errors.label}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
    );
}

export default PolarArea