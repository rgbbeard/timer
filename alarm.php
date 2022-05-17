<!doctype html>
<html>
	<head>
		<title>Alarm</title>
		<meta charset="utf-8">
		<link rel="shortcut icon" href="res/img/alarm.png">
		<script src="res/js/prototype.js"></script>
		<script src="res/js/utilities.js"></script>
		<script src="res/js/html.js"></script>
		<script src="res/js/render.js"></script>
		<link href="res/css/lib.css" rel="stylesheet">
		<link href="res/css/buttons.css" rel="stylesheet">
		<link href="res/css/main.css" rel="stylesheet">
		<style>	
		</style>
	</head>
	<body>
		<div id="digital-clock-container">
			<h1 id="digital-clock-display">
				<span id="hours" contenteditable>0</span>h
				:
				<span id="minutes" contenteditable>0</span>m
				:
				<span id="seconds" contenteditable>0</span>s
				:
				<span id="millisecs" contenteditable>0</span>ms
			</h1>
		</div>
		<div id="actions-container">
			<a id="start" class="btn-ripple success">Start</a>
			<a id="reset" class="btn-ripple warning">Reset</a>
		</div>
	</body>
</html>
<script src="res/js/alarm.js"></script>