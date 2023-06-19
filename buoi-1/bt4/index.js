const phoneBook =
    localStorage.getItem('phoneBook') ?
        JSON.parse(localStorage.getItem('phoneBook')) : [];
// 1 dòng giữ liệu là: name, phoneNumber -> dùng object
// DOM, (cú pháp khởi tạo phần tử)
//                    mảng để hiển thị giao diện
const crrUlListView = document.querySelector('ul.list-view');
const formAdd = document.querySelector('form.form-add');

const btnFind = document.querySelector('button.btn-find');
const btnDel = document.querySelector('button.btn-del');

formAdd.addEventListener('submit', (e) => {
    e.preventDefault();
    const newFriend = {
        name: e.target['name'].value,
        phoneNumber: e.target['phoneNumber'].value
    };
    phoneBook.push(newFriend);
    e.target['name'].value = '';
    e.target['phoneNumber'].value = '';
    viewPhoneBook(phoneBook);
    localStorage.setItem('phoneBook', JSON.stringify(phoneBook));
});
const formFindDel = document.querySelector('form.form-find-del');

formFindDel.onsubmit = (e) => {
    e.preventDefault();
}

const findByNameOrByPhoneNumber = (char, crrListView) => {
    const listViewFind = crrListView.filter((item) => {
        return item.name.toUpperCase().includes(char.toUpperCase()) || item.phoneNumber.includes(char);
    });
    viewPhoneBook(listViewFind);
};

const viewPhoneBook = (listView) => {
    crrUlListView.innerHTML = '';
    // cũng làm thay đổi mảng ban đầu
    listView.sort((a, b) => {
        const charA = a.name.toUpperCase();
        const charB = b.name.toUpperCase();
        if (charA > charB) {
            return 1
        }
        if (charA < charB) {
            return -1
        }
        return 0;
    });
    listView.forEach(element => {
        const li = document.createElement('li');
        const spanName = document.createElement('span');
        const spanPhoneNumber = document.createElement('span');

        spanName.innerText = element.name;
        spanPhoneNumber.innerText = element.phoneNumber;

        li.appendChild(spanName);
        li.appendChild(spanPhoneNumber);

        crrUlListView.appendChild(li);
    });
}
viewPhoneBook(phoneBook);

const deleteSamePhone = (listFriendPhone) => {
    for (let k = 0; k < listFriendPhone.length; k++) {
        for (let i = 0; i < listFriendPhone.length - 1; i++) {
            for (let j = i + 1; j < listFriendPhone.length; j++) {
                if (listFriendPhone[j].phoneNumber === listFriendPhone[i].phoneNumber) {
                    // splice thay đổi mảng ban đầu, kết quả đầu ra của splice -> mảng, chứa phần tử xoá
                    listFriendPhone.splice(j, 1);
                }
            }
        }
    }
    localStorage.setItem('phoneBook', JSON.stringify(listFriendPhone));
    viewPhoneBook(listFriendPhone);
}

btnFind.addEventListener('click', () => {
    findByNameOrByPhoneNumber(formFindDel['searchValue'].value, phoneBook);
});
btnDel.addEventListener('click', () => {
    deleteSamePhone(phoneBook);
})