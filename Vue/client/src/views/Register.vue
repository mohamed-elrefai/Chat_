<template>
<div class="wrapper">
    <section class="form sigup">
        <header>Sagen</header>
        <form action="/register" method="post" enctype="multipart/form-data" >
            <div class="error-txt"> </div>
            <div class="name-detail">
                <div class="field input">
                    <label>First Name</label>
                    <input type="text" name="fname" placeholder="First Name" required>
                </div>
                <div class="field input">
                    <label>Last Name</label>
                    <input type="text" name="lname" placeholder="Last Name"  required>
                </div>
            </div>
                <div class="field input">
                    <label>Email Addres</label>
                    <input type="email" name="email"  placeholder="Email"  required>
                </div>
                <div class="field input">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" required>
                    <i class="fas fa-eye"></i>
                </div>
                <div class="field input">
                    <label>Confirm Password</label>
                    <input type="password" name="password2" placeholder="Confirm Password" required>
                    <i class="fas fa-eye"></i>
                </div>
                <div class="field image">
                    <label>Select image</label>
                    <input type="file" name="img" required>
                </div>
                <div class="field button">
                    <input type="submit" name="btn" value="Contuinue to Chat ">
                </div>
        </form>
        <div class="link">Already singned up??<router-link to="/sign-in"> Login now</router-link></div>
    </section>
</div>	
</template>

<script>
export default {
    data(){
        return{
            email: "",
        }
    }
}
</script>