@echo off
set GIT_PATH="C:\Program Files\Git\cmd\git.exe"

echo Using Git at %GIT_PATH%

echo Setting up credential helper to ensure popup appears...
%GIT_PATH% config --global credential.helper manager

echo Configuring Git user...
%GIT_PATH% config user.name "Guna Sundari S"
%GIT_PATH% config user.email "guna.sundarirk@gmail.com"

echo.
echo ---------------------------------------------------
echo Attempting to PUSH to GitHub...
echo.
echo NOTE: A GitHub Login window should appear now.
echo If it does not appear, check this terminal window
echo as it might be asking for your username/password here.
echo ---------------------------------------------------
echo.

%GIT_PATH% push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ================================
    echo    SUCCESS! Code pushed.
    echo ================================
) else (
    echo.
    echo ================================
    echo    Push FAILED.
    echo    Please check your internet or
    echo    try logging in manually.
    echo ================================
)
pause
