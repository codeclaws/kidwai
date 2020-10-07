<?php
include_once 'config.php';


class Fetch
{
  
  public function getProducts()
  {
  $sql = "SELECT * FROM `products`";

      $con = new Connection();

      $conn = $con->connect();

      $res = mysqli_query($conn,$sql);

      return $res;
  }

}

?>