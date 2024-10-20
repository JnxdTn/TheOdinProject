let login = prompt("Who's There?", '');

if(login === "Admin"){
    let password = prompt("Password:", '');

    if(password === "TheMaster"){
        alert("Welcome!")
    }else if(password === "" || password === null){
        alert("Cancelled")
    }else{
        alert("Wrong Password.")
    }

}else if(login === "" || login === null){
    alert("Cancelled")
}else{
    alert("I dont know you")
}

alert("BOBO!")