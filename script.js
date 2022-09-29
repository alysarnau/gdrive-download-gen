// example link
// https://drive.google.com/file/d/1trbB_p0-T5MM7KggduaBVpCxNS0a_n33/view?usp=sharing

let googleLinkUrlInput = document.querySelector("#glink")
let generateLinkButton = document.querySelector("#btn")
let downloadLink = document.querySelector("#download-link")
let audioEmbed = document.getElementById("embed-audio-text");
let copyButton = document.querySelector(".copy")
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
        
        copyButton.addEventListener("click", () => {
            return copyText(downloadLink);
        })

        // embed audio fn
        const audio1 = `<audio width="300" height="32" controls="controls" src="`
        const audio2 = `" type="audio/mp3"></audio>`        
        audioEmbed.value = `${audio1}${getDownloadLink}${audio2}`;
        // copy audio embed code
        const copyAudioBtn = document.querySelector(".copy-audio")
        copyAudioBtn.addEventListener("click", () => {
            return copyText(audioEmbed);
        })

        // embed video function
        const getVideoLink = googleDriveLink
            .replace("/view?usp=sharing", "")
        const video1 = `<iframe src="`
        const video2 = `/preview" width="560" height="315"></iframe>
        `
        videoEmbedLink.value = `${video1}${getVideoLink}${video2}`
        const copyVideoBtn = document.querySelector(".copy-video")
        copyVideoBtn.addEventListener("click", () => {
            return copyText(videoEmbedLink);
        })

    } else {
        alert("Please insert a valid Google Drive URL.")
    }
}

