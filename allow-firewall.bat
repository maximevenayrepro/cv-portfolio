@echo off
echo ===================================
echo   Configuration Pare-feu Windows
echo ===================================
echo.
echo Ce script va autoriser le port 8000 dans le pare-feu Windows.
echo Il necessite les droits Administrateur.
echo.
pause

echo.
echo Ajout de la regle de pare-feu...

netsh advfirewall firewall add rule name="CV Server - Port 8000" dir=in action=allow protocol=TCP localport=8000

if %errorlevel% equ 0 (
    echo.
    echo [OK] Regle de pare-feu ajoutee avec succes !
    echo.
    echo Vous pouvez maintenant acceder au serveur depuis d'autres appareils.
    echo.
) else (
    echo.
    echo [ERREUR] Impossible d'ajouter la regle.
    echo Verifiez que vous avez lance le script en tant qu'Administrateur.
    echo.
    echo Pour lancer en tant qu'Administrateur :
    echo   - Clic droit sur le fichier
    echo   - "Executer en tant qu'administrateur"
    echo.
)

pause

