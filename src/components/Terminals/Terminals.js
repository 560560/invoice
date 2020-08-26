import React, { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import TerminalItem from "./TerminalItem";

const Terminals = ({ addNewTerminal, terminals, deleteTerminal }) => {
  const [terminalName, setTerminalName] = useState("");
  const [terminalDescription, setTerminalDescription] = useState("");
  const [error, setError] = useState("");
  const [selectedTerminal, setSelectedTerminal] = useState("empty");

  const addTerminal = () => {
    if (terminalName.trim().length < 1) {
      setError(`Поле "Наименование терминала" не может быть пустым`);
      setTimeout(() => {
        setError(null);
      }, 2000);
    } else if (terminalDescription.trim().length < 1) {
      setError(`Поле "Описание терминала" не может быть пустым`);
      setTimeout(() => {
        setError(null);
      }, 2000);
    } else if (terminalName.trim().length > 30) {
      setError(`Длина наименования терминала не может быть более 30 символов`);
      setTimeout(() => {
        setError(null);
      }, 5000);
    } else if (terminalDescription.trim().length > 120) {
      setError(`Длина описания терминала не может быть более 120 символов`);
      setTimeout(() => {
        setError(null);
      }, 5000);
    } else {
      addNewTerminal(terminalName, terminalDescription);
      setTerminalDescription("");
      setTerminalName("");
    }
  };

  const deleteSelectedTerminal = () => {
    if (selectedTerminal !== "empty") {
      deleteTerminal(selectedTerminal);
      setSelectedTerminal("empty");
    }
  };

  return (
    <Container className="terminal__container">
      <h1 className="text-center mt-5 ">Терминалы</h1>

      <Row className="justify-content-center terminal__add__interface">
        <Col className="col-sm-11 col-11">
          <div className="terminal__name__input">
            <span>Наименование терминала</span>
            <input
              type="text"
              className="w-80"
              value={terminalName}
              onChange={(e) => {
                setTerminalName(e.currentTarget.value);
              }}
              placeholder="Введите наименование терминала"
            />
          </div>
          <div className="terminal__description__input">
            <span>Описание терминала</span>
            <TextareaAutosize
              type="text"
              value={terminalDescription}
              autoFocus={true}
              autoComplete="off"
              onChange={(e) => {
                setTerminalDescription(e.currentTarget.value);
              }}
              placeholder="Введите описание терминала"
            />
          </div>

          <div className="add__button__wrapper">
            <div className="add__button" onClick={addTerminal}>
              Добавить терминал
            </div>
          </div>

          {error && (
            <Row>
              <Col className="d-flex justify-content-end col-sm-12 col-12 ml-auto">
                <Alert variant="danger" className="error__block">
                  {error}
                </Alert>
              </Col>
            </Row>
          )}
        </Col>
      </Row>

      <div className="terminals__table">
        <Row className="terminals__table_header ">
          <Col className="col-1 title">#</Col>
          <Col className="col-3 title">Наименование терминала</Col>
          <Col className="col-7 title">Описнаие терминала</Col>
        </Row>
        <div className="scroll__table">
          {terminals.map((terminal, index) => (
            <TerminalItem
              key={index}
              terminal={terminal}
              setSelectedTerminal={setSelectedTerminal}
              selectedTerminal={selectedTerminal}
              index={index}
            />
          ))}
        </div>
      </div>
      {terminals.length > 0 && (
        <Row className="position-absolute remove__button__wrapper">
          <Col className="d-flex justify-content-sm-end justify-content-center p-0">
            <div
              className={
                selectedTerminal !== "empty"
                  ? "remove__button"
                  : "blocked__button"
              }
              onClick={deleteSelectedTerminal}
            >
              Удалить терминал
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Terminals;
