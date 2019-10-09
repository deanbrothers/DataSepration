var employee_id=sessionStorage.getItem('employee_id');
var company_id=sessionStorage.getItem('company_id');
var token=sessionStorage.getItem('token');
var firstname=sessionStorage.getItem('firstname');
var profile_img=sessionStorage.getItem('profile_img');
var url= 'http://127.0.0.1:8000';
profile_img=url+profile_img;
var header_content='    <!-- Logo -->'+
    '<a href="../../index.html" class="logo">'+
    '  <!-- mini logo for sidebar mini 50x50 pixels -->'+
    '  <span class="logo-mini">B<b>D</b></span>'+
    '  <!-- logo for regular state and mobile devices -->'+
    '  <span class="logo-lg">Biz<b>Data</b></span>'+
    '</a>'+
    '<!-- Header Navbar: style can be found in header.less -->'+
    '<nav class="navbar navbar-static-top">'+
    '  <!-- Sidebar toggle button-->'+
    '  <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">'+
    '    <span class="sr-only">Toggle navigation</span>'+
    '    <span class="icon-bar"></span>'+
    '    <span class="icon-bar"></span>'+
    '    <span class="icon-bar"></span>'+
    '  </a>'+

    '  <div class="navbar-custom-menu">'+
    '    <ul class="nav navbar-nav">'+
    '      <!-- User Account: style can be found in dropdown.less -->'+

    // '      <li class="dropdown user user-menu">'+
    // '          <img src="../../dist/img/user-160x160.jpg" class="user-image" alt="User Image">'+
    // '          <span class="hidden-xs"></span>'+
    // '        </a>'+
    // '        <ul class="dropdown-menu">'+
    // '          <!-- Menu Body -->'+
    // '          <li class="">'+
    // '            <div class="">'+
    // '                <a href="../../components/profile.html" class="btn btn-default btn-flat">Profile</a>'+
    // '            </div>'+
    // '          </li>'+
    // '          <li class="">'+
    // '            <div class="">'+
    // '                <a href="../../index.html" class="btn btn-default btn-flat">Sign out</a>'+
    // '            </div>'+
    // '          </li>'+
    // '          <!-- Menu Footer-->'+
    // '          <li class="user-footer">'+
    // '          </li>'+
    // '        </ul>'+
    // '      </li>'+
    '    </ul>'+
    '  </div>'+
    '</nav>';

        document.getElementById('header-details').innerHTML=header_content;
function sign_out(){
    sessionStorage.clear();
    window.location.href='../../index.html';
}