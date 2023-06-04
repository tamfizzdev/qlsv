function renderDSSV(dssv){
        var contentHTML = "";
    for(var i = 0; i < dssv.length; i++){
        var sv = dssv[i];
        var content = `
        
        <tr>
        <td>${sv.ma}</td>
        <td>${sv.ten}</td>
        <td>${sv.email}</td>
        <td>${sv.tinhDTB()}</td>
        <td>
        <button onclick="xoaSinhVien('${sv.ma}')" class="btn btn-danger">Xóa</button>
        <button onclick="suaSinhVien('${sv.ma}')" class="btn btn-warning">Sửa</button>

        </td>
        </tr>`;
        contentHTML = contentHTML + content;
    }
    document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

function showThongTinLenForm(sv){
     document.getElementById("txtMaSV").value = sv.ma;
     document.getElementById("txtTenSV").value = sv.ten;
     document.getElementById("txtEmail").value = sv.email;
     document.getElementById("txtPass").value = sv.matKhau;
     document.getElementById("txtDiemToan").value = sv.toan;
     document.getElementById("txtDiemLy").value = sv.ly;
     document.getElementById("txtDiemHoa").value = sv.hoa;
}

function layThongTinTuForm(){
    var ma = document.getElementById("txtMaSV").value;
    var ten = document.getElementById("txtTenSV").value;
    var email = document.getElementById("txtEmail").value;
    var matKhau = document.getElementById("txtPass").value;
    var toan = document.getElementById("txtDiemToan").value*1;
    var ly = document.getElementById("txtDiemLy").value*1;
    var hoa = document.getElementById("txtDiemHoa").value*1;

   
    // tạo sv
    return new SinhVien(ma, ten, email, matKhau, toan, ly, hoa);
}