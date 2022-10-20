export function toDateTime(secs) {
    let masMonthsRus = ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"];
    let masMonthsEn = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let masMonthsEnFull = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var d = new Date(secs);
    //27.01.2022 17:31
    // var datestring = ("0" + d.getDate()).slice(-2) + "." + ("0"+(d.getMonth()+1)).slice(-2) + "." +
    //     d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
    
    //27 янв 2022 в 17:31
    // var datestring = d.getDate() + " " + masMonthsRus[d.getMonth()] + " " + userYear +
    //     " в " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

    // let actualYear = new Date().getFullYear();
    // let userYear = d.getFullYear();
    let datestring = masMonthsEnFull[d.getMonth()]  + " " +  d.getDate() + ", " + d.getFullYear();

    // if (actualYear > userYear){
    //     var datestring = ("0" + d.getDate()).slice(-2) + "." + ("0"+(d.getMonth()+1)).slice(-2) + "." +
    //     d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
    // }
    // else{
    //     var datestring = d.getDate() + " " + masMonthsEn[d.getMonth()] +
    //     " в " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
    // }
    return datestring;
}