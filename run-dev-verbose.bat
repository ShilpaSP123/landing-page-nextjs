@echo off
echo Setting up environment...
set PATH=%PATH%;C:\Program Files\nodejs
echo PATH updated
echo Running npm run dev...
npm run dev
echo Command completed with exit code: %ERRORLEVEL%
pause
