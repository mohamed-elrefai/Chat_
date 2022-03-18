<template>
<div class="wrapper">
    <section class="form login">
        <header>Sagen</header>
        <form action="/login" method="post">
            <div class="error-txt"> </div>
                <div class="field input">
                    <label>Email Addres</label>
                </div>
                <div class="field input">
                    <label>Password</label>
                    <input type="password" v-mode="password" name="password" placeholder="Password">

                </div>
                <div class="field button">
                    <input type="submit" name="btn" v-on:click="Login" value="Contuinue to Chat ">
                </div>
        </form>
        <div class="link">Not yet singned up??<a href="/sign-up"> Signup now</a></div>
    </section>
</div>
</template>

<script>

export default {
    name: "Login",
    data(){
        return{
            email: "",
            password: ""
        }
    }
}
</script>