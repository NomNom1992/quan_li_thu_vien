let result = []


function renderBook(){
    let containerSearch = document.querySelector('.container-search')
  containerSearch.innerHTML = '' // reset containerSearch element

  if (result.length == 0) {
    containerSearch.innerHTML = `<p style="display: block;">No results found for "${keyWord}"</p>`
    return
  }

  for (let i = 0; i < result.length; i++) {
    containerSearch.innerHTML += `
      <div class="book-borrow">
        <div class="block-return">
          <img src="/imgs/media_book.gif" alt="">
        </div>
        <div class="block-book-info">
          <div class="book-detail">
            <h3 class="book-name">${result[i].title}</h3>
            <p class="book-author">${result[i].author}</p>
            <p class="book-order">Đặt mượn</p>
          </div>
          <div class="table">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" class="full-table">
              <tbody>
                <tr class="table-headers">
                  <th width="22%" class="table-header">Barcode</th>
                  <th width="15%" class="table-header">Ngày xuất bản</th>
                  <th width="25%" class="table-header">Trạng thái</th>
                  <th width="33%" class="table-header">Vị trí</th>
                </tr>
                <tr class="table-entry">
                  <td width="22%"><!-- field b -->&nbsp;${result[i].id} </td>
                  <td width="15%"><!-- field C -->&nbsp;${result[i].date}<!-- field v --><!-- field # -->&nbsp;</td>
                  <td width="25%"><!-- field % -->&nbsp;Khả dụng</td>
                  <td width="33%"><!-- field 1 -->&nbsp;${result[i].location}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>`
  }
  result = []
}

function searchBook(){
    let keyWord = document.querySelector('.input-search')
    fetch('https://q19w7.wiremockapi.cloud/booklist')
    .then(response => response.json())
    .then(books => {
        // Do something with the data
        for (let i = 0; i < books.length; i++) {
            if (books[i].title.includes(keyWord.value)) {
              result.push(books[i]);
            }
        };
        renderBook();
    })
}

