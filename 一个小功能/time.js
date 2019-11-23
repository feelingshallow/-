function gettime() {
    let t=new Date();
    let year=t.getFullYear();
    let month=t.getMonth()+1;
    let date=t.getDate();
    let day=t.getDay();
    return year+"年" +month+ '月'+date+'日'+'星期'+day
}
export default {
    gettime:gettime()
}