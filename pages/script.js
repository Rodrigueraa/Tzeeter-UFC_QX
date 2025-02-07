document.getElementById("input_tzeet").addEventListener("input", function (e) {
    e.preventDefault();
    let textarea = this;
    let counter = document.getElementById("counter");
    
    let maxLength = 140;

    let length = textarea.value.length;
    let remaining = maxLength - length;

    if (length === 0){
        counter.style.display = "none";
    } else if (length < 100) {
        counter.style.display = "inline";
        counter.innerHTML = length;
        counter.style.color = "black";
    } else if (length >= 100 && length <= 140) {   
        counter.style.display = "inline";
        counter.innerHTML = length;
        counter.style.color = "rgb(255, 200, 0)";
    } else if (length > 140){
        counter.style.display = "inline";
        counter.innerHTML = remaining;
        counter.style.color = "red";
    }
});
