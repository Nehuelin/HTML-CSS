<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Change Flight Status</title>
</head>
<body>
  <h2>Change Flight Status</h2>
  <form action="update-status.php" method="POST">
    <label for="status-select">Select Flight Status:</label>
    <select id="status-select" name="status">
      <option value="On time">On time</option>
      <option value="Delayed">Delayed</option>
      <option value="Cancelled">Cancelled</option>
    </select>
    <button type="submit">Update</button>
  </form>
</body>
</html>