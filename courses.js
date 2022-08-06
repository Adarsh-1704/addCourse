let addBtn = document.getElementById('add_btn')
addBtn.addEventListener('click',addChapter)

function addChapter(e){
    
    let cInput = addBtn.previousElementSibling
    if(cInput.value == ""){
        alert("Please inpute a valid Name")
    }
    else{
        if(list.children[0].className=="empty-msg"){
            list.children[0].remove()
        }
        
        let newLi = document.createElement('li')
        // newLi.textContent = cInput.value
        newLi.className = "list-group-item d-flex justify-content-between"
        newLi.innerHTML = `<h3 class="flex-grow-1">${cInput.value}</h3>
            <button id="edit_btn" class="btn btn-warning mx-1" onclick="editChapter(this)">Edit</button>
            <button id="remove_btn" class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`
        list.append(newLi)
        cInput.value = ""
    }
}

function removeChapter(currElement){
    currElement.parentElement.remove()
    let parentList = document.getElementById("list");
    if(parentList.children.length <=0){
        let newEmptyMsg = document.createElement('h3')
        newEmptyMsg.classList.add("empty-msg")
        newEmptyMsg.align = "center"
        newEmptyMsg.textContent = "No Chapters present. Please add some !!"
        parentList.appendChild(newEmptyMsg)
    }
}

function editChapter(currElement){
    if(currElement.textContent=="Done"){
        currElement.textContent = "Edit"
        let currChapterName = currElement.previousElementSibling.value
        let currHeading = document.createElement('h3')
        currHeading.className = "flex-grow-1"
        currHeading.textContent = currChapterName
        currElement.previousElementSibling.replaceWith(currHeading)
    }
    else{
        currElement.textContent = "Done"
        let currChapterName = currElement.previousElementSibling.textContent
        let currInput = document.createElement('input')
        currInput.type = "text"
        currInput.className = "form-control" 
        currInput.placeholder = "Chapter Name" 
        currInput.value = currChapterName
        currElement.previousElementSibling.replaceWith(currInput)
    }
}