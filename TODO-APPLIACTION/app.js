var ul = document.getElementById("ul")



function add_todo() {
    var input = document.getElementById("input");
    var li = document.createElement("li")

    ul.appendChild(li)
    var del = document.createElement("button")
    var li_text = document.createElement("h1")
    var li_text2 = document.createElement("h5")
    var div = document.createElement("div")
    var edit = document.createElement("button")

    div.appendChild(del)
    li.appendChild(li_text)
    li.appendChild(li_text2)

    div.appendChild(edit)
    li.appendChild(div)
    li_text.innerHTML = input.value
    var del_text = document.createTextNode("Delete")
    del.appendChild(del_text)
    var edit_text = document.createTextNode("Edit")
    edit.appendChild(edit_text)
    del.setAttribute('class', "btn")
    edit.setAttribute('class', "btn")
    edit.setAttribute('id', "btn1")
    div.setAttribute('class', "btn-parent")
    li.setAttribute('class', "li")
    del.setAttribute("onClick", "del(this)")

    edit.setAttribute("onClick", "edit(this)")
    if (input.value === '') {
        alert('you can not add an empty Todo')
        li.remove()
    }
    var date = new Date()
    var time1 = date.getHours()
    var time2 = date.getMinutes()
    var time3 = date.getDay()
    var time5 = date.getMonth()
    
    var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var nameOfToday = dayNames[time3]
    var month = ["Jan", "Feb", "March", "April", "MAy", "June", "july","Agust" , "Sep" ,"oct", "nov" , "dec"];
    var this_month = month[time5]
    console.log(time5)
// console.log(nameOfthismonth)
    var exact_time = document.createTextNode( " ( "+this_month + " : " + nameOfToday+" "+" " + time1 + " : " + time2 +" )" )
    li_text2.appendChild(exact_time)





    var update= document.createElement("button")
    var update_text = document.createTextNode("update")
    update.appendChild(update_text)
    update.setAttribute("class","btn");
    update.setAttribute('id', "update-btn")
    update.style.display="none"
    div.appendChild(update)



    var para1 = document.getElementById('para');
    para1.style.display="none"
   ul.style.overflowY ="scroll"


  

    input.value = ""


}


function del(a) {
    a.parentNode.parentNode.remove()
}
function edit(a) {
    var input = document.getElementById("input");
 
    // var updatebtn = document.getElementById("update-btn");
    a.style.display="none"
    // a.parentNode.parentNode.childNodes[2].childNodes[1].style.display="none"
    a.parentNode.parentNode.childNodes[2].childNodes[2].setAttribute("onClick","update1(this)" )
    a.parentNode.parentNode.childNodes[2].childNodes[2].style.display="inline-block"
    // updatebtn.setAttribute("onClick","update1(this)");
    // var editbtn = document.getElementById("btn1");
    input.value=a.parentNode.parentNode.childNodes[0].innerHTML
    
    // updatebtn.style.display="inline-block"
    // editbtn.style.display="none"
    // a.parentNode.parentNode.childNodes[2].appendChild(update)
    console.log(a.parentNode.parentNode.childNodes[2].childNodes[1])
    // let edit_li = prompt("edit your todo", a.parentNode.parentNode.childNodes[0].innerHTML)
    // a.parentNode.parentNode.childNodes[0].innerHTML = edit_li
   


}
function update1(a) {
  
  
    a.style.display="none"
    a.parentNode.parentNode.childNodes[2].childNodes[1].style.display="inline-block"
    var input = document.getElementById("input");
    // var updatebtn = document.getElementById("update-btn");
    a.parentNode.parentNode.childNodes[0].innerHTML=input.value
    // a.parentNode.parentNode.childNodes[2].childNodes[1]
    // var editbtn = document.getElementById("btn1");
    // updatebtn.style.display="none"
    // editbtn.style.display="inline-block"
    // console.log(e.parentNode.parentNode.childNodes[2].childNodes[1])
    input.value = ""
}

function del_all() {
    ul.innerHTML = ""

}
function update() {
    
}