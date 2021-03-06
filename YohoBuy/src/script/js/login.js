define(['../thirdplugins/jquery.validate'], function () {
    return {
        login: !function () {
            function addCookie(key, value, day) {
                var date = new Date();//创建日期对象
                date.setDate(date.getDate() + day);//过期时间：获取当前的日期+天数，设置给date
                document.cookie = key + '=' + encodeURI(value) + ';expires=' + date;//添加cookie，设置过期时间
            }


            $('#btn').on('click', function () {
                var $username = $('#logname').val();
                var $password = $('#logpass').val();
                $.ajax({
                    type: 'post',
                    url: 'http://10.31.162.41/YohoBuy/php/login.php',
                    data: {//将用户名和密码传输给后端
                        name: $username,
                        pass: $password
                    },
                    success: function (data) {//请求成功，接收后端返回的值
                        if (!data) {//用户名或者密码错误
                            $('#error').html('用户名或者密码错误');
                            $('#password').val('');
                        } else {//成功,存cookie,跳转到首页
                            addCookie('UserName', $username, 7);
                            location.href = 'index.html';
                        }
                    }
                })
            });
        }()
    }
})