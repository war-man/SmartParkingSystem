﻿
$(document).ready(function () {
    loadData();
    ComboboxGender();
    ComboboxRoleNameU();
    ComboboxParkingPlaceU();
});

function loadDateNow() {
    // body...
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    today = mm + '/' + dd + '/' + yyyy;
    return today;
}

function loadDateNowToCompare() {
    // body...
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    today = yyyy + '/' + mm + '/' + dd;
    return today;
}

//DateETK
function DatePlus(datePlus) {
    // body...

    var date = new Date();
    date.setTime(date.getTime() + (datePlus * 24 * 60 * 60 * 1000));
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    date = yyyy + '/' + mm + '/' + dd;
    return date;
}

//Function for getting data base on EmployeeID
function getEditByID(EmployeeID) {
    $.ajax({
        url: "/ManageUser/Details/" + EmployeeID,
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (result) {
            $('#IdEdit').val(result.UserID);
            $('#FullNameEdit').val(result.Name);
            $('#DateOfBirthEdit').val(result.dateOfBirth);
            $('#AddressEdit').val(result.UserAddress);
            $('#IdentityCardEdit').val(result.IdentityCard);
            $('#PhoneNumberEdit').val(result.Phone);
            $('#EmailEdit').val(result.email);
            $('#StatusOfWorkingEdit').val(result.StatusOfwork);
            $('#AccountID').val(result.AccountID);
            $('#myModalUserEdit').modal('show');
            $('#btnUpdate').show();
        },
        error: function (errormessage) {
            alert("Exception:" + EmployeeID + errormessage.responseText);
        }
    });
    return false;
}

////getID Contract
//function getGHByID(EmployeeID) {
//    $.ajax({
//        url: "/ManageUser/DetailsGH/" + EmployeeID,
//        type: "GET",
//        contentType: "application/json",
//        dataType: "json",
//        success: function (result) {
//                    $('#UserIDGH').val(result.UserID);
//                    $('#UserNameGH').val(result.UserName);
//                    $('#FullNameGH').val(result.Name);
//                    $('#PassWordGH').val(result.PassWork);
//                    $('#DateOfBirthGH').val(result.dateOfBirth);
//                    $('#GenderGH').val(result.Gender);
//                    $('#AddressGH').val(result.UserAddress);
//                    $('#IdentityCardGH').val(result.IdentityCard);
//                    $('#PhoneNumberGH').val(result.Phone);
//                    $('#EmailGH').val(result.email);
//                    $('#RoleNameGH').val(result.RoleID);
//                    $('#ParkingPlaceGH').val(result.ParkingPlaceID);
//                    $('#ContractSigningDateGH').val(loadDateNow());
//                    $('#ContractExpirationDateGH').val(result.contractExpirationDate);
//                    $('#myModalGH').modal('show');
//        },
//        error: function (errormessage) {
//            alert("Exception:" + EmployeeID + errormessage.responseText);
//        }
//    });
//    return false;
//}
//Function for getting detail data base on EmployeeID
function getDetailByID(EmployeeID) {
    $.ajax({
        url: "/ManageUser/Details/" + EmployeeID,
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (result) {
            $('#IdD').val(result.UserID);
            $('#FullNameD').val(result.Name);
            $('#DateOfBirthD').val(result.dateOfBirth);
            $('#GenderD').val(result.gender);
            $('#AddressD').val(result.UserAddress);
            $('#IdentityCardD').val(result.IdentityCard);
            $('#PhoneNumberD').val(result.Phone);
            $('#EmailD').val(result.email);
            $('#StatusOfWorkD').val(result.statusOfwork);
            $('#AccountName').val(result.UserName);
            $('#ParkingPlaceD').val(result.NameOfParking);

            $('#myModalDetailUser').modal('show');
        },
        error: function (errormessage) {
            alert("Exception:" + EmployeeID + errormessage.responseText);
        }
    });
    return false;
}
//Function for getting detail data base on EmployeeID
//function getDropContractByID(EmployeeID) {
//    $.ajax({
//        url: "/ManageUser/DetailsGH/" + EmployeeID,
//        type: "GET",
//        contentType: "application/json",
//        dataType: "json",
//        success: function (result) {
//            $('#UserIDDrop').val(result.UserID);
//            $('#UserNameDrop').val(result.UserName);
//            $('#FullNameDrop').val(result.Name);
//            $('#PassWordDrop').val(result.PassWork);
//            $('#DateOfBirthDrop').val(result.dateOfBirth);
//            $('#GenderDrop').val(result.Gender);
//            $('#AddressDrop').val(result.UserAddress);
//            $('#IdentityCardDrop').val(result.IdentityCard);
//            $('#PhoneNumberDrop').val(result.Phone);
//            $('#EmailDrop').val(result.email);
//            $('#RoleNameDrop').val(result.RoleID);
//            $('#ParkingPlaceDrop').val(result.ParkingPlaceID);
//            $('#ContractSigningDateDrop').val(result.contractSigningDate);
//            $('#ContractExpirationDateDrop').val(result.contractExpirationDate);

