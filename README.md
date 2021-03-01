<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="calculator.png" type="image/x-icon">
    <title>Calculator Dark and Light Mode</title>
    <link rel="stylesheet" href="index.css">
    <script src="https://kit.fontawesome.com/1c2c2462bf.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
</head>

<body>
    <div id="container">
        <div class="header" style="position: relative; left: 10px;top: 10px;">
            <p id="calculator" style="position: relative;">
                <span class="btn-bar"></span><i class="fas fa-bars" style="color: #f0f0f0;position: relative;float: left;left: 7px;top: 5px;"></i>Calculator
                <span class="btn-theme"><i class="fas fa-moon" style="color: #FF6A00;position: relative; left: 40px;"></i></span>
            </p>
            <hr style="width:35%;text-align:left;margin-left:0; color: #FF6A00; position: relative; left:94px">
        </div>
        <div class="results">
            <div class="input">
                <p class="upperValue"></p>
            </div>
            <div class="output">
                <p class="lowerValue"></p>
            </div>
        </div>
        <div class="group">
            <div class="top-section">
                <button class="operator" id="clear">C</button>
                <button class="operator" id="backspace">
                    <i class="fas fa-backspace" aria-hidden="true"></i>
                </button>
                <button class="operator modulo" id="modulo">%</button>
            </div>
            <div class="middle-section">
                <div>
                    <button class="number" id="7">7</button>
                    <button class="number" id="8">8</button>
                    <button class="number" id="9">9</button>
                </div>
                <div>
                    <button class="number" id="4">4</button>
                    <button class="number" id="5">5</button>
                    <button class="number" id="6">6</button>
                </div>
                <div>
                    <button class="number" id="1">1</button>
                    <button class="number" id="2">2</button>
                    <button class="number" id="3">3</button>
                </div>
                <div>
                    <button class="number" id="00">00</button>
                    <button class="number" id="0">0</button>
                    <button class="number" id=".">.</button>
                </div>
            </div>
            <div class="side-section">

                <button class="operator divide" id="/">/</button>
                <button class="operator multiplication" id="*">x</button>
                <button class="operator minus" id="-">-</button>
                <button class="operator plus" id="+">+</button>
                <button class="operator equal" id="=" style="background-color: #FF6A00;color: white;">=</button>

            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.js " integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin=" anonymous "></script>
    <script src="index.js"></script>
</body>

</html>
