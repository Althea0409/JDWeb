import "./style.css"

// 获取表单元素
const regForm = document.querySelector('.register-form form') as HTMLFormElement;
const regUsername = document.getElementById('regUsername') as HTMLInputElement;
const phone = document.getElementById('phone') as HTMLInputElement;
const regPassword = document.getElementById('regPassword') as HTMLInputElement;
const confirmPassword = document.getElementById('confirmPassword') as HTMLInputElement;

// 添加表单提交事件监听
regForm.addEventListener('submit', function(event) {
  event.preventDefault(); // 阻止默认提交行为

  // 执行表单验证逻辑
  if (validateForm()) {
    // 提交表单的其他逻辑
    alert('注册成功！');
    // 跳转到登录页面
    window.location.href = '/login.html'; 
  }
});

// 表单验证函数
function validateForm(): boolean {
  if (regUsername.value.trim() === '') {
    alert('请输入用户名');
    return false;
  }

  if (phone.value.trim() === '') {
    alert('请输入手机号');
    return false;
  }

  if (regPassword.value.trim() === '') {
    alert('请输入密码');
    return false;
  }

  if (confirmPassword.value.trim() === '') {
    alert('请确认密码');
    return false;
  }

  if (regPassword.value.trim() !== confirmPassword.value.trim()) {
    alert('密码和确认密码不一致');
    return false;
  }

  return true; // 所有验证通过
}

export {}
