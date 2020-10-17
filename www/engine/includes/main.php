<div class="mainmenu">
	<div class="middle">
		<div class="centre"></div>
	</div>
</div>

<?php
$mysqli = new mysqli("localhost", "root", "", "QuestUsers");

$sql = 'SELECT * FROM users';

$result = mysqli_query($mysqli, $sql);

?>