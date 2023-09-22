const showHomePage = () => {
    if (sessionStorage.getItem("username") !== null){
        document.getElementById('homepage-header').innerHTML = "Welcome " + sessionStorage.getItem("username") + " to the Game of Chess";
    }
    else{
        document.getElementById('homepage-header').innerHTML = "Welcome to the Game of Chess";
    }
    document.getElementById("homepage").style.display = "block";
    document.getElementById("guestpage").style.display = "none";
    document.getElementById("shoppage").style.display = "none";
    document.getElementById("registerpage").style.display = "none";
    document.getElementById("loginpage").style.display = "none";
    document.getElementById("gamepage").style.display = "none";
    document.getElementById("chessboard").style.display = "none";
    document.getElementById("home-content").style.display = "block";
    document.getElementById("shop-content").style.display = "none";
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("comment-form").style.display = "none";
}

const showShopPage = () => {
    document.getElementById("shoppage").style.display = "block";
    document.getElementById("guestpage").style.display = "none";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("registerpage").style.display = "none";
    document.getElementById("loginpage").style.display = "none";
    document.getElementById("gamepage").style.display = "none";
    document.getElementById("chessboard").style.display = "none";
    document.getElementById("home-content").style.display = "none";
    document.getElementById("shop-content").style.display = "block";
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("comment-form").style.display = "none";
    const itemsList = document.getElementById('items-container');
    const searchBar = document.getElementById('search-bar');

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        console.log(searchString);
        if(searchString !== ""){
            const fetchPromise = fetch(`https://cws.auckland.ac.nz/gas/api/Items/${searchString}`,{
            headers : {
                "Accept" : "text/plain"
            }
            });
            fetchPromise.then((response) => response.json().then((data) => showAllItems(data)));
        }else{
            getAllItems();
        }
        
    })

    const getAllItems = () => {
        const fetchPromise = fetch('https://cws.auckland.ac.nz/gas/api/AllItems',{
            headers : {
                "Accept" : "text/plain"
            },
        })
        fetchPromise.then((response) => response.json().then((data) => showAllItems(data)));
    }

    const showAllItems = (items) => {
        let htmlString = "";

        const showItem = (item) => {
            htmlString += `<div><img alt="item" src='https://cws.auckland.ac.nz/gas/api/ItemPhoto/${item.id}' height = 300 class = 'item-photo'/><div class = 'item-content'><p class = 'item-information'>${item.name}</p><p class = 'item-information'>${item.description}</p><p class = 'item-information'>${item.price}</p><button class = "button-purchase" onclick="purchase(${item.id}, event)">Purchase</button></div></div>`;
        }

        items.forEach(showItem);
        itemsList.innerHTML = htmlString
    }
    getAllItems();
}

const showRegisterPage = () => {
    document.getElementById("registerpage").style.display = "block";
    document.getElementById("guestpage").style.display = "none";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("shoppage").style.display = "none";
    document.getElementById("loginpage").style.display = "none";
    document.getElementById("gamepage").style.display = "none";
    document.getElementById("chessboard").style.display = "none";
    document.getElementById("home-content").style.display = "none";
    document.getElementById("shop-content").style.display = "none";
    document.getElementById("register-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("comment-form").style.display = "none";
}
const showLoginPage = () => {
    document.getElementById("loginpage").style.display = "block";
    document.getElementById("guestpage").style.display = "none";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("registerpage").style.display = "none";
    document.getElementById("shoppage").style.display = "none";
    document.getElementById("gamepage").style.display = "none";
    document.getElementById("chessboard").style.display = "none";
    document.getElementById("home-content").style.display = "none";
    document.getElementById("shop-content").style.display = "none";
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("comment-form").style.display = "none";
}

const showGuestPage = () => {
    document.getElementById("gamepage").style.display = "none";
    document.getElementById("guestpage").style.display = "block";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("registerpage").style.display = "none";
    document.getElementById("loginpage").style.display = "none";
    document.getElementById("shoppage").style.display = "none";
    document.getElementById("chessboard").style.display = "none";
    document.getElementById("home-content").style.display = "none";
    document.getElementById("shop-content").style.display = "none";
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("comment-form").style.display = "block";
    document.getElementById("comment-form").innerHTML = 
    `<form id="myForm">
        Your name: <input id="userName" type="text" name="fname">
        <br><br>
        <textarea id ="userComment" rows="4" cols="50" name="comment"> Enter comment here...</textarea>
        <br><br>
        <input type="button" onclick="add_comment()" value="Submit">
    </form>
    <h5>Submitted data :</h5>
    <p id="data"></p>`;

    const getAllComments = () => {
        const fetchPromise = fetch(`https://cws.auckland.ac.nz/gas/api/Comments`)
        fetchPromise.then((response) => response.text().then((data) => showAllComments(data)));
    }    

    const showAllComments = (data) => {
        document.getElementById("data").innerHTML = data
    }    
    getAllComments();
}
const showGamePage = () => {
    document.getElementById("gamepage").style.display = "block";
    document.getElementById("guestpage").style.display = "none";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("registerpage").style.display = "none";
    document.getElementById("loginpage").style.display = "none";
    document.getElementById("shoppage").style.display = "none";
    document.getElementById("chessboard").style.display = "block";
    document.getElementById("home-content").style.display = "none";
    document.getElementById("shop-content").style.display = "none";
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("comment-form").style.display = "none";
    function coloring() {
        const color = document.querySelectorAll('.box')
        color.forEach(color => {
            getId = color.id
            arr = Array.from(getId)
            arr.shift()
            aside = eval(arr.pop())
            aup = eval(arr.shift())
            a = aside + aup
            if (a === 0){
                color.style.backgroundColor = 'rgb(240, 201, 150)'
            }else{
                if (a % 2 == 0) {
                    color.style.backgroundColor = 'white'
                }
                if (a % 2 !== 0) {
                    color.style.backgroundColor = 'grey'
                }
            }
        })
    }
    coloring()
}
window.onload = showHomePage;

function isLogined(){
    if (sessionStorage.getItem("username") === null){
        document.getElementById("login").style.display = "block";
        document.getElementById("register").style.display = "block";
        document.getElementById("logout").style.display = "none"
    }else{
        document.getElementById("login").style.display = "none";
        document.getElementById("register").style.display = "none";
        document.getElementById("logout").style.display = "block"
    }
}
isLogined();

function login(e){
    const username = document.getElementById("uname-login").value
    const password = document.getElementById("psw-login").value
    const fetchPromise = 
        fetch('https://cws.auckland.ac.nz/gas/api/VersionA',{
            headers : {
                "Accept" : "text/plain",
                "Authorization": "Basic " + btoa(username + ":" + password)
            },
        })
        .then((response) => {
        if(response.status===401)
        {
            showLoginPage();
            message("Username or password incorrect", "unsuccess", e.target)
            console.log(response.status)
        }
        else{
            response.text()
            .then((responseText) => {
                sessionStorage.setItem("username", username)
                sessionStorage.setItem("password", password)
                window.history.back();
                location.reload();
            })
        }});
}    

function logout(){
    sessionStorage.clear();
    showHomePage();
    location.reload();
}


function register(){
    const username = document.getElementById("uname-register")
    console.log(username.value)
    const password = document.getElementById("psw-register")
    console.log(password.value)

    const register = fetch("https://cws.auckland.ac.nz/gas/api/Register",
        {
            headers : {
                "Content-Type" : "application/json",
            },
            method : "POST",
            body : JSON.stringify({
                "username" : username.value,
                "password" : password.value,
                "address": "string"
            })
        })
        .then((response) => {
            response.text()
            .then((responseText) => {
                console.log(responseText)
                if(responseText === "Username not available"){
                    document.getElementById("notification").innerText = "Username not available"
                    document.getElementById("notification").style.display = "block"
                }else{
                    document.getElementById("notification").innerText = "Successfully Register"
                    document.getElementById("notification").style.display = "block"
                }
            });
        })
}

function purchase(id, e){
    const fetchPromise = 
    fetch(`https://cws.auckland.ac.nz/gas/api/PurchaseItem/${id}`,{
        headers : {
            "Accept" : "text/plain",
            "Authorization": "Basic " + btoa(sessionStorage.getItem("username") + ":" + sessionStorage.getItem("password"))
        },
    })
    .then((response) => {
    if(response.status===401)
    {
        showLoginPage();
        console.log(response.status)
    }
    else{
        message(`Thank you ${sessionStorage.getItem("username")} for buying item ${id}`, "success", e.target)
    }});
}

function message(msg, type, clickedEL) {
    var message_container = document.createElement("div");
    if (type === 'success') {
        message_container.setAttribute("style", "color:black;font-size:20");
    } else {
        message_container.setAttribute("style", "color:black;font-size:20");
    }

    message_container.innerHTML = msg;
    setTimeout(function () {
        message_container.parentNode.removeChild(message_container);
    }, 2000);
    if(clickedEL !== undefined){
        clickedEL.parentNode.appendChild(message_container);
    }
}

function add_comment(){
    let userName = document.getElementById("userName").value
    let userComment = document.getElementById("userComment").value

    const comment = fetch("https://cws.auckland.ac.nz/gas/api/Comment",
        {
            headers : {
                "Accept": "text/plain",
                "Content-Type" : "application/json",
            },
            method : "POST",
            body : JSON.stringify({
                "comment" : userComment,
                "name" : userName,
            })
        })
        .then((response) => {
            response.text()
            .then((responseText) => {
                console.log(responseText)
                showGuestPage();
            });
        })
}

function mydragstart (ev){
    ev.dataTransfer.setData("text/plain", ev.target.id)
}

function mydragover(ev){
    ev.preventDefault();
}

function mydrop(ev){
    if (ev.dataTransfer !== null) {
        const id = ev.dataTransfer.getData("text/plain");
        console.log(id);
        var foundId = document.getElementById(id);
        let tagNameTarget = ev.target.tagName;
        console.log(tagNameTarget);
        if (tagNameTarget === 'LI') {
            if (ev.target !== foundId.parentNode) {
                let mymove = foundId.parentNode.id + "," + ev.target.id;
                sessionStorage.setItem("my_move", mymove);
                ev.target.appendChild(foundId);
            }
        }
    }
}

function send_my_move() {
    if (sessionStorage.getItem("my_move") !== null && sessionStorage.getItem("gameId") !== null) {
        fetch("https://cws.auckland.ac.nz/gas/api/MyMove", {
            method: "POST",
            headers: {
                "Authorization": "Basic " + btoa(sessionStorage.getItem("username") + ":" + sessionStorage.getItem("password")),
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                gameId: sessionStorage.getItem("gameId"),
                move: sessionStorage.getItem("my_move")
            })
        }).then(response => response.text());

        sessionStorage.setItem("my_move", null);
        document.getElementById('send-my-move').style.display = 'none';
        document.getElementById('get-their-move').style.display = 'block';

    }
}

