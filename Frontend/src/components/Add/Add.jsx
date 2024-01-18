import { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import "./Add.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, postData, deleteData } from '../../redux/slices/mealSlice';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    about: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    price: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    image: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

});
const Add = () => {
    const data = useSelector((state) => state.meal.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    console.log(data);


    return (
        <>
            <div className="formm">
                <Formik
                    initialValues={{
                        name: '',
                        about: '',
                        price: '',
                        image: '',

                    }}

                    onSubmit={(values) => {

                        console.log(values);
                        dispatch(postData(values))
                    }}
                >
                    {({ errors, touched, handleSubmit }) => (
                        <Form className='form' onSubmit={handleSubmit}>
                            <Field className="field" name="name" />
                            {errors.name && touched.name ? (
                                <div>{errors.name}</div>
                            ) : null}
                            <Field className="field" name="about" />
                            {errors.about && touched.about ? (
                                <div>{errors.about}</div>
                            ) : null}
                            <Field  className="field" name="price" type="number" />
                            {errors.price && touched.price ? <div>{errors.price}</div> : null}
                            <Button type='sumbit'
                             className='btn' variant="contained">Add</Button>
                        </Form>
                    )}
                </Formik>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">about</TableCell>
                            <TableCell align="right">Price</TableCell>

                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.about}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>

                                <TableCell
                                    align="right"

                                >
                                    <Button onClick={() => {
                                        dispatch(deleteData(row._id)).then(()=>{
                                            dispatch(fetchData())
                                        })
                                        console.log(row._id);

                                    }}
                                        variant="outlined" color="error">
                                        Delete
                                    </Button>

                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>




    )
}

export default Add