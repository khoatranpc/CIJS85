import ItemFriendPhone from './components/ItemFriendPhone';
import './App.css';
import { useEffect, useState } from 'react';
import { uuid } from './utils';
// state -> la 1 du lieu can duoc quan tam tron 1 component,
// khi state thay doi -> cap nhat lai giao dien

// tham chiếu
function App() {
  // render, re-render             2 cách truyền: truyền trực tiếp giá trị khởi tạo | truyền vào 1 callback fnc return về giá trị cần khởi tạo
  // state thay đổi -> re-render
  // props thay đổi -> re-render

  // yêu cầu 1:
  // dùng localStorage để lưu danh sách danh bạ hiện tại
  // và khi load lại trang, có thể dùng được danh sách đó để hiển thị

  // yêu cầu 2:
  /*  thực hiện lọc danh bạ, hiển thị ra người dùng hoặc số điện thoại được nhập
  ở trên ô input, thực hiện tìm kiếm khi bấm nút Tìm

    mỗi khi gõ gì đó vào ô tìm kiếm
    sẽ thực hiện lọc các phần tử có giá trị họ tên hoặc sđt trùng với giá trị hiện tại input

    -> tạo thêm 1 mảng filter
    mỗi khi tìm kiếm -> để mảng filter hiển thị : hiện ô input phải đang có giá trị
    không nhập gì cả -> để mảng ban đầu hiển thị

  /**
   * kiểm tra localStorage có data cần sử dụng hay không?
   * nếu có: khởi tạo state là dữ liệu trong localStorage
   * nếu không: khởi tạo state là dữ liệu rỗng
   * những lần thay đổi (các trạng thái thay đổi của state) đều cần phải cập nhật vào localStorage
   * 
   */
  const updateLocalStorage = (data) => {
    localStorage.setItem('phoneBook', JSON.stringify(data));
  }

  const [listFriendPhone, setListFriendPhone] = useState(null);
  const [listFilter, setListFilter] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    // filter theo ten hoac sdt
    // hàm filter -> trả ra 1 mảng mới có số lượng phần tử bằng với các phần tử thoả mãn điều kiện ở return
    const list = listFriendPhone.filter((item) => {
      return item.userName.toUpperCase().includes(searchValue.toUpperCase())
        ||
        item.numberPhone.toString().includes(searchValue);
    });
    setListFilter(list);
  }

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
    updateLocalStorage(listFriendPhone);
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
    updateLocalStorage(listFriendPhone);
  }
  const [count, setCount] = useState(0);
  useEffect(() => {
    // viết logic kiểm tra localStorage với data:
    // nếu như có data -> setData bởi localStorage, nếu có rồi, -> setLoading => false
    if (!listFriendPhone) {
      // setListFriendPhone(JSON.parse(localStorage.getItem('phoneBook')));
      fetch('https://64a2de9db45881cc0ae5d3ce.mockapi.io/api/v1/listFriendPhone').then((rs) => {
        return rs.json();
      }).then((data) => {
        if (data) {
          setListFriendPhone(data)
        }
      });
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [listFriendPhone]);
  useEffect(() => {
    const idInterval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(idInterval);
      console.log('cleanup');
    }
  }, [count]);
  return (
    // fragment
    // khoá 1: rule đặt biến != từ khoá của js

    /**
     * 
     * 
     * tìm hiểu trước useEffect (life cycle)
     * tìm hiểu về api, cách gọi api bằng js thuần,
     * thư viện axios (gọi api, config...)
     * 
     * -- C4E: project cuối khoá
     * -- CI: cũng có
     * tìm nhóm và lên ý tưởng
     * đại diện nhóm -> gửi tên thành viên, đề tài
     * create-react-app import {ReactComponent as Tên component} from 'đường dẫn tới file svg đó'
     * vitejs -> nên config như vậy
     * -> các method trong js đều có kết quả trả về -> kết quả này là gì, từ đầu có kết quả này
     */
    <div className="app-container">
      <h1>Số điện thoại bạn bè {count}</h1>
      {/* <IconUser /> */}
      <form className='form-add' onSubmit={handleSubmit}>
        <input type="text" placeholder='Tên' name='userName' />
        <input type="text" placeholder='Điện thoại' name='numberPhone' />
        <button type='submit'>Thêm</button>
      </form>
      <hr />
      <div className="feat-client">
        <input type="text" placeholder='Tìm kiếm' value={searchValue} onChange={handleChange} />
        <button>Tìm</button>
        <button onClick={() => {
          deleteSamePhone(listFriendPhone);
          setListFriendPhone([...listFriendPhone])
        }}>Xoá trùng</button>
      </div>
      <ul className="list-friend-phone">
        {loading ? (<div>Loading...</div>) : (
          searchValue ? (
            listFilter.length === 0 ?
              <p>Không tìm thấy</p> :
              listFilter.map((item) => {
                return <ItemFriendPhone key={uuid()} userName={item.userName} numberPhone={item.numberPhone} />
              })
          ) : (listFriendPhone.map((item) => {
            return <ItemFriendPhone key={uuid()} userName={item.userName} numberPhone={item.numberPhone} />
          }))
        )}
      </ul>
    </div>
  )
}

export default App
