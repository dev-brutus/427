var LOCK = false;

function print(text, nextAction) {
    if (text) {
        LOCK = true;
        var display = document.getElementById("display");
        display.innerHTML = display.innerHTML + text.substr(0, 1);
        display.scrollTop = display.scrollHeight;
        var newText = text.substring(1, text.length);
        window.setTimeout(function () {
            print(newText, nextAction);
        }, 50);
    } else {
        LOCK = false;
        if (nextAction) {
            nextAction();
        }
    }
}

function generateTask() {
    var randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

    window.setTimeout(function () {
        var message = "\nPlease, press key '" + randomChar + "'\n"
        print(message, function () {
            document.onkeydown = function (e) {
                var keyCode = (e || event).keyCode;
                var ch = String.fromCharCode(keyCode);
                if (keyCode >= 0 && keyCode <= 127) {
                    if (!LOCK) {
                        if (ch == randomChar) {
                            document.onkeydown = undefined;
                            print("OK... \n", generateTask);
                        } else {
                            print("Wrong!!! \n" + message);
                        }
                    }
                    return false;
                }

                return true;
            }
        });
    }, Math.floor(Math.random() * 10000));
}
