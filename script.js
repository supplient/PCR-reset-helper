function comb(n, r) {
    // This cannot work... 841! is too large.
    function factor(x) {
        var res = 1;
        for(var i=2; i<=x; i+=1)
            res *= i;
        return res;
    }

    return factor(n) / (factor(r) * factor(n-r));
}

function unlimited(per_m) {
    return 5/841 * 25 + 35/841 * per_m;
}

function func(N, B, M, per_b, per_m) {
    // N: 池子里东西数量的总计，最右边那列的
    // B: 池子里宝石的数量，不乘上去
    // M: 池子里母猪石的数量
    // per_b: 每组宝石的数量，也就是宝石X5的5
    // per_m: 每母猪石等价于多少宝石
    // 返回当前抽取的期望
    var res = per_b * B / N + per_m * M / N;
    return res
}

function getValue(id) {
    return document.getElementById(id).value;
}

function setValue(id, value) {
    document.getElementById(id).value = value;
}

function setText(id, value) {
    document.getElementById(id).innerText = String(value);
}

function onCalBtn() {
    var per_m = parseFloat(getValue("per_m"));

    var unlimit_N = parseInt(getValue("unlimit_N"));
    var unlimit_B = parseInt(getValue("unlimit_B"));
    var unlimit_M = parseInt(getValue("unlimit_M"));
    var unlimit_per_b = parseInt(getValue("unlimit_per_b"));
    var unlimit_exp = func(unlimit_N, unlimit_B, unlimit_M, unlimit_per_b, per_m);
    setText("unlimit_text", unlimit_exp);

    var now_N = parseInt(getValue("now_N"));
    var now_B = parseInt(getValue("now_B"));
    var now_M = parseInt(getValue("now_M"));
    var now_per_b = parseInt(getValue("now_per_b"));
    var now_exp = func(now_N, now_B, now_M, now_per_b, per_m);
    setText("now_text", now_exp);

    if(now_exp < unlimit_exp)
        setText("advice", "重置")
    else
        setText("advice", "不重置")
}

window.onload = function() {
    // Set default
    setValue("per_m", 100);

    setValue("unlimit_N", 841);
    setValue("unlimit_B", 5);
    setValue("unlimit_M", 35);
    setValue("unlimit_per_b", 25);
}