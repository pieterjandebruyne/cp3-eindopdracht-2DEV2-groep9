<section class="homepage container">

    <h2><a href="index.php?page=index">Whiteboard</a></h2>
    <h3>Online whiteboard and scrum</h3>
</script>
    <div id="login">
    	<p>Login</p>
    	<form id="loginFrm"name="loginForm"action="index.php?page=login" method="post" >
    		<div class="loginForm">
    		  <ul>
                    <li><label for="email">Email:</label></li>
                    <li><input type="email" id="email" name="email" placeholder="voorbeeld@gmail.com" value=""></li>
                    <span class='error show' >
                    <p class="<?php if(empty($errors['email'])) echo ' hidden';?>" data-for="email">Please fill in your e-mail</p>
                    </span>
                </ul>
			</div>
				<div class="loginForm">
    		      <ul>
                    <li><label for="password">Password:</label></li>
                    <li><input type="password" id="password" name="password"value=""></li>
                 <span class='error show' >
                <p class="<?php if(empty($errors['password'])) echo ' hidden';?>" data-for="password">Please fill in your password</p>
                </span>
                </ul>
			</div>

			<input type="submit" value="LOG IN" id="inloggen">

    	</form>
    </div>
    <p class="registerButton">New here? <a href="index.php?page=register">Register!</a></p>

</section>