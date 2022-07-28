<?php
include "connection.php";
$period_start = $_GET["period_start"];
$period_end = $_GET["period_end"];
if (isset($period_start)) {
   

    $stmt = $dbh->prepare( "SELECT * FROM film WHERE `date` between ? and ?");
    
    $stmt->execute([$period_start, $period_end]);
    $tabl_data = $stmt->fetchAll(PDO::FETCH_OBJ);

    echo json_encode($tabl_data);
}
?>
