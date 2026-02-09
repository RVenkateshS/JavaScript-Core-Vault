window.addEventListener("keydown", (e) => {
    const insert = document.getElementById("insert");
    insert.innerHTML = `
    <div class="key">
    <table style="width:100%">
  <tr>
    <th>key</th>
    <th>Key_Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key == "" ? "Empty" : e.key } </td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
   
</table>
</div> `
}); 