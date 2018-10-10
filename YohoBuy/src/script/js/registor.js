define(['../thirdplugins/jquery.validate'], function (validate) {
    return {
        reg: !function () {
            $(function () {
                $('.form1').validate({
                    rules: {
                        username: {
                            required: true,
                            rangelength: [11, 11],
                            digits: true,
                            remote: {//将前端的name给后端
                                url: "http://10.31.162.41/YohoBuy/php/reg.php",     //后台处理程序
                                type: "post"               //数据发送方式
                            }
                        },
                        password: {
                            required: true,
                            rangelength: [6, 20]
                        },
                        repass:{
							required:true,
							equalTo:'#password'
						},
                    },
                    messages: {
                        username: {
                            required: "不能为空",
                            rangelength: "格式不正确",
                            digits: "必须为整数",
                            remote:'用户名已存在'
                        },
                        password: {
                            required: "不能为空",
                            rangelength: "密码为6-20位"
                        },
                        repass:{
							required:"不能为空",
							equalTo:"确认密码有误",
						},
                    }
                })
            })
            $.validator.setDefaults({
			    /*添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)*/
			    success: function(label){
			        label.text('√').css('color','green').addClass('valid');
			    }
			});
        }(),
    }

});