<template>
  <div class="login">
    <div class="profilephoto"></div>
    <div class="loginmassage">
        <p>登陆/注册</p>
        <p>暂无绑定手机号</p>
    </div>
    <div class="more">&gt;</div>
  </div>
</template>

<script>
export default {
  name: "LogIn"

}
</script>

<style>
.login{
  display: flex;
  background-color: aquamarine;
  margin-top: 46px;
  height: 80px;
  align-items: center;
}
.profilephoto{
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: antiquewhite;
  margin: 0 10px;
}
.loginmassage{
  flex-grow: 1;
  text-align: left;
}
.more{
  width: 20px;
  color: aliceblue;
  font-size: 30px;
  margin-right: 10px;
}
</style>