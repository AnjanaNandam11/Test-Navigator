dim uftObj
Set uftObj = CreateObject("QuickTest.Application")
uftObj.Visible = True
MsgBox "UFT Automation Start!"
uftObj.Launch
wscript.sleep 3000
uftObj.Open "C:\Users\nikhi\OneDrive\Documents\UFT One\GUITest2"
uftObj.Test.Run Nothing, True, False
MsgBox "UFT Automation Finished"
uftObj.Test.LastRunResults
uftObj.Test.Save
