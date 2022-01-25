function generate() {
    let res = [];
    let arr = [1, 2, 3, 4, 5];
    while (true) {
        let x = parseInt(Math.random() * 5) + 1;
        if (arr.length == 0) {
            break;
        }
        if (arr.indexOf(x) != -1) {
             console.log(x);
            res.push(x);
            arr.splice(arr.indexOf(x), 1);
        }
        else {
            continue;
        }
    }
    console.log(res);
    let y = parseInt(Math.random() * 4) + 1;
    res.push(y);
     console.log(res);
    return res;

}
let img1 = `<img data-ns-test = "img1" src="https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="photo" onclick="find(this)">`;

let img2 = `<img data-ns-test = "img2" src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="photo" onclick="find(this)">`;

let img3 = `<img data-ns-test = "img3" src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="photo" onclick="find(this)">`;

let img4 = `<img data-ns-test = "img4" src="https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="photo" onclick="find(this)">`;

let img5 = `<img data-ns-test = "img5" src="https://images.pexels.com/photos/1727004/pexels-photo-1727004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="photo" onclick="find(this)">`;

// , "", "", "", ""

window.onload = function () {
    let index = document.getElementById("main");
    let res = generate();
    let position = "beforeend";
    // console.log(res);
    for (let i = 0; i < 6; i++) {
        if (res[i] == 1) {
            index.insertAdjacentHTML(position, img1);
        }
        else if (res[i] == 2) {
            index.insertAdjacentHTML(position, img2);
        }
        else if (res[i] == 3) {
            index.insertAdjacentHTML(position, img3);
        }
        else if (res[i] == 4) {
            index.insertAdjacentHTML(position, img4);
        }
        else if (res[i] == 5) {
            index.insertAdjacentHTML(position, img5);
        }
    }
}

let res = [];
let eleIndex = 0;
let eleIndex2 = 0;
let i = 1;
function find(element) {
    let x = element.getAttribute("data-ns-test");
    let ele = document.getElementById("main");
    let parent = element.parentNode;
    let index = Array.prototype.indexOf.call(parent.children, element);
    console.log(element);
    let resetButton = `<button id="reset" class="btn" onclick="reset()">reset</button>`;
    let verifyButton = `<button id="btn" class="btn" onclick="verify()">Verify</button>`;
   
    if (i == 1) {
        res.push(x);
        eleIndex = index;
        ele.insertAdjacentHTML("beforeend", resetButton);
        i++;
    }
    else if (i == 2 && eleIndex != index) {
        res.push(x);
        eleIndex2 = index;
        ele.insertAdjacentHTML("beforeend", verifyButton);
    }
   

    // console.log(res);
}

function reset() {
    let e = document.getElementById("reset");
    e.parentElement.removeChild(e);
    if (res.length == 2) {
        let v = document.getElementById("btn");
        v.parentElement.removeChild(v);
    }
    res.splice(0, res.length);
    i--;

    console.log(res);
}

function verify() {
    let ele = document.getElementById("main");
    let e = document.getElementById("reset");
    let v = document.getElementById("btn");
    let para1 = `<p id="para">You are a human. Congratulations!</p>`;
    let para2 = `<p id="para">We can't verify you as a human. You selected the non-identical tiles.</p>`;
    if (res[0] == res[1] && eleIndex != eleIndex2) {
        ele.insertAdjacentHTML("beforeend", para1);
    }
    else {
        ele.insertAdjacentHTML("beforeend", para2);
    }
    e.parentElement.removeChild(e);
    v.parentElement.removeChild(v);
}