import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { barTitle, barData1, barData2, barDataname1, barDataname2, barLabel } from '../redux/barSlice';
import { validations } from './validation';

function Bar() {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {

    const { chartTitle, datasetName1, datasetData1, datasetName2, datasetData2, label } = values;

    const labelArray = label.replaceAll(' ', '').split(',');
    const data1 = datasetData1.replaceAll(' ', '').split(',').map(d => Number(d));
    const data2 = datasetData2.replaceAll(' ', '').split(',').map(d => Number(d));

    dispatch(barTitle(chartTitle));
    dispatch(barDataname1(datasetName1));
    dispatch(barDataname2(datasetName2));
    dispatch(barData1(data1));
    dispatch(barData2(data2));
    dispatch(barLabel(labelArray));
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
            <Field type="text" id="chartTitle" name="chartTitle" placeholder="Chart Title" />
            {errors.chartTitle && touched.chartTitle ? (
              <div>{errors.chartTitle}</div>
            ) : null}
            <Field type="text" id="datasetName1" name="datasetName1" placeholder="Dataset Name" />
            {errors.datasetName1 && touched.datasetName1 ? (
              <div>{errors.datasetName1}</div>
            ) : null}
            <Field type="text" id="datasetData1" name="datasetData1" placeholder="Dataset Data (e.g. 100, 200, 300...)" />
            {errors.datasetData1 && touched.datasetData1 ? (
              <div>{errors.datasetData1}</div>
            ) : null}
            <Field type="text" id="datasetName2" name="datasetName2" placeholder="Dataset Name" />
            {errors.datasetName2 && touched.datasetName2 ? (
              <div>{errors.datasetName2}</div>
            ) : null}
            <Field type="text" id="datasetData2" name="datasetData2" placeholder="Dataset Data (e.g. 100, 200, 300...)" />
            {errors.datasetData2 && touched.datasetData2 ? (
              <div>{errors.datasetData2}</div>
            ) : null}
            <Field type="text" id="label" name="label" placeholder="Labels (e.g. January, February, March...)" />
            {errors.label && touched.label ? (
              <div>{errors.label}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default Bar