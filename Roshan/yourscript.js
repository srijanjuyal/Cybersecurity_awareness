function encryptFunc() {
    let text = document.getElementById("textt").value;
    let key = parseInt(document.getElementById("key").value);
    let encryptedMessage = "";

    for (let i = 0; i < text.length; ++i) {
        let temp = text.charCodeAt(i);

        if (temp >= 97 && temp <= 122) {
            temp = (temp - 97 + key) % 26 + 97;
        } else if (temp >= 65 && temp <= 90) {
            temp = (temp - 65 + key) % 26 + 65;
        }

        encryptedMessage += String.fromCharCode(temp);
    }

    document.getElementById("result").innerText = "Encrypted message: " + encryptedMessage;
}

function decryptFunc() {
    let text = document.getElementById("textt").value;
    let key = parseInt(document.getElementById("key").value);
    let decryptedMessage = "";

    for (let i = 0; i < text.length; ++i) {
        let temp = text.charCodeAt(i);

        if (temp >= 97 && temp <= 122) {
            temp = (temp - 97 - key + 26) % 26 + 97;
        } else if (temp >= 65 && temp <= 90) {
            temp = (temp - 65 - key + 26) % 26 + 65;
        }

        decryptedMessage += String.fromCharCode(temp);
    }

    document.getElementById("result").innerText = "Decrypted message: " + decryptedMessage;
}