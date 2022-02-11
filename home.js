let count=0
document.getElementById('add-button').addEventListener('click',function(){
    ++count
    const inputValue=document.getElementById('input-value').value;
    if(inputValue=='')
    {
        alert('no input')
    }
    else{
          const mainContainer=document.getElementById('content-container')
          const tableContainer=document.createElement('tr')
          tableContainer.innerHTML=` <th scope="row">${count}</th>
          <td>${inputValue}</td>
          <td>Otto</td> `
          mainContainer.appendChild(tableContainer)
    }})