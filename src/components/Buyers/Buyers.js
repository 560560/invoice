import React, {useState} from 'react';
import Search from "../Common/Search/Search";
import {ButtonGroup, Col, Container, Dropdown, DropdownButton, Pagination, Row, Table} from "react-bootstrap";
import BuyerItem from "./BuyerItem";
import arrowUp from "../../assets/images/arrowUp.svg"
import arrowDown from "../../assets/images/arrowDown.svg"


const Buyers = ({setNameSearchSelector, buyers, setSorting, nameSearchSelector,
                    setBuyersPerPage, buyersPerPage}) => {

    const [prevSelectedSortElId, setPrevSelectedSortElId] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    if (buyers.length < 6 && currentPage !== 1){
        setCurrentPage(1)
    }

    let setSort = (e) => {
        let [field, flow] = e.target.id.split(" ")
        setSorting(field, flow)
        prevSelectedSortElId && document.getElementById(prevSelectedSortElId).classList.remove("active")
        document.getElementById(e.target.id).setAttribute('class', 'active')
        setPrevSelectedSortElId(e.target.id)
    }

    const buyerTableSize = (size) => {
        setBuyersPerPage(size)
    }

    let activePage = currentPage;
    let items = [];
    for (let number = 1; number <= Math.ceil(buyers.length/buyersPerPage); number++) {
        items.push(
            <Pagination.Item key={number} active={number === activePage} onClick={() =>setCurrentPage(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    return (

        <div className="col-xl-10 col-11">
            <Container>
                <h1 className="text-center mt-5">Покупатели</h1>
                <Search setNameSearchSelector={setNameSearchSelector} nameSearchSelector={nameSearchSelector}/>
                {buyers.length === 0 && <Row className="justify-content-center mt-5 mb-3 ml-2 mr-2">
                    <div className="font-weight-bold" style={{color: "red"}}>К сожалению, нет покупателя с таким именем</div>
                </Row>}
                <Row className="mb-2">
                    <Col className="d-flex justify-content-end">
                        <DropdownButton
                            as={ButtonGroup}
                            key="left"
                            id={`dropdown-button-drop-left`}
                            drop="left"
                            variant="primary"
                            title={` Покупателей в списке`}
                        >
                            <Dropdown.Item eventKey="1" active={buyersPerPage === 5} onClick={() => {
                                buyerTableSize(5)
                            }}>5</Dropdown.Item>
                            <Dropdown.Item eventKey="2" active={buyersPerPage === 10} onClick={() => {
                                buyerTableSize(10)
                            }}>10</Dropdown.Item>
                            <Dropdown.Item eventKey="3" active={buyersPerPage === 15} onClick={() => {
                                buyerTableSize(15)
                            }}>15</Dropdown.Item>

                        </DropdownButton>
                    </Col>
                </Row>

                <div className="buyers__table">
                    <Table striped bordered hover>
                        <thead>
                        <tr>

                            <th>
                                <div className="header_col">ID покупателя</div>
                            </th>

                            <th>
                                <div className="header_col">Имя покупателя</div>
                            </th>

                            <th>
                                <div className="header_col">Средний чек
                                    <div className="sorting__arrows">
                                        <img onClick={setSort} src={arrowUp} id="averageCheck increase" alt="arrowUp"/>
                                        <img onClick={setSort} src={arrowDown} id="averageCheck decrease" alt="arrowDown"/>
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="header_col">Количество покупок
                                    <div className="sorting__arrows">
                                        <img onClick={setSort} src={arrowUp} id="purchaseCount increase" alt="arrowUp"/>
                                        <img onClick={setSort} src={arrowDown} id="purchaseCount decrease" alt="arrowDown"/>
                                    </div>
                                </div>
                            </th>

                            <th>
                                <div className="header_col">Общая выручка
                                    <div className="sorting__arrows">
                                        <img onClick={setSort} src={arrowUp} id="totalRevenue increase" alt="arrowUp"/>
                                        <img onClick={setSort} src={arrowDown} id="totalRevenue decrease" alt="arrowDown"/>
                                    </div>
                                </div>
                            </th>

                        </tr>

                        </thead>

                        <tbody>
                        {buyersPerPage !== 5 && buyers
                            .filter((item, index) => index < buyersPerPage)
                            .map(buyer => <BuyerItem key={buyer.id} buyer={buyer}/>)
                        }

                        {buyersPerPage === 5 &&
                        buyers
                            .slice(buyersPerPage*activePage-buyersPerPage, buyersPerPage*activePage).map(buyer => <BuyerItem key={buyer.id} buyer={buyer}/>)
                        }

                        </tbody>

                    </Table>

                    {buyersPerPage === 5 && buyers.length>5 &&
                    <Row><Col className="d-flex justify-content-center"><Pagination>{items}</Pagination></Col></Row>}

                </div>

            </Container>
        </div>
    );
}

export default Buyers;
