function clipboard(id) {
    let link = document.getElementById(id);
    link.select();
    document.execCommand('copy');
}