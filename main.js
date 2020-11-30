(function() {
    var cnv = document.querySelector(`canvas`);
    var ctx = cnv.getContext(`2d`);

    function init() {
        cnv.width = innerWidth;
        cnv.height = innerHeight;
    }

    init();

    var ringRadius = 90;
    var numberOfRings = 4;
    var ringRadiusOffset = 0;
    var startAngle = 0;
    var colors = [`blue`, `darkblue`, `violet`, `white`];
    var waveOffset = 2000;

    function updateRings(){
        for (var i = 0; i < numberOfRings; i++) {
            var radius = i * ringRadiusOffset + ringRadius;
            var offsetAngle = i * waveOffset * Math.PI / 180;
            drawRing(radius, colors[i], offsetAngle);
        }

        startAngle >= 360? startAngle = 0: startAngle++;
    }

    var centerX = cnv.width/2;
    var centerY = cnv.height/2;

    var maxWaveAmplitude = 8;
    var numberOfWaves = 10;


    function drawRing(radius, color, offsetAngle){
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;

        ctx.beginPath();

        for (var j = -180; j < 180; j++){
            var currentAngle = (j + startAngle) * Math.PI / 180;
            var displacement = 0;
            var now = Math.abs(j);

            if (now > 70) {
                displacement = (now - 70) / 70;
            }
            if (displacement >= 1){
                displacement = 1;
            }
            var waveAmplitude = radius + displacement * Math.sin((currentAngle + offsetAngle) * numberOfWaves) * maxWaveAmplitude;
            var x = centerX + Math.cos(currentAngle) * (ringRadius + waveAmplitude);
            var y = centerY + Math.sin(currentAngle) * (ringRadius + waveAmplitude);
            j > -180? ctx.lineTo(x, y): ctx.moveTo(x, y);;
        }
        ctx.closePath();
        ctx.stroke();
    }

    //обновляємо анімацію
    function loop() {
        cnv.width |= 0; // ctx.clearRect(0, 0, cnv.width, cnv.height);
        updateRings();
        requestAnimationFrame(loop);
    }
    loop();

    window.addEventListener(`resize`, init);

}());