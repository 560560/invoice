import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const Buyer = ({buyer}) => {
    const history = useHistory()
    if (!buyer) return <div>loading...</div>

    return (
        <Container>
            <Row className="justify-content-center">

                <Col className="col-6">
                    <Row className="mt-5 justify-content-center">
                        <Col className="col-12  ">
                            <div className="buyer__name">{buyer.name}</div>

                        </Col>
                    </Row>

                    <Row className="justify-content-center mb-3">
                        <Col className=" text-right col-6">
                            <div className="buyer__description">ID покупателя:</div>
                        </Col>
                        <Col className="col-6">
                            <div className="buyer__values">{buyer.id}</div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mb-3">
                        <Col className="text-right col-6  ">
                            <div className="buyer__description">Средний чек:</div>
                        </Col>
                        <Col className="col-6">
                            <div className="buyer__values">{buyer.averageCheck}</div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mb-3">
                        <Col className="text-right col-6">
                            <div className="buyer__description">Количество покупок:</div>
                        </Col>
                        <Col className="col-6">
                            <div className="buyer__values">{buyer.purchaseCount}</div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mb-3">
                        <Col className=" text-right col-6">
                            <div className="buyer__description">Общая выручка:</div>
                        </Col>
                        <Col className="col-6 ">
                            <div className="buyer__values">{buyer.totalRevenue}</div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="col-12 text-center ">
                            <Button onClick={() => {history.push("/buyers")}}>Назад</Button>
                        </Col>
                    </Row>


                </Col>

            </Row>


        </Container>
    );
}

export default Buyer;