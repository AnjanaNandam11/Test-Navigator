InvokeApplication "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
i = DataTable.GlobalSheet.GetCurrentRow
 'Wait for 1 sec before next step
wait(1) 

'Save a screen capture BEFORE filling the form 
WpfWindow("Micro Focus MyFlight Sample").CaptureBitmap "C:\UFT\Image Bitmap\Before\BeforeLogin"&i&".png", True  
 'Wait for 1 sec before next step
wait(1) 

'Enter the agent name
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set DataTable("agentName", dtGlobalSheet)  
'Enter the password
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure DataTable("password", dtGlobalSheet)  
'Save a screen capture AFTER filling the form 
WpfWindow("Micro Focus MyFlight Sample").CaptureBitmap "C:\UFT\Image Bitmap\After\AfterLogin"&i&".png", True  
wait(1)  'Wait for 1 sec before next step
'Click OK button
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click  
wait(1)  'Wait for 1 sec before next step

'Save a screen capture BEFORE filling the form
WpfWindow("Micro Focus MyFlight Sample").CaptureBitmap "C:\UFT\Image Bitmap\Before\BeforeFindFlight"&i&".png", True 
wait(1)  'Wait for 1 sec before next step

'check for the john smith bitmap
WpfWindow("Micro Focus MyFlight Sample").WpfObject("John Smith").Check CheckPoint("Bitmap_John Smith")
'Select the from city
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select DataTable("fromCity", dtGlobalSheet)  
'Select the to city
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select DataTable("toCity", dtGlobalSheet)  
WpfWindow("Micro Focus MyFlight Sample").WpfImage("WpfImage").Click 80,55 
 'Select the travel date
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate DataTable("datePicker", dtGlobalSheet) 
 'Select the class
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select DataTable("Class", dtGlobalSheet)  @@ hightlight id_;_1990514880_;_script infofile_;_ZIP::ssf80.xml_;_
'Check if the class has proper value
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Check CheckPoint("Class")  

 'Select number of tickets
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select DataTable("numOfTickets", dtGlobalSheet) 
 'Wait for 1 sec before next step
wait(1) 
'Save a screen capture after filling the form
WpfWindow("Micro Focus MyFlight Sample").CaptureBitmap "C:\UFT\Image Bitmap\After\AfterFindFlight"&i&".png", True  
'Wait for 1 sec before next step
wait(1)  
'check for bitmap
WpfWindow("Micro Focus MyFlight Sample").WpfObject("Bitmap").Check CheckPoint("Seattle to San Francisco,  all inclusive")
'Click on the flight button
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click  


'Select the required flight row
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell DataTable("flights_row", dtGlobalSheet), DataTable("flights_Column", dtGlobalSheet)  
'Click on the select flight button
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click  
 'Wait for 1 sec before next step
wait(1) 
'Save a screen capture
WpfWindow("Micro Focus MyFlight Sample").CaptureBitmap "C:\UFT\Image Bitmap\Before\BeforeEnterName"&i&".png", True  
'Wait for 1 sec before next step
wait(1)  
 'Wait for 1 sec before next step
wait(1) 
 'Put the passenger name
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set DataTable("passengerName", dtGlobalSheet)  @@ hightlight id_;_1985999344_;_script infofile_;_ZIP::ssf86.xml_;_
'Check if the passenger name is correct
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Check CheckPoint("passengerName")   @@ hightlight id_;_3739896_;_script infofile_;_ZIP::ssf88.xml_;_


wait(1)  
'Save a screen capture after
WpfWindow("Micro Focus MyFlight Sample").CaptureBitmap "C:\UFT\Image Bitmap\After\AfterEnterName"&i&".png", True  
'Wait for 1 sec before next step
wait(1)  
'Wait for 1 sec before next step
wait(1)  
'Click on order button
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click 



'Close the application
WpfWindow("Micro Focus MyFlight Sample").Close




