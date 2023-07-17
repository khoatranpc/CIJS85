import { v4 } from 'uuid';
import { format } from 'date-fns';
import axios from 'axios';
const uuid = () => {
    return v4();
}
const formatDateToString = (date, formatString) => {
    return format(date, formatString || 'dd/MM/yyyy');
}
const formatNumber = (number) => {
    const mapNumberToString = number.toLocaleString();
    return mapNumberToString;
}
const createRequest = (setState) => {
    setState({
        isLoading: true,
        data: null
    });
    axios.get(`https://64b15771062767bc4826100a.mockapi.io/api/v1/bills`).then((rs) => {
        setState({
            isLoading: false,
            data: rs.data
        });
    })
}

export {
    uuid,
    formatDateToString,
    formatNumber,
    createRequest
};