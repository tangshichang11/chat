<!--<template>-->
<!--    <div class="login">-->
<!--        <h2>Login</h2>-->
<!--        <form @submit.prevent="login">-->
<!--            <div class="form-group">-->
<!--                <label for="username">Username:</label>-->
<!--                <input type="text" id="username" v-model="username" required>-->
<!--            </div>-->
<!--            <div class="form-group">-->
<!--                <label for="password">Password:</label>-->
<!--                <input type="password" id="password" v-model="password" required>-->
<!--            </div>-->
<!--            <button type="submit">Login</button>-->
<!--        </form>-->
<!--    </div>-->
<!--</template>-->


<!--<script>-->
<!--    import router from '../router/index'-->

<!--    export default {-->
<!--        data() {-->
<!--            return {-->
<!--                username: '',-->
<!--                password: ''-->
<!--            };-->
<!--        },-->
<!--        methods: {-->
<!--            login() {-->
<!--                // 在这里实现登录逻辑，可以使用axios或其他方式发送登录请求-->
<!--                // 示例中只简单打印输入的用户名和密码-->
<!--                console.log('Username:', this.username);-->
<!--                console.log('Password:', this.password);-->
<!--                // this.$router.push('./ChatGPT.vue');-->
<!--                router.push({ name: 'index1' });-->
<!--            }-->
<!--        }-->
<!--    };-->
<!--</script>-->

<!--<style>-->
<!--    .login {-->
<!--        display: flex;-->
<!--        flex-direction: column;-->
<!--        align-items: center;-->
<!--        justify-content: center;-->
<!--        height: 100vh;-->
<!--    }-->

<!--    .form-group {-->
<!--        margin-bottom: 1rem;-->
<!--    }-->

<!--    button {-->
<!--        padding: 0.5rem 1rem;-->
<!--        background-color: #007bff;-->
<!--        color: #fff;-->
<!--        border: none;-->
<!--        cursor: pointer;-->
<!--    }-->
<!--</style>-->
<template>
    <div class="login-container">
        <h1 class="title">登录</h1>
        <form class="login-form">
            <input type="text" placeholder="用户名" class="input-field">
            <input type="password" placeholder="密码" class="input-field">
            <button @click="login" class="login-button">登录</button>
        </form>
    </div>
</template>

<script>
    import router from '../router/index'
    export default {
        data() {
            return {
                username: '',
                password: ''
            };
        },
        methods: {
            submitForm(event) {
                event.preventDefault(); // 阻止表单默认提交行为
                // 在这里可以执行表单验证等操作
                this.login();
            },
            login() {
                // 在这里可以编写登录逻辑，例如向服务器发送登录请求等
                console.log('用户名:', this.username);
                console.log('密码:', this.password);
                router.push({ name: 'index1' });
            }
        }
    };
</script>

<style>
    .login-container {
        width: 300px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f5f5f5;
    }

    .title {
        text-align: center;
        margin-bottom: 20px;
    }

    .login-form {
        display: flex;
        flex-direction: column;
    }

    .input-field {
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 3px;
        border: 1px solid #ccc;
    }

    .login-button {
        padding: 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }

    .login-button:hover {
        background-color: #0056b3;
    }
</style>
