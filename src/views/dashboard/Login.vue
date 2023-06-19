<script setup>
import { reactive,onMounted  } from "vue"
import axios from "@/config/axios-config.js"
import { useRouter } from "vue-router"
const router=useRouter()

const loginForm=reactive({
  username:"",
  password:""
})

const formErrors=reactive({
  username:'',
  password:''
})
const checkPassword=()=>{

  if(loginForm.password.length<3){

    formErrors.password='密码长度不能小于3位'
  }
}
const checkUsername=()=>{
  if(loginForm.username.length<3){
    formErrors.username='长度不能小于3位'
    }
}
const login=()=>{
  let isLogin=test()
  if(!isLogin){
    axios.post("http://localhost:8080/user/doLogin",loginForm)
  .then(res=>{
    if(res.data.code===200){
      localStorage.setItem("satoken",res.data.data.tokenValue)//存储令牌 
      console.log(localStorage.getItem("satoken"))
  }}).catch(err=>{
    console.log(err)
  })
  }
  else{
    router.push("/dashboard")
  }
 

}


onMounted(()=>{
    checkLogin()
  })
const checkLogin=()=>{
 if(test())
   router.push("/dashboard")
  
}

const  test=async ()=>{
 return axios.get("http://localhost:8080/user/isLogin").data
  
}

</script>
  <template>
    <div>
      <form :v-model="loginForm" class="login-form">
        <label for="username">用户名:</label>
        <input type="text" name="username" id="username" @blur="checkUsername"  v-model="loginForm.username">
        <p v-if="formErrors.username !== ''" class="error-message">{{ formErrors.username }}</p>
        <label for="password">密码:</label>
        <input type="password" name="password" id="password" @blur="checkPassword" v-model="loginForm.password">
        <p v-if="formErrors.password !== ''" class="error-message">{{ formErrors.password }}</p>
  
        <button type="submit" @click.prevent="login" class="login-button">登录</button>
      </form>

      <button @click="test">click</button>
    </div>
  </template>



<style>
.login-form {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #f7f7f7;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
}

.login-form label {
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
}

.login-form input {
  width: 90%;
  height: 35px;
  padding: 0 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.login-form .error-message {
  color: red;
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 15px;
}

.login-button {
  width: 100%;
  height: 35px;
  color: #fff;
  background: #409eff;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  font-size: 16px;
}
.login-button:hover {
  background: #66b1ff;
}
</style>