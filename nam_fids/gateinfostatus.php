<?php
// Retrieve the updated flight status from the form submission
$status = $_POST['status'];

// Update the flight status in a storage or database (you can customize this part)

// Redirect back to gateinfo.html with the updated flight status as a query parameter
header("Location: gateinfo.html?status=$status");
exit();
?>
