// 注册页面

// 导入样式文件
import "./style.css"

// 通过 document.querySelector 和 document.getElementById 获取表单及其相关输入框元素
const regForm = document.querySelector('.register-form form') as HTMLFormElement;
const regUsername = document.getElementById('regUsername') as HTMLInputElement;
const phone = document.getElementById('phone') as HTMLInputElement;
const regPassword = document.getElementById('regPassword') as HTMLInputElement;
const confirmPassword = document.getElementById('confirmPassword') as HTMLInputElement;

// 添加表单提交事件监听
regForm.addEventListener('submit', function (event) {
    event.preventDefault(); // 阻止默认提交行为

    // 执行表单验证逻辑
    if (validateForm()) {
        alert('注册成功！');// 提交表单的其他逻辑
        window.location.href = '/login.html'; // 跳转到登录页面
    }
});

// 定义了一个 validateForm 函数，用于验证表单输入：
// 检查用户名是否为空。
// 检查手机号是否为空。
// 检查密码是否为空。
// 检查确认密码是否为空。
// 检查密码和确认密码是否一致。
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

export { }
