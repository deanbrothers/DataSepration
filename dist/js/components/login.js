$('#login-form').submit(function(event) {
    event.preventDefault();
    //var csrftoken = getCookie('csrftoken');
    var headers = new Headers();
    //headers.append('X-CSRFToken', csrftoken);
    //window.location.href = "notice-board.html";
	var username=$('#username').val();
	var password=$('#password').val();
	var data = {'username':username, 'password':password};
    data = JSON.stringify(data);
    if( username=='admin' && password == 'Bizdata@@343'){
        window.location.href = "components/company/data-sepration.html";
    }
    else{
        document.getElementById('login-error').innerHTML='Wrong username or password';
    }
});