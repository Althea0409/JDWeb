import "./style.css"

// 获取表单元素
const loginForm = document.querySelector('.login-form form') as HTMLFormElement;
const username = document.getElementById('username') as HTMLInputElement;
const password = document.getElementById('password') as HTMLInputElement;

// 添加表单提交事件监听
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // 阻止默认提交行为

  // 执行表单验证逻辑
  if (validateLoginForm()) {
    // 提交表单的其他逻辑
    alert('登录成功！');
  }
});

// 表单验证函数
function validateLoginForm(): boolean {
  if (username.value.trim() === '') {
    alert('请输入用户名');
    return false;
  }

  if (password.value.trim() === '') {
    alert('请输入密码');
    return false;
  }

  return true; // 所有验证通过
}


export {}