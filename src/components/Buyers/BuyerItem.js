import React from 'react';
import {useHistory} from "react-router-dom";

const BuyerItem = ({buyer}) => {
    const history = useHistory()
    return (
        <tr className="table__row">
            <td onClick={() => {history.push("/buyers/" + buyer.id)}} className="text-center">{buyer.id + 1}</td>
            <td>{buyer.name}</td>
            <td className="text-center">{buyer.averageCheck}</td>
            <td className="text-center">{buyer.purchaseCount}</td>
            <td className="text-center">{buyer.totalRevenue}</td>
        </tr>
    );
}

export default BuyerItem;