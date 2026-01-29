@echo off
echo Starting Git synchronization...

REM Check if git is installed
where git >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo Error: Git is not found in your PATH. Please install Git to continue.
    pause
    exit /b
)

REM Initialize git if not present
if not exist .git (
    echo Initializing new Git repository...
    git init
)

REM Add all files
echo Adding files to staging...
git add .

REM Commit changes
echo Committing changes...
git commit -m "Update portfolio: Resume link fix and project files"

REM Ensure branch is main
git branch -M main

REM Configure remote (remove old one if exists to ensure correct link)
git remote remove origin >nul 2>&1
git remote add origin https://github.com/Gunasundari17/Portfolio.git

REM Push to remote
echo Pushing to GitHub...
git push -u origin main

if %ERRORLEVEL% equ 0 (
    echo Successfully pushed to GitHub!
) else (
    echo Push failed. Please check your internet connection or GitHub credentials.
)

pause
