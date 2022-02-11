let count=0

document.getElementById('add-button').addEventListener('click',function(){
    ++count
    const inputValue=document.getElementById('input-value').value;
    if(inputValue=='')
    {
        alert('no input')
    }
    else if (inputValue==parseFloat(inputValue))
    {
        alert('insert string')
    }
    else{ const tableBox=document.getElementById('table-box')
          const tableFoot=document.createElement('tr')
          const mainContainer=document.getElementById('content-container')
          const tableContainer=document.createElement('tr')
          tableFoot.innerHTML=`<td class="w-100 text-center" colspan="2"><button id='clear-all' class="btn btn-danger px-4 py-1 rounded-pill w-25 mx-auto">Clear All</button></td>`
          console.log(tableFoot.innerHTML)
          tableContainer.innerHTML=` <th class="w-25" scope="row">${count}</th>
          <td class="w-25">${inputValue}</td>
          <td class="w-25 mr-4 pl-0"> <button class="btn btn-danger mr-1 delete-button rounded-pill">Delete</button><button class="btn btn-primary done-button rounded-pill ml-1">Done</button></td> `
          mainContainer.appendChild(tableContainer)
          tableBox.appendChild(tableFoot)
        //   delete and done button

           const delteBtn=document.getElementsByClassName('delete-button')
           const doneBtn =document.getElementsByClassName('done-button')
           for(const dltbutton of delteBtn){
               dltbutton.addEventListener('click',function(e){
                   e.target.parentNode.parentNode.style.display ='none'
               })
           }
           for(const donebutton of doneBtn){
            donebutton.addEventListener('click',function(e){
                e.target.parentNode.parentNode.style.textDecoration="line-through"
            })
        }
        // delete all 
          const deleteAll=document.getElementById('clear-all')
          deleteAll.addEventListener('click',function(e){
              e.target.parentNode.parentNode.parentNode.parentNode.style.display='none'

          })
          document.getElementById('input-value').value=''
    }})