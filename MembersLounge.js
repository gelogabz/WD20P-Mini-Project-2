var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-light', 'shadow', 'bg-opacity-75');
    } else {
        nav.classList.remove('bg-light', 'shadow',);
    }

})

function randomNumberID() {
    return Math.floor(Math.random() * (1000002 - 1 + 1)) + 1;
}
$(document).ready(
    function () {
        getpostsLists();
        document.getElementById('modalSubmit').addEventListener('click', modalSubmit);

        function modalSubmit(e) {
            let productTempId = randomNumberID();
            let showImage = sessionStorage.getItem('img');
            let titleName = document.getElementById('titleName').value;
            let expDescription = document.getElementById('expDescription').value;
            let Category = document.getElementById('Category').value;

            const productId = productTempId + titleName + randomNumberID(); //Used to give each posts
            if (titleName !== '' && expDescription !== '') {
                let newProduct = {
                    id: productId,
                    img: showImage,
                    name: titleName.toUpperCase(),
                    category: Category,
                    description: expDescription
                };

                //Add new posts to localStorage. The localStorage key for all the posts is postsList'
                if (localStorage.getItem("postsList") === null || localStorage.getItem("postsList") === [] || localStorage.getItem("postsList") === undefined) {
                    let postsList = [];
                    postsList.push(newProduct);
                    localStorage.setItem("postsList", JSON.stringify(postsList));
                } else {
                    let postsList = JSON.parse(localStorage.getItem("postsList"));
                    postsList.push(newProduct);
                    localStorage.setItem("postsList", JSON.stringify(postsList));
                }
            } else {
                alert('All fields are required. Please check your entries again');
            }
            getpostsLists();

            resetForm();
            e.preventDefault();
        }

    }); //DocumentBody end tag

//get the data stored in the localStorage for display on load
function getpostsLists() {
    if (localStorage.getItem("postsList") === null) {
        alert("Your timeline is empty. Just click post to have a memorable experience to get back to.");
        document.getElementById("search").disabled = true;
    } else {
        document.getElementById("search").disabled = false;
        let postsList = JSON.parse(localStorage.getItem("postsList"));
        let postDisplay = document.getElementById('postDisplay');
        //Display result
        postDisplay.innerHTML = '';
        for (let i = 0; i < postsList.length; i++) {
            let id = postsList[i].id;
            let img = postsList[i].img;
            let name = postsList[i].name;
            let category = postsList[i].category;
            let description = postsList[i].description;

            postDisplay.innerHTML += '<li class="list-group-item"><img src="' + img + '" style="width:100px;""><br><strong>' + name + '</strong><p>' + category + '</p><p>' + description + '</p><p><a' +
                ' href="#" onclick="editProduct(\'' + id + '\')" data-bs-toggle="modal" data-bs-target="#addNewPost">' +
                '<i class="fa fa-edit green-text darken-2 "></i>&nbsp;Edit</a> &nbsp;&nbsp; ' +
                '<a href="#" id="deleteId" onclick="deleteProduct(\'' + id + '\')"><i class="fa fa-trash' +
                ' red-text' +
                ' darken-2"></i>&nbsp;' +
                ' Delete</a>' +
                ' </p>' +
                '</li>';
        }
    }
}


// deleting the main bookmark.
function deleteProduct(id) {
    let postsList = JSON.parse(localStorage.getItem("postsList"));
    for (let i = 0; i < postsList.length; i++) {
        if (postsList[i].id === id) {
            postsList.splice(i, 1);
            //console.log(result);
        }
    }
    localStorage.setItem("postsList", JSON.stringify(postsList)); //reset the values in the local storage
    getpostsLists(); // to quickly display what is remaining from local storage.
}

// Editing a product
function editProduct(id) {
    "use strict";
    document.getElementById('modalSubmit').style.display = "none";
    document.getElementById("addNewPostLabel").textContent = "Edit Product";

    let tempId = id;
    let parentDiv = document.getElementById('modalFooter');
    let postsList = JSON.parse(localStorage.getItem("postsList"));


    if (parentDiv.contains(document.getElementById("editButton"))) {
        document.getElementById('editButton').disabled = false;
    } else {
        let editButton = document.createElement('button');
        editButton.id = "editButton";
        editButton.className = "fa fa-hdd-o btn btn-outline-primary btn-sm m-2";
        editButton.textContent = " Save data";
        parentDiv.appendChild(editButton);
    }
    for (let i = 0; i < postsList.length; i++) {
        if (postsList[i].id === id) {
            document.getElementById("titleName").value = postsList[i].name;
            document.getElementById("expDescription").value = postsList[i].description;
            document.getElementById("Category").value = postsList[i].category;
        }
    }

    document.getElementById("editButton").addEventListener("click", function () {
        addProduct();
        let postsList = JSON.parse(localStorage.getItem("postsList"));
        for (let i = 0; i < postsList.length; i++) {
            if (postsList[i].id === tempId) {
                postsList.splice(i, 1);
            }
        }
        localStorage.setItem("postsList", JSON.stringify(postsList));
        getpostsLists();
        resetForm();
        document.getElementById("editButton").style.display = "none";

        $(".createPost").on('click', productFormReset());

    });

}

function resetForm() {
    document.getElementById("showImage").value = "";
    document.getElementById("titleName").value = "";
    document.getElementById("expDescription").value = "";
    document.getElementById("Category").value = "";
}

function productFormReset() {
    document.getElementById('modalSubmit').style.display = "block";
    document.getElementById("addNewPostLabel").textContent = "New Product Form";
    document.getElementById('editButton').style.display = "none";
}

function addProduct() {
    let productTempId = randomNumberID();
    let showImage = document.getElementById('showImage').value;
    let titleName = document.getElementById('titleName').value;
    let expDescription = document.getElementById('expDescription').value;
    let Category = document.getElementById('Category').value;

    const productId = productTempId + titleName + randomNumberID(); //Used to give each post
    if (titleName !== '' && expDescription !== '') {
        let newProduct = {
            id: productId,
            img: showImage,
            name: titleName.toUpperCase(),
            category: Category,
            description: expDescription
        };
        if (localStorage.getItem("postsList") === null || localStorage.getItem("postsList") === [] || localStorage.getItem("postsList") === undefined) {
            let postsList = [];
            postsList.push(newProduct);
            localStorage.setItem("postsList", JSON.stringify(postsList));
        } else {
            let postsList = JSON.parse(localStorage.getItem("postsList"));
            postsList.push(newProduct);
            localStorage.setItem("postsList", JSON.stringify(postsList));
        }
    }
}

//holdval_ document.getElementById('editButton').style.display = "none"; //checks in case of disabled button.

//end of code