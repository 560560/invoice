import React from 'react';
import Search from "../Common/Search/Search";
import {Container, Table} from "react-bootstrap";
import BuyerItem from "./BuyerItem";
import arrowUp from "../../assets/images/arrowUp.svg"
import arrowDown from "../../assets/images/arrowDown.svg"





const Buyers = ({setNameSearchSelector, buyers, setSorting, nameSearchSelector}) => {
    let setSort = (e) => {
        let [field, flow] = e.target.id.split(" ")
        setSorting(field, flow)
    }

    return (

        <div className="col-10 ">
            <Container>
                <h1 className="text-center mt-5">Покупатели</h1>
                <Search setNameSearchSelector={setNameSearchSelector} nameSearchSelector={nameSearchSelector}/>
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
                                        <img onClick={setSort}src={arrowDown} id="averageCheck decrease"alt="arrowDown"/>
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
                        {buyers.map(buyer => <BuyerItem key={buyer.id} buyer={buyer}/>)}
                        </tbody>

                    </Table>
                </div>

            </Container>
        </div>
    );
}

export default Buyers;
