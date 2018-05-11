function isCardNo(card) {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (reg.test(card) === false) {
        alert("身份证输入错误，请重试");
        return false;
    } else {
        alert("输入成功！！")
    }
}