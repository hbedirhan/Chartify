import * as Yup from 'yup';

export const validations = Yup.object().shape({
    chartTitle: Yup.string().required('Required'),
    datasetName1: Yup.string().required('Required'),
    datasetData1: Yup.string().required('Required'),
    datasetName2: Yup.string().required('Required'),
    datasetData2: Yup.string().required('Required'),
    label: Yup.string().required('Required')
});


export const validationSchema = Yup.object().shape({
    datasetName: Yup.string().required('Required'),
    datasetData: Yup.string().required('Required'),
    label: Yup.string().required('Required')
});

export const scatterValidate = Yup.object().shape({
    datasetName: Yup.string().required('Required'),
    datasetX: Yup.string().required('Required'),
    datasetY: Yup.string().required('Required')
});