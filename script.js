// example link
// https://drive.google.com/file/d/1trbB_p0-T5MM7KggduaBVpCxNS0a_n33/view?usp=sharing

let googleLinkUrlInput = document.querySelector("#glink")
let generateLinkButton = document.querySelector("#btn")
let downloadLink = document.querySelector("#download-link")
// store original gDrive link
let googleDriveLink;
// variables to populate 
let audioEmbedLink;
let videoEmbedLink;


generateLinkButton.addEventListener("click", generateLink)

function generateLink(e) {
    e.preventDefault();
    googleDriveLink = googleLinkUrlInput.value
    const confirmLink = googleDriveLink.includes("https://drive.google.com/file/d/")
    if (!confirmLink) {
        alert('Please use a valid Google Drive link')
        return;
    } 
    const getDownloadLink = googleDriveLink
        .replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=")
        .replace("/view?usp=sharing", "")
    console.log(getDownloadLink)
    downloadLink.value = getDownloadLink
}