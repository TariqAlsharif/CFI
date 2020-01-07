$(document).ready(function() {

"use strict"

var hash_value = location.hash;
if(hash_value === '' ||hash_value === '#home'){
  $('#target').load('home.html',
    function(){
    console.log('load complete');
    var page_name = $('input[type="hidden"]').val();
    $('#page-name').html(page_name);
  });
} else {
  $('html').load('404.html',
    function(){
    console.log('load complete');
  });
}

$('.navbar a').on('click', function(event) {
  var el = $(this);
  var el_href = el.attr('href');
  if(el_href == undefined){
    return false;
  } else {
    var el_name = el_href.split('#',2)[1];
    $('#target').load(el_name + '.html',
      function(){
      console.log('load complete');
      var page_name = $('input[type="hidden"]').val();
      $('#page-name').html(page_name);
      $('#mySidenav').css('width', '0px');
    });
    $('.navbar a').removeClass('tab-active');
    el.addClass('tab-active');
  }
});

  $('div').delegate('.testbtn', 'click', function(event) {
    event.preventDefault();
    alert('done');
  });

  $('div').delegate('.twobtn', 'click', function(event) {
    //event.preventDefault();
    alert('testdone');
  });





//Variables
var modal = $("#myModal")[0];
var _originalSize = $(window).width() + $(window).height();

$(window).resize(function(){
  if($(window).width() + $(window).height() != _originalSize){
    $(".btm-pos").css("position","relative");
  }else{
    $(".btm-pos").css("position","fixed");
  }
});

$("#conf-pass").on("keyup",function(){
  var new_pass = $("#new-pass").val();
  var confirm_pass = $("#conf-pass").val();
  if(new_pass === confirm_pass){
    $(this).css('border-color','green');
  } else {
    $(this).css('border-color','red');
  }
});

$(".forget-pass-form").on('submit', function(){
  var new_pass = $("#new-pass").val();
  var confirm_pass = $("#conf-pass").val();
  if(new_pass === confirm_pass){
    $("#conf-pass").css('border-color','green');
  } else {
    $("#conf-pass").css('border-color','red');
    return false;
  }
});

getToday();

//Modal
$('div').delegate('.myBtn','click', function (event){
  event.preventDefault();
  $('#myModal').css('display','block');
})
//
// $('.myBtn').on('click', function (event){
//   event.preventDefault();
//   $('#myModal').css('display','block');
// })

//message button
$('.msg-btn').delegate('click', function(){
 HideMessageBox();
});


$('.close').on('click', function(event) {
  event.preventDefault();
  $('#myModal').css('display','none');
});

window.onclick = function(event) {
  if (event.target == modal) {
    $('#myModal').css('display','none');
  }
}

//ShowMessageBox('check', 'success', 'test msg');

//copy account number to clipboard
$('.copy-txt').on('click', function(){
  copyToClipboard("#account-number");
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  $('.copied-msg').slideDown('400', function(){
    $(this).delay(1000).slideUp('fast');
  });
}

function ShowLoading(){
    $('body').append('<div id="" class="loading-box">' +
        '<div class="loading-content text-center">' +
        '<img src="../images/dollar.gif" width="30" style="padding:2px;"><br>' +
        '<small>Loading...</small>' +
        '</div>' +
        '</div>');
};

function HideLoading(){
  $('.loading-box').remove();
}

function ShowMessageBox(icon, status, message){
  $('body').append('<div id="" class="msg-box">'+
    '<div class="msg-content">'+
    '  <div class="msg-title text-center">'+
    '    <i class="fa fa-' + icon + '"></i>'+
    '    <h4>' + status + '</h4>'+
    '  </div>'+
    '  <div class="msg-description text-center">'+
    '    <p>' + message + '</p>'+
    '  </div>'+
    '  <div class="msg-options text-center">'+
    '    <button class="btn btn-default msg-btn" type="button" name="button">Ok</button>'+
    '  </div>'+
    '</div>'+
  '</div>');
};

function HideMessageBox(){
  $('.msg-box').remove();
};

function getToday(){
  var d = new Date();
  var month = d.getMonth()+1;
  var day = d.getDate();

  var output = d.getFullYear() + '-' +
      (month<10 ? '0' : '') + month + '-' +
      (day<10 ? '0' : '') + day;

  $('input[type="date"]').attr('max',output);
};

}); //end ready fn

$(window).on("load", function() {
  var page_name = $('input[type="hidden"]').val();

  $('#page-name').html(page_name);

  if(page_name == 'Account Details'){
    $('.page-title').append('<a class="pull-right" href="qrcode.html">'+
      '<span class="qrcode-icon"> <i class="fa fa-qrcode"></i> </span>'+
      '</a>');
  }

  $('.openNavBtn').on('click', function(){
    $('#mySidenav').css('width', '60%');
  });

  $('.closeNavBtn').on('click', function(){
    $('#mySidenav').css('width', '0px');
  });

}); //end load fn
