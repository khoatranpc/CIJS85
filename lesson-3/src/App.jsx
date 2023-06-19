import ItemFriendPhone from './components/ItemFriendPhone';
import './App.css';

function App() {
  // render, re-render
  return (
    // fragment
    // khoá 1: rule đặt biến != từ khoá của js
    <div className="app-container">
      <h1>Số điện thoại bạn bè</h1>
      <form className='form-add'>
        <input type="text" placeholder='Tên' />
        <input type="text" placeholder='Điện thoại' />
        <button type='submit'>Thêm</button>
      </form>
      <hr />
      <div className="feat-client">
        <input type="text" placeholder='Tìm kiếm' />
        <button>Tìm</button>
        <button>Xoá trùng</button>
      </div>
      <ul className="list-friend-phone">
        <ItemFriendPhone userName="Khoa đẹp trai" >
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
        </ItemFriendPhone>
        <ItemFriendPhone userName="Nobito" />
        <ItemFriendPhone userName="Naruto" />
      </ul>
    </div>
  )
}

export default App
