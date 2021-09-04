document.addEventListener("DOMContentLoaded",() => {

    document.getElementById("addRow").onclick = function(){
        const row1 = document.createElement("li");
        const input1 = document.createElement("list1");
        row1.innerHTML = input1.value;
        document.getElementById("list").appendChild(row1);
    }
})