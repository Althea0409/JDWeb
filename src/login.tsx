// 登录页面

// 导入样式文件
import "./style.css"

// 通过 document.querySelector 和 document.getElementById 获取表单及其相关输入框元素。
const loginForm = document.querySelector('.login-form form') as HTMLFormElement;
const username = document.getElementById('username') as HTMLInputElement;
const password = document.getElementById('password') as HTMLInputElement;

// 添加表单提交事件监听
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // 阻止默认提交行为

    // 执行表单验证逻辑
    if (validateLoginForm()) {
        alert('登录成功！');// 提交表单的其他逻辑
        window.location.href = '/index.html';// 跳转到首页
    }
});

// 定义了一个 validateLoginForm 函数，用于验证表单输入：
// 检查用户名是否为空。
// 检查密码是否为空。
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

export { }

/*
  这段代码实现了一个简单的登录页面，包括表单的验证和提交。
  通过阻止默认的表单提交行为，并在提交前进行表单验证，确保用户输入的完整性和正确性。
  如果验证通过，则显示登录成功的提示，并跳转到首页。
*/