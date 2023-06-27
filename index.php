<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Formulário</title>
</head>

<body>
  
    <div class="screenLogin">
        <div class="img"></div>
        <div class="form">
        <?php
        require('php/header.php')
        ?>
            <form action="./php/main.php" method="post">
                <label>
                    E-mail:
                    <input type="email" name="email">
                </label>
                <label>
                    Password:
                    <input type="password" name="" id="">
                </label>
                <button>Submit</button>
            </form>
        </div>
    </div>



    <script src="./js/script.js"></script>
</body>

</html>