import { v4 } from 'uuid';
import { format } from 'date-fns';
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
export {
    uuid,
    formatDateToString,
    formatNumber
};