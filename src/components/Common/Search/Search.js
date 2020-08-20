import React, {useEffect} from 'react';
import {Button, FormControl, Navbar} from "react-bootstrap";
import {Form, Formik} from "formik";

const Search = ({setNameSearchSelector,nameSearchSelector }) => {

    const getFormData = (formData) => {
            setNameSearchSelector(formData.buyer.toLowerCase())

    }

    let initialValues = {
        buyer: ""
    }

    useEffect(()=> {
        if (nameSearchSelector) {
            initialValues.buyer = nameSearchSelector
        }
    })

    return (

        <Navbar bg="light" className="mt-4 justify-content-between searchPanel d-block">
            <Formik initialValues={initialValues} onSubmit={getFormData}>
                {({
                      handleSubmit,
                      handleChange,
                      values,

                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormControl
                            name="buyer"
                            onChange={handleChange}
                            value={values.buyer}
                            type="text"
                            placeholder="Поиск по имени"
                            className="mr-sm-2"/>
                        <Button type="submit" variant="outline-info">Найти</Button>
                    </Form>)
                }

            </Formik>

        </Navbar>
    );
}

export default Search;