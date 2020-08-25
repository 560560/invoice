import React from 'react';
import {Formik} from "formik";
import {Alert, Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import * as Yup from 'yup'
import passwordIcon from '../../assets/images/passwordlIcon.svg'
import usernameIcon from '../../assets/images/usernameIcon.svg'
import {Redirect} from "react-router-dom";


const Login = ({login, isAuth, error}) => {


    const getLoginData = (formData) => {
        login({...formData})

    }

    const validationSchema = Yup.object({
        username: Yup.string()
            .required("Логин не может быть пустым!")
            .min(1, "Логин должен содержать не менее 1 символа")
            .trim("Логин не может содержать символ пробела"),
        password: Yup.string()
            .required("Пароль не может быть пустым!")
            .min(8, "Пароль должен содержать не менее 8 символов")
            .matches(/[0-9]/, "Пароль должен содержать хотя бы одну цифру")
            .matches(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
            .matches(/[a-z]/, "Пароль должен содержать хотя бы одну строчную букву")

    })

    let initialValues = {
        username: "",
        password: ""
    }

    if (isAuth) return <Redirect to={`/terminals`}/>
    return (
        <div className="loginWrapper justify-content-center align-items-center ">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={5} lg={6} md={8} sm={10} className="col-11">
                        <h1 className="text-center pt-4 pb-3">Login form</h1>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={getLoginData}>

                            {({
                                  handleSubmit,
                                  handleChange,
                                  values,
                                  touched,
                                  errors,
                              }) => (
                                <Form noValidate onSubmit={handleSubmit} className="mt-4 ">
                                    <Form.Group as={Row} controlId="Username">
                                        <Form.Label column sm={4} className="font-weight-bold text-sm-right  d-sm-block d-none">
                                            Username
                                        </Form.Label>
                                        <Col sm={8}>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroupPrepend">
                                                        <img src={usernameIcon} alt="Username" width="20"/>
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    type="text"
                                                    name="username"
                                                    onChange={handleChange}
                                                    value={values.username}
                                                    placeholder="Enter your username"
                                                    isInvalid={touched.username && !!errors.username}
                                                    isValid={touched.username && !errors.username}
                                                    autoComplete="username"
                                                />

                                                <Form.Control.Feedback type="invalid" className="text-center ">
                                                    {errors.username}
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Col>

                                    </Form.Group>


                                    <Form.Group as={Row} controlId="Password">
                                        <Form.Label column sm={4} className="font-weight-bold text-sm-right d-sm-block d-none">
                                            Password
                                        </Form.Label>
                                        <Col sm={8}>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroupPrepend">
                                                        <img src={passwordIcon} alt="Password" width="20"/>
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    placeholder="Enter your password"
                                                    onChange={handleChange}
                                                    isInvalid={touched.password && !!errors.password}
                                                    isValid={touched.password && !errors.password}
                                                    autoComplete="password"

                                                />
                                                <Form.Control.Feedback type="invalid" className="text-center">
                                                    {errors.password}
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Col>
                                    </Form.Group>


                                    <Form.Group as={Row} className="d-flex align-items-center justify-content-between">

                                        <Col className="d-flex justify-content-end col-sm-8 col-12 ml-auto">
                                            <Button style={{width: "100%"}} className="" type="submit1" variant="info">Login</Button>
                                        </Col>

                                    </Form.Group>

                                    {error &&
                                    <Row>
                                        <Col className="d-flex justify-content-center col-sm-8 col-12 ml-auto">
                                            <Alert variant="danger" className="error__block">{error}</Alert>
                                        </Col>
                                    </Row>


                                    }


                                </Form>

                            )}

                        </Formik>


                    </Col>
                </Row>

            </Container>
        </div>

    );
}

export default Login;