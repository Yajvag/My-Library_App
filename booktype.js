user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function book1Request() {
    window.location = "chapter_books.html";
}

function book2Request() {
    window.location = "story_books.html";
}

function book3Requst() {
    window.location = "science_books.html";
}

function book4Request() {
    window.location = "fiction_or_nonfiction_books.html";
}

function logout() {
    window.location = "index.html";
}