(() => {
    let whiteList = ["cdn.jsdelivr.net", "cnzz.com"];
    let replace = "www.505107.com";

    function strMatch(str) {
        let newStr = str;
        if (str == "" || !str) return newStr;
        urlReg = /([a-z0-9]+\.){0,1}[a-z0-9]+?\.(net|org|com|cc|ws|la|me|info|cn|xyz|vip|ru)/gim;
        while ((res = urlReg.exec(str))) {
            if (whiteList.indexOf(res[0]) < 0) {
                newStr = newStr.replace(res[0], replace);
            }
        }
        return newStr;
    }

    $("body")
        .find("*")
        .each((index, ele) => {
            for (let i = 0; i < ele.childNodes.length; i++) {
                if (ele.childNodes[i].nodeType === 3) {
                    ele.childNodes[i].nodeValue = strMatch(
                        ele.childNodes[i].nodeValue
                    );
                }
            }
        });
})();
