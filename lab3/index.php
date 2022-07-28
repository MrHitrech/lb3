<?php include 'connection.php';?>
<!DOCTYPE HTML>
<html>
<head>
    <title>Lab3</title>
    <script src="ajax_3lab.js"></script>
 
    <link href="style_lab3.css" rel="stylesheet" type="text/css">
</head>

<body>
<div class="container">

<a>Genre:</a>
    <select name='genre' id='genre'>
    <?php
        try{
            $sql = 'SELECT * FROM genre';
            $res = $dbh->query($sql);
            foreach($res as $sel){
                $name = $sel['title'];
                print "<option>$name</option>";
            }
        }
        catch(PDOException $ex)
        {
            print "Error".$ex->getMessage();
            die();
        }
    ?>
    </select>
    <input type="button" value="search" onclick="getText()">



<br><br>

<a>Actor:</a>
    <select name='actor' id='actor'>
    <?php
        try{
            $sql = 'SELECT * FROM actor';
            $res = $dbh->query($sql);
            foreach($res as $sel){
                print "<option>$sel[1]</option>";
            }
        }
        catch(PDOException $ex)
        {
            print "Error".$ex->getMessage();
            die();
        }
    ?>
    </select>
    <input type="button" value="search" onclick="getXML()">


    <br><br>

    <a>Release date:</a>
    <a>From:</a>
    <input type="date" name="period_start" id="period_start"> 
    <a>To:</a>
    <input type="date" name="period_end" id="period_end">
    <input type="button" value="search" onclick="getJSON()">

</div>
<div id="table_insert">
</div>

</body>

</html>