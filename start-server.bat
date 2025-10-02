@echo off
title Serveur CV - Maxime Venayre
color 0A
echo ===================================
echo    Serveur CV - Maxime Venayre
echo ===================================
echo.
echo Demarrage du serveur sur le port 8000...
echo.
echo Acces local: http://localhost:8000
echo.
echo Pour acceder depuis un autre appareil:
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4" ^| findstr /v "127.0.0.1"') do (
    echo   http://%%a:8000
)
echo.
echo Appuyez sur Ctrl+C pour arreter
echo.

timeout /t 2 >nul
start http://localhost:8000

python -m http.server 8000

if errorlevel 1 (
    echo.
    echo ERREUR: Python n'est pas installe ou n'est pas dans le PATH
    echo Veuillez installer Python depuis https://www.python.org/downloads/
    echo.
    pause
)

