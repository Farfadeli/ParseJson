function remplace(str) {
    let res = ""
    for (let e = 0; e != str.length; e++) {
        if (str[e] == '"') {
            continue
        }
        res += str[e]
    }
    return res
}

function transformArray(str) {
    let name = []
    let value = []
    let n = 0
    let rep = ""
    for (let e = 0; e != str.length; e++) {
        if (str[e] == "[" || str[e] == "]" || str[e] == ",") {
            if (str[e] == "," && rep != "") {
                if (n == 0) {
                    name.push(rep)
                }
                else {
                    value.push(rep)
                }
            }
            else if(str[e] == "," && rep == ""){
                n = 1
            }
            rep = "";
            continue
        }
        else{
            rep += str[e]
        }
    }
    return [name,value]
}

function integerValue(tab){
    let res = []
    for(let e = 0; e!= tab[1].length; e++){
        res.push(parseInt(tab[1][e]))
    }
    return [tab[0],res];
}

function parseString(str) {
    str = str.slice(1, str.length - 1);
    str = remplace(str);
    str = transformArray(str);
    str = integerValue(str)
    return str
}