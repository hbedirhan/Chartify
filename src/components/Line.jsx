import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { lineTitle, lineDataName1, lineDataName2, setData1, setData2, setLabel } from '../redux/lineSlice';
import { validations } from './validation';


function Line() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {

    const { chartTitle, datasetName1, datasetData1, datasetName2, datasetData2, label } = values;

    const labelArray = label.replaceAll(' ', '').split(',');
    const data1 = datasetData1.replaceAll(' ', '').split(',').map(d => Number(d));
    const data2 = datasetData2.replaceAll(' ', '').split(',').map(d => Number(d));

    dispatch(lineTitle(chartTitle));
    dispatch(lineDataName1(datasetName1));
    dispatch(lineDataName2(datasetName2));
    dispatch(setData1(data1));
    dispatch(setData2(data2));
    dispatch(setLabel(labelArray));
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
  );
}

export default Line;
