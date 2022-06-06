<?php

require("./treatData.php");

$file = "./csv/fileAll.csv";

$TypeData = new CsvToData($file, "Type");
$TypeData = $TypeData->finish();


?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.plot.ly/plotly-2.12.1.min.js"></script>
    <script src="./strToTab.js"></script>
    <script>
        var typeData = parseString('<?= json_encode($TypeData); ?>');
        console.log(typeData)
    </script>
    <title>Plotly</title>
</head>

<body>
    <div id="myDiv"></div>
</body>



<script src="./app.js"></script>
</html>