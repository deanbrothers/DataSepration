var employee_role=sessionStorage.getItem('employee_role');
console.log(employee_role);

var sidebar_content= '<section class="sidebar">'+
    '    <!-- sidebar menu: : style can be found in sidebar.less -->'+
    '   <ul class="sidebar-menu" data-widget="tree">'+
    '      <li></li>'+
    '      <li>'+
    '        <a href="../../components/company/data-sepration.html">'+
    '          <i class="fa fa-th"></i> <span>Data</span>'+
    '        </a>'+
    '      </li>'+
    '    </ul>'+
    '  </section>';
    document.getElementById('sidebar-details').innerHTML=sidebar_content;

