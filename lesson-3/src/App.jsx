import ItemFriendPhone from './components/ItemFriendPhone';
import './App.css';
import { useState } from 'react';
// state -> la 1 du lieu can duoc quan tam tron 1 component,
// khi state thay doi -> cap nhat lai giao dien

function App() {
  // render, re-render             2 cách truyền: truyền trực tiếp giá trị khởi tạo | truyền vào 1 callback fnc return về giá trị cần khởi tạo
  const [user, setUser] = useState({
    userName: '',
    numberPhone: '',
  });
  // state thay đổi -> re-render
  // props thay đổi -> re-render
  const [listFriendPhone, setListFriendPhone] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newFriendPhone = {
      userName: form['userName'].value,
      numberPhone: form['numberPhone'].value,
    };
    listFriendPhone.push(newFriendPhone);
    listFriendPhone.sort((a, b) => {
      const charA = a.userName.toUpperCase();
      const charB = b.userName.toUpperCase();
      if (charA > charB) {
        return 1
      }
      if (charA < charB) {
        return -1
      }
      return 0;
    });
    setListFriendPhone([...listFriendPhone]);
  }
  const deleteSamePhone = (listFriendPhone) => {
    // vòng i -> duyệt nhưng sẽ lấy vị trí của phần tử nào đó và kết hợp với vòng j để so sánh và xoá
    for (let i = 0; i < listFriendPhone.length - 1; i++) {
      for (let j = i + 1; j < listFriendPhone.length; j++) {
        if (listFriendPhone[j].phoneNumber === listFriendPhone[i].phoneNumber) {
          // splice thay đổi mảng ban đầu, kết quả đầu ra của splice -> mảng, chứa phần tử xoá
          listFriendPhone.splice(j, 1);
        }
      }
    }
  }
  return (
    // fragment
    // khoá 1: rule đặt biến != từ khoá của js
    <div className="app-container">
      <h1>Số điện thoại bạn bè</h1>
      <form className='form-add' onSubmit={handleSubmit}>
        <input type="text" placeholder='Tên' name='userName' />
        <input type="text" placeholder='Điện thoại' name='numberPhone' />
        <button type='submit'>Thêm</button>
      </form>
      <hr />
      <div className="feat-client">
        <input type="text" placeholder='Tìm kiếm' />
        <button>Tìm</button>
        <button onClick={() => {
          deleteSamePhone(listFriendPhone);
          setListFriendPhone([...listFriendPhone])
        }}>Xoá trùng</button>
      </div>
      <ul className="list-friend-phone">
        {listFriendPhone.map((item) => {
          return <ItemFriendPhone userName={item.userName} numberPhone={item.numberPhone} />
        })}
      </ul>
    </div>
  )
}

export default App
