function print(text, nextAction) {
    if (text) {
        var display = document.getElementById("display");
        display.innerHTML = display.innerHTML + text.substr(0, 1);
        var newText = text.substring(1, text.length);
        window.setTimeout(function () {
            print(newText, nextAction);
        }, 100);
    } else {
        if (nextAction) {
            nextAction();
        }
    }
}

function generateTask() {
    var display = document.getElementById("display");
    print("Please, press key 'z'\n", function () {
        display.onkeydown = function (e) {
            e = e || event;
            alert(e);
            return false;
        }
    });
}