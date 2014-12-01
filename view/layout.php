<!DOCTYPE html>
<html>
    <head>
        <meta name="description" content="Whiteboard and scrum" />
        <meta name="keywords" content="whiteboard, scrum, projects, cp3, eindwerk, devine" />
        <meta name="author" content="Pieter-Jan De Bruyne, Emma Verhelst" />
        <meta charset="UTF-8">
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
        <title>Whiteboard-scrum</title>
        <link href="css/screen.css" rel="stylesheet">

    </head>
    <body>
        
            
       
        <div class="container">

            <nav>
                <header>

                    <h1>
                <?php if($_GET['page'] == "profile"){
                    echo "<a href=\"index.php\">";
                    echo "whiteboard";
                    echo "</a>";
                }else if($_GET['page'] == "newproject"){
                     echo "<a href=\"index.php?page=profile\">";
                    echo "Back to profile";
                    echo "</a>";
                    
                }else{
                    echo "other";
                }
                ?>
                    </h1>
                </header>
                <ul>
                    <li class="useremail"> voorbeeld@hotmail.com </li>
                    <li class="logoutknop"> log out </li>
                </ul>
            </nav>

           


            <?php if(!empty($_SESSION['info'])): ?><div class="alert-success"><?php echo $_SESSION['info'];?></div><?php endif; ?>
            <?php if(!empty($_SESSION['error'])): ?><div class="alert-danger"><?php echo $_SESSION['error'];?></div><?php endif; ?>

            <?php echo $content; ?>


        </div>
         <script src="js/script.dist.js" type="text/javascript"></script>
    </body>
</html>
