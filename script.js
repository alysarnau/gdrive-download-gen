// example link
// https://drive.google.com/file/d/1trbB_p0-T5MM7KggduaBVpCxNS0a_n33/view?usp=sharing

let googleLinkUrlInput = document.querySelector("#glink")
let generateLinkButton = document.querySelector("#btn")
let downloadLink = document.querySelector("#download-link")
// variables to populate 
let audioEmbedLink = document.getElementById("embed-audio");
let videoEmbedLink = document.getElementById("embed-video");
let clear = document.querySelector(".clear");


generateLinkButton.addEventListener("click", generateLink)

function generateLink(e) {
    e.preventDefault();
    const googleDriveLink = googleLinkUrlInput.value
    const confirmLink = googleDriveLink.includes("https://drive.google.com/file/d/")
    if (confirmLink) {
        const getDownloadLink = googleDriveLink
            .replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=")
            .replace("/view?usp=sharing", "")
        downloadLink.value = getDownloadLink
        function copyText(target) {
            if (target.value == "") {
                alert('Please generate your download link first!')
            } else {
                target.select();
                target.setSelectionRange(0, 99999);
                navigator.clipboard.writeText(target.value);
                alert("Copied the text: " + target.value);
            }
        }
        const copyButton = document.querySelector(".copy")
        copyButton.addEventListener("click", () => {
            return copyText(downloadLink);
        })
    } else {
        alert("Please insert a valid Google Drive URL.")
    }
}

