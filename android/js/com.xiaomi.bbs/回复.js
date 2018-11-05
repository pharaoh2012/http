
G_exitApp = false;
for(var i=0;i<5;i++) {
click(169,1848,"",3000);
execShellCmd("input text "+(i+1) + (+new Date()));
sleep(1000)
click(1003,932,"发送",3000);
}