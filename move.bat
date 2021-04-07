
@echo off 

::Variables
set path=%cd%\
set archivos=*.*


::Borrar carpeta de nombre backup
::RMDIR /Q/S backup



::cancion copiar
cd "%path%Copiar en dist\"
for %%I in (%archivos%) do copy %%I "%path%dist\"
::El sistema no puede encontrar el archivo especificado.
echo cancion copiada


::copiar fonts
cd "%path%dist\css\"
mkdir fonts
cd "%path%Copiar en dist\fonts\"
for %%I in (%archivos%) do copy %%I "%path%dist\css\fonts\"
echo fonts copiados

cd "%path%

pause