//            $('#myModalDropContract').modal('show');
//            $('#btnDrop').show();
//        },
//        error: function (errormessage) {
//            alert("Exception:" + EmployeeID + errormessage.responseText);
//        }
//    });
//    return false;
//}

//Load Data function
function loadData() {
    $.ajax({
        url: "/ManageUser/LoadData",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.Name + '</td>';
                html += '<td>' + item.Phone + '</td>';
                html += '<td>' + item.email + '</td>';
                html += '<td>' + item.NameOfParking + '</td>';
                html += '<td>' + item.StatusOfWork + '</td>';     
                switch (item.StatusOfAccount) {
                    case 0:
                        if (item.StatusOfWork == 'Không trong ca') {
                            html += '<td><button class="btn btn-primary" onclick = "return getDetailByID(' + item.UserID + ')"> Chi tiết</button><button class="btn btn-success" style="margin-left:1px" onclick = "return getEditByID(' + item.UserID + ')">Sửa</button></td>';
                            break;
                        } else {
                            html += '<td><button class="btn btn-primary" onclick = "return getDetailByID(' + item.UserID + ')"> Chi tiết</button></td>';
                            break;
                        }
                        break;
                    case 1:
                        html += '<td><button class="btn btn-primary" onclick = "return getDetailByID(' + item.UserID + ')"> Chi tiết</button></td>';
                        break;
                }
                html += '</tr>';
            });
            $('#tbodyUser').html(html);

            $("#tbUser").DataTable({
                "responsive": true, "lengthChange": true, "autoWidth": false, "paging": true, "searching": true, "ordering": true, "info": true, retrieve: true,
                "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
            }).buttons().container().appendTo('#tbUser_wrapper .col-md-6:eq(0)');
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

//Add Data Function
function AddUser() {
    //var res = validate();
    //if (res == false) {
    //    return false;
    //}
    var empObj = {
        Name: $('#FullName').val(),
        DateOfBirth: $('#DateOfBirth').val(),
        Gender: $('#cbGender').val(),
        UserAddress: $('#Address').val(),
        Phone: $('#PhoneNumber').val(),
        email: $('#Email').val(),
        IdentityCard: $('#IdentityCard').val(),
        StatusOfWork: 1,
        ParkingPlaceID: $('#cbparkingPlaceU').val(),
    };
    $.ajax({
        url: "/ManageUser/Create",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            $('#myModalUser').modal('hide');
            $('#tbUser').DataTable().clear().destroy();
            loadData();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

//function for updating employee's record
function Update() {
    //var res = validateUserEdit();
    //if (res == false) {
    //    return false;
    //}
    var empObj = {
        UserID: $('#IdEdit').val(),
        Name: $('#FullNameEdit').val(),
        DateOfBirth: $('#DateOfBirthEdit').val(),
        Gender: $('#cbGenderEdit').val(),
        UserAddress: $('#AddressEdit').val(),
        Phone: $('#PhoneNumberEdit').val(),
        email: $('#EmailEdit').val(),
        IdentityCard: $('#IdentityCardEdit').val(),
        StatusOfWork: $('#StatusOfWorkingEdit').val(),
        AccountID: $('#StatusOfWorkingEdit').val(),
        ParkingPlaceID: $('#cbparkingPlaceUEdit').val(),

    };
    $.ajax({
        url: "/ManageUser/Update",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            $('#myModalUserEdit').modal('hide');
            $('#tbUser').DataTable().clear().destroy();
            loadData();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function CloseAdd() {
    $('#UserName').css('border-color', 'Grey');
    $('#PassWord').css('border-color', 'Grey');
    $('#FullName').css('border-color', 'Grey');
    $('#DateOfBirth').css('border-color', 'Grey');
    $('#Gender').css('border-color', 'Grey');
    $('#Address').css('border-color', 'Grey');
    $('#PhoneNumber').css('border-color', 'Grey');
    $('#Email').css('border-color', 'Grey');
    $('#IdentityCard').css('border-color', 'Grey');
    $('#RoleName').css('border-color', 'Grey');
    $('#ParkingPlace').css('border-color', 'Grey');
    $('#ContractSigningDate').css('border-color', 'Grey');
    $('#ContractExpirationDate').css('border-color', 'Grey');
    $('#StatusOfWork').css('border-color', 'Grey');
}

//Function for clearing the textboxes
function clearTextBox() {
    var date = loadDateNow();
    $('#Id').val("");
    $('#FullName').val("");
    $('#DateOfBirth').val("");
    $('#cbGender').val("");
    $('#Address').val("");
    $('#PhoneNumber').val("");
    $('#Email').val("");
    $('#IdentityCard').val("");
    $('#cbparkingPlaceU').val("");
    $('#ContractSigningDate').val("" + date);
    $('#ContractExpirationDate').val("" + date);
    $('#cbStatusOfwork').val("");


    $('#btnAdd').show();
    $('#btnUpdate').hide();
    //$('#Email').css('border-color', 'lightgrey');
    //$('#IdentityCard').css('border-color', 'lightgrey');
    //$('#State').css('border-color', 'lightgrey');
    //$('#Country').css('border-color', 'lightgrey');
}

//Valdidation using jquery
function validateUserEdit() {
    var isValid = true;
    var email = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$');
    var idcard = new RegExp('^[0-9]{9,}$');
    var phone = new RegExp('^(09|03|07|08|05){1}([0-9]{8})$');
    if ($.trim($('#FullNameEdit').val()) == "" || $.trim($('#FullNameEdit').val()).length < 4) {
        $('#FullNameEdit').prop("title", "Tên đầy đủ > 4 ký tự.");
        $('#FullNameEdit').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#FullNameEdit').prop("title", "");
        $('#FullNameEdit').css('border-color', 'lightgrey');
    }
    if ($('#DateOfBirthEdit').val().length == 0) {
        $('#DateOfBirthEdit').prop("title", "Chưa chọn ngày!");
        $('#DateOfBirthEdit').css('border-color', 'Red');
        isValid = false;
    } else {
        if (new Date($('#DateOfBirthEdit').val()) < new Date()) {
            $('#DateOfBirthEdit').prop("title", "Nhỏ hơn ngày hiện tại!");
            $('#DateOfBirthEdit').css('border-color', 'Red');
            isValid = false;
        } else {
            $('#DateOfBirthEdit').css('border-color', 'lightgrey');
        }
    }
    if ($.trim($('#AddressEdit').val()) == "") {
        $('#AddressEdit').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#AddressEdit').css('border-color', 'lightgrey');
    }
    if ($.trim($('#PhoneNumberEdit').val()) == "" || !phone.test($.trim($('#PhoneNumberEdit').val()))) {
        $('#PhoneNumberEdit').prop("title", "Số điện thoại trống hoặc định dạng sai.");
        $('#PhoneNumberEdit').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#PhoneNumberEdit').prop("title", "");
        $('#PhoneNumberEdit').css('border-color', 'lightgrey');
    }
    if ($.trim($('#EmailEdit').val()) == "" || !email.test($.trim($('#EmailEdit').val()))) {
        $('#EmailEdit').prop("title", "Email trống hoặc không đúng định dạng.");
        $('#EmailEdit').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#EmailEdit').prop("title", "");
        $('#EmailEdit').css('border-color', 'lightgrey');
    }
    if ($.trim($('#IdentityCardEdit').val()) == "" || !idcard.test($.trim($('#IdentityCardEdit').val()))) {
        $('#IdentityCardEdit').prop("title", "CMND/CCCD trống hoặc sai định dạng.");
        $('#IdentityCardEdit').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#IdentityCardEdit').prop("title", "")
        $('#IdentityCardEdit').css('border-color', 'lightgrey');
    }
    return isValid;
}

// gia han HĐ
//function ContractGH() {
//    var emGHObj = {
//        UserID: $('#UserIDGH').val(),
//        UserName: $('#UserNameGH').val(),
//        Name: $('#FullNameGH').val(),
//        PassWork: $('#PassWordGH').val(),
//        DateOfBirth: $('#DateOfBirthGH').val(),
//        Gender: $('#GenderGH').val(),
//        UserAddress: $('#AddressGH').val(),
//        Phone: $('#PhoneNumberGH').val(),
//        email: $('#EmailGH').val(),
//        IdentityCard: $('#IdentityCardGH').val(),
//        ContractSigningDate: $('#ContractSigningDateGH').val(),
//        ContractExpirationDate: $('#ContractExpirationDateGH').val(),
//        StatusOfWork:1,
//        RoleID: $('#RoleNameGH').val(),
//        ParkingPlaceID: $('#ParkingPlaceGH').val(),
//    };
//    $.ajax({
//        url: "/ManageUser/Update",
//        data: JSON.stringify(emGHObj),
//        type: "POST",
//        contentType: "application/json;charset=utf-8",
//        dataType: "json",
//        success: function (result) {
//            $('#myModalGH').modal('hide');
//            $('#tbUser').DataTable().clear().destroy();
//            loadData(true);
            
//        },
//        error: function (errormessage) {
//            alert(errormessage.responseText);
//        }
//    });
//}

//function dropContract() {
//    var emGHObj = {
//        UserID: $('#UserIDDrop').val(),
//        UserName: $('#UserNameDrop').val(),
//        Name: $('#FullNameDrop').val(),
//        PassWork: $('#PassWordGH').val(),
//        DateOfBirth: $('#DateOfBirthDrop').val(),
//        Gender: $('#GenderDrop').val(),
//        UserAddress: $('#AddressDrop').val(),
//        Phone: $('#PhoneNumberDrop').val(),
//        email: $('#EmailDrop').val(),
//        IdentityCard: $('#IdentityCardDrop').val(),
//        ContractSigningDate: $('#ContractSigningDateDrop').val(),
//        ContractExpirationDate: loadDateNow(),
//        StatusOfWork: 0,
//        RoleID: $('#RoleNameDrop').val(),
//        ParkingPlaceID: $('#ParkingPlaceDrop').val(),
//    };
//    $.ajax({
//        url: "/ManageUser/Update",
//        data: JSON.stringify(emGHObj),
//        type: "POST",
//        contentType: "application/json;charset=utf-8",
//        dataType: "json",
//        success: function (result) {
//            $('#myModalDropContract').modal('hide');
//            $('#tbUser').DataTable().clear().destroy();
//            loadData(true);

//        },
//        error: function (errormessage) {
//            alert(errormessage.responseText);
//        }
//    });
//}


//comboboxgender
function ComboboxGender() {
    $.ajax({
        url: "/ManageUser/ComboboxGender",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            var i = 0;
            $.each(result, function (key, item) {
                html += '<option value="' + i + '">' + item + '</option>';
                i++;
            });
            $("#cbGender").html(html);
            $("#cbGenderEdit").html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

//comboboxStatusOfwork
//function ComboboxStatusOfwork() {
//    $.ajax({
//        url: "/ManageUser/ComboboxStatusOfwork",
//        type: "GET",
//        contentType: "application/json;charset=utf-8",
//        dataType: "json",
//        success: function (result) {
//            var html = '';
//            var i = 0;
//            $.each(result, function (key, item) {
//                html += '<option value="' + i + '">' + item + '</option>';
//                i++;
//            });
//            $("#cbStatusOfwork").html(html);
//        },
//        error: function (errormessage) {
//            alert(errormessage.responseText);
//        }
//    });
//}

function ComboboxParkingPlaceU() {
    $.ajax({
        url: "/ManageUser/ComboboxParkingPlace",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<option value="' + item.ParkingPlaceID + '">' + item.NameOfParking + '</option>';
            });
            $("#cbparkingPlaceU").html(html);
            $("#cbparkingPlaceUEdit").html(html);
            $("#cbparkingPlaceEmp").html(html);
            $("#cbparkingPlaceEmpEdit").html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function ComboboxRoleNameU() {
    $.ajax({
        url: "/ManageUser/ComboboxRoleName",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<option value="' + item.RoleID + '">' + item.RoleName + '</option>';
            });
            $("#cbRoleNameU").html(html);
            $("#cbRoleNameUEdit").html(html);
            $("#cbRoleNameREdit").html(html);
            $("#cbRoleNameAcc").html(html);

        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

