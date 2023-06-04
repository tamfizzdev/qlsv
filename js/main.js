var dssv = [];

// lấy dữ liệu từ localStorage lúc user load trang
var dataJson = localStorage.getItem("DSSV");
if (dataJson != null){
    dssv = JSON.parse(dataJson).map
    (function (item){
        
        return new SinhVien(
            item.ma,
            item.ten,
            item.email,
            item.matKhau,
            item.toan,
            item.ly,
            item.hoa
        );
    });
    //map
    renderDSSV(dssv);
}
   

function themSinhVien(){
    //lấy thông tin từ form
   
    var sv = layThongTinTuForm();   
    dssv.push(sv);
    //render dssv
  renderDSSV(dssv);

    // save dssv localStorage
    // localStorage: nơi lưu trữ (chỉ chấp nhận json), json : 1 loại dữ liệu
    var dataJson = JSON.stringify(dssv);
        localStorage.setItem("DSSV", dataJson);
}

function xoaSinhVien(id){
    console.log(id);
    // splice findIndex
    var index = dssv.findIndex(function (item) {
        return item.ma == id;
    });
    dssv.splice(index, 1);
    renderDSSV(dssv);
}

function suaSinhVien(id){
// tìm vị trí sv trong dssv có mã trùng vs id onclick
 var index = dssv.findIndex(function(item){
    return item.ma == id;
 });
 showThongTinLenForm(dssv[index]);
 //show thong tin len form
}

function capNhatSinhVien(){

}
function introduce(value, callback){
    console.log("introduece",value);
    callback(value);
}
//array map js w3
// call back function