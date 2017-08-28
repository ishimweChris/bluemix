function main(params) {
	return { html: `
	<html>
	    <head>
	        <title>Self Registration Form</title>

	        <!-- Use Bootstrap with the default theme -->
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>    
	    
	    </head>
	    <body>
	        <h2>Self Registration Form</h2>
	        <div class="well">
	            <form method="post" action="self_reg_handler">
	                <table class="table">
	                    <tr>
	                        <th>User Name</th>
	                        <td><input type="text" name="uid"></td>
	                    </tr>
	                    <tr>
	                        <th>Password</th>
	                        <td><input type="password" name="pwd"></td>
	                   </tr>	                        
	               </table>
	               <button type="submit">Register</button>
	            </form>
	        </div>
	    </body>
	</html>
	` };
}
