import React from 'react';
import {Col, Row} from "react-bootstrap";

const TerminalItem = ({terminal, selectedTerminal, setSelectedTerminal, index}) => {
    return (
        <Row id={terminal.id}
             className={selectedTerminal === terminal.id ? "terminal__table__item selected" : "terminal__table__item"}
             onClick={() => {
                 if (selectedTerminal === terminal.id) {
                     setSelectedTerminal("empty")
                 } else setSelectedTerminal(terminal.id)
             }}>
            <Col className="col-1  justify-content-center">{index + 1}</Col>
            <Col className="col-3  pl-3">{terminal.name}</Col>
            <Col className="col-7  pl-3">{terminal.description}</Col>
        </Row>
    );
}

export default TerminalItem;