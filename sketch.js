function txt() {
    /* Get the HTML data using Element by Id */
    var table = document.getElementById("text");
    var rows = [table.value];
    txtContent = "data:text/txt;charset=utf-8,";
    /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
    rows.forEach(function (rowArray) {
        txtContent += rows + "\r\n";
    });
    var encodedUri = encodeURI(txtContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "text.txt");
    document.body.appendChild(link);
    link.click();
}

function html() {
    /* Get the HTML data using Element by Id */
    var table = document.getElementById("htmlo");
    var rows = [table.value];
    txtContent = "data:html/html;charset=utf-8,";
    /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
    rows.forEach(function (rowArray) {
        txtContent += rows + "\r\n";
    });
    var encodedUri = encodeURI(txtContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "index.html");
    document.body.appendChild(link);
    link.click();
}

function css() {
    /* Get the HTML data using Element by Id */
    var table = document.getElementById("csso");
    var rows = [table.value];
    txtContent = "data:css/css;charset=utf-8,";
    /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
    rows.forEach(function (rowArray) {
        txtContent += rows + "\r\n";
    });
    var encodedUri = encodeURI(txtContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "style.css");
    document.body.appendChild(link);
    link.click();
}

function js() {
    /* Get the HTML data using Element by Id */
    var table = document.getElementById("jso");
    var rows = [table.value];
    txtContent = "data:js/js;charset=utf-8,";
    /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
    rows.forEach(function (rowArray) {
        txtContent += rows + "\r\n";
    });
    var encodedUri = encodeURI(txtContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "sketch.js");
    document.body.appendChild(link);
    link.click();
}