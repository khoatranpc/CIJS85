import { Table } from 'antd';
import { format } from 'date-fns';
import './App.css';

function App() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Date of birth',
      dataIndex: 'dob',
      render(value) {
        return format(value, 'dd/MM/yyyy');
      }
    },
    {
      title: 'Location',
      dataIndex: 'location'
    }
  ];
  const dataSource = [
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
    {
      name: 'Doraemon',
      dob: new Date(),
      location: 'Japan'
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
      />
    </>
  )
}

export default App
