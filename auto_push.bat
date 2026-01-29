@echo off
set GIT_PATH="C:\Program Files\Git\cmd\git.exe"

echo Using Git at %GIT_PATH%
%GIT_PATH% config user.name "Guna Sundari S"
%GIT_PATH% config user.email "guna.sundarirk@gmail.com"
%GIT_PATH% init
%GIT_PATH% add .
%GIT_PATH% commit -m "Update portfolio: Resume link fix and project files"
%GIT_PATH% branch -M main
%GIT_PATH% remote remove origin >nul 2>&1
%GIT_PATH% remote add origin https://github.com/Gunasundari17/Portfolio.git
%GIT_PATH% push -u origin main
