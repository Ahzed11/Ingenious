function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function download() {
    let lastSubmission = document.getElementById("submissions").children[0];
    lastSubmission.click();

    await sleep(300);

    const htmlContent = document.documentElement.outerHTML;
    const blob = new Blob([htmlContent], {type: 'text/html'});

    let link = document.createElement("a");
    let url = URL.createObjectURL(blob);
    link.href = url;
    link.download = "exo.html";
    link.hidden = true;
    document.body.appendChild(link);
    link.innerHTML = "Save as"
    link.click();

    URL.revokeObjectURL(url);
    link.remove();
}

let buttonGroup = document.getElementsByClassName("btn-group")[0];

let button = document.createElement("button");
button.onclick = () => {
    download();
};
button.classList = ["btn btn-warning mr-1 ml-1"]

let icon = document.createElement("icon");
icon.classList = ["fa fa-html5"];
button.appendChild(icon);

buttonGroup.appendChild(button);