function get_their_move() {
    let query = "gameId=" + sessionStorage.getItem("gameId");

    fetch("https://cws.auckland.ac.nz/gas/api/TheirMove?" + query, {
        headers: {
            "Authorization": "Basic " + btoa(sessionStorage.getItem("username") + ":" + sessionStorage.getItem("password")),
            "Content-type": "text/plain"
        },
        method: "GET"
    }).then(response => response.text())
        .then(text => move(text));
}

function move(text) {
    let pos = text.split(",");
    let source = document.querySelector("#" + pos[0] + ">img");
    document.getElementById(pos[1]).appendChild(source);

    document.getElementById('send-my-move').style.display = 'block';
    document.getElementById('get-their-move').style.display = 'none';
}

function bin_drop(ev){
    if (ev.dataTransfer !== null) {
        const id = ev.dataTransfer.getData("text/plain");
        document.getElementById(id).remove();
    }
}

function try_game() {
    fetchPromise =fetch("https://cws.auckland.ac.nz/gas/api/PairMe",{
        headers : {
            "Accept" : "text/plain",
            "Authorization": "Basic " + btoa(sessionStorage.getItem("username") + ":" + sessionStorage.getItem("password"))
        }
        })
        .then((response) => {
            if(response.status===401)
            {
                showLoginPage();
                console.log(response.status)
            }
            else{
                response.json()
                .then((data) => {
                    display_pair_info(data)
                })
        }});
}

function display_pair_info(data) {
    let side = "";
    let secondPlayer = "";
    if (data !== null && data !== undefined) {
        if (data.state === "progress") {
            if (sessionStorage.getItem("username") === data.player1) {
                side = "white";
                secondPlayer = data.player2;
            } else {
                side = "black";
                secondPlayer = data.player1;
            }
            sessionStorage.setItem("gameId", data.gameId);
            sessionStorage.setItem("chess.otherPlayer", data.player2);

            document.getElementById('pair-info').innerText = "Great " + sessionStorage.getItem("username") + ", you are playing with " + secondPlayer + ". Your pieces are " + side + ". Good luck";
            document.getElementById('try-game').style.display = 'none';
            document.getElementById('quit-game').style.display = 'block';
            document.getElementById("pair-info").style.display = 'block';
            if (side === "white") {
                document.getElementById('get-their-move').style.display = 'none';
                document.getElementById('send-my-move').style.display = 'block';
            } else {
                document.getElementById('get-their-move').style.display = 'block';
                document.getElementById('send-my-move').style.display = 'none';
            }

        } else {
            document.getElementById('pair-info').innerText = "Waiting for another player, press 'Try Game' to see if someone paired up with you.";
            document.getElementById("pair-info").style.display = 'block';
            document.getElementById("try-game").style.display = "block";
            document.getElementById("quit-game").style.display = "block";
            document.getElementById("send-my-move").style.display = "none";
            document.getElementById("get-their-move").style.display = "none";
        }
    }
}

function quit_game() {
    if (sessionStorage.getItem("gameId") !== null) {
        let queryParam = "gameId=" + sessionStorage.getItem("gameId");
        fetch("https://cws.auckland.ac.nz/gas/api/QuitGame?" + queryParam, {
            headers: {
                "Authorization": "Basic " + btoa(sessionStorage.getItem("username") + ":" + sessionStorage.getItem("password")),
            }
        })
        .then((response) => {
            if(response.status===401)
            {
                showLoginPage();
                console.log(response.status)
            }
            else{
                response.text()
                .then(text => console.log(text))
        }});
        document.getElementById("try-game").style.display = 'block';
        document.getElementById("quit-game").style.display = 'none';
        document.getElementById("get-their-move").style.display = 'none';
        document.getElementById("send-my-move").style.display = 'none';
        document.getElementById("pair-info").style.display = 'none';
        showGamePage();
    }
}