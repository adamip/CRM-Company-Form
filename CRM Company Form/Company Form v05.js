/*
	Adam Ip
	function on Segment checkboxes												2012-04-04
	
	function setLookupPair														2012-07-10
	function relationshiptype_Change
	function currentreseller_Change	
	function onSaveEvent_Validation
*/
var DebugModeCompany = false;

/***************************************************************************************/
function SegmentsUpdate()
{
	var sDestination = "cust_segments";
	var arrSegment = [ "cust_segmentcallcenter", "cust_segmentembedded", "cust_segmentgeneralbusiness", "cust_segmentpublicsafety", "cust_segmentrenewal", "cust_segmentunifiedcommunications" ];
	var arrFieldName = [ "Call Center", "Embedded", "General Business", "Public Safety", "Renewal", "Unified Communications" ];
	var iMAX = 6;
	var s = "";

	try
	{	
		for( var i = 0; i < iMAX; i++ )
		{
			if( Xrm.Page.getAttribute( arrSegment[ i ] ).getValue() == true )
				s += arrFieldName[ i ] + ";";			
		} 
		
		/* remove the last character if it is a semicolon */
		if( s.charAt( s.length - 1 ) == ";" )
			s.slice( 0, -1 );
		Xrm.Page.getAttribute( sDestination ).setValue( s );
		if( DebugModeCompany )
			window.alert( "function SegmentsUpdate\n" + s );
	}
	catch( err )
	{
		window.alert( "function SegmentsUpdate error code " + err );
	}	
	return;
}

/***************************************************************************************
	sLabel1 is a Option Set field
	sLabel2 is a character string
	sLabel3 is a Lookup field
	if sLabel3 is blank, check whether sLabel1's value (i.e. name) is equal to sLabel2
		if true, then sLabel3 cannot be blank; otherwise false and skip
*/
function setLookupPair( sLabel1, sLabel2, sLabel3, sPrompt )
{
	if( DebugModeCompany )
		window.alert( "function setLookupPair #1\n" + sLabel1 + "\n" + sLabel2 + "\n" + sLabel3 + "\n" + sPrompt );

	try
	{
		var ret = true;
		var chk_sLabel1 = false;
		var arr_sLabel3 = myGetValue( sLabel3 );
		if( arr_sLabel3 == null )
			chk_sLabel1 = true;
		else
		{
			if( DebugModeCompany ) window.alert( "function setLookupPair #2\narr_sLabel3\t" + arr_sLabel3 );
			var name_sLabel3 = arr_sLabel3[0].name;
			if( DebugModeCompany ) window.alert( "function setLookupPair #3\narr_sLabel3\t" + arr_sLabel3 + "\nname_sLabel3\t" + name_sLabel3 );
			if( name_sLabel3 == null || name_sLabel3.length == 0 )
				chk_sLabel1 = true;
		}
		if ( chk_sLabel1 )
		{
			var opt_sLabel1 = Xrm.Page.getAttribute( sLabel1 );		/* do not call myGetValue() */
			if( DebugModeCompany ) window.alert( "function setLookupPair #4\nopt_sLabel1\t" + opt_sLabel1 );
			if( opt_sLabel1 != null )
			{
				var text_sLabel1 = opt_sLabel1.getText();		
				if( DebugModeCompany ) window.alert( "function setLookupPair #5\nopt_sLabel1\t" + opt_sLabel1 + "\ntext_sLabel1\t" + text_sLabel1 );
				if( text_sLabel1 == sLabel2 )
				{
					if( DebugModeCompany ) window.alert( "function setLookupPair #6\ntext_sLabel1\t" + text_sLabel1 + "\nsLabel2\t" + sLabel2 );
					window.alert( sPrompt );
					mySetFocus( sLabel3 );
					
					var CRM_FORM_SAVE_MODE_SAVE = 1;
					var CRM_FORM_SAVE_MODE_SAVEANDCLOSE = 2;
					if( event.Mode == CRM_FORM_SAVE_MODE_SAVE || event.Mode == CRM_FORM_SAVE_MODE_SAVEANDCLOSE )
					{	
						event.returnValue = false;
						ret = false;	
					}
				}
			}
		}
	}
	catch( err )
	{
		window.alert( "function setLookupPair error code " + err );
	}
	return ret;
}

/***************************************************************************************/
function relationshiptype_Change()
{
	try
	{
		if( DebugModeCompany ) window.alert( "function relationshiptype_Change" );
		setLookupPair( "new_relationshiptype", "Channel-End User", "new_currentreseller", "Please select a value in Current Reseller" );
	}
	catch( err )
	{
		window.alert( "function relationshiptype_Change error code " + err );
	}
}

/***************************************************************************************
	This is a lookup field.  
	Its "lost focus" event is not fired.  At least it doesn't work with CRM 2011.
	Therefore this function is useless
*/ /*
function currentreseller_Change()
{
	try
	{
		if( DebugModeCompany ) window.alert( "function currentreseller_Change" );
		setLookupPair( "new_relationshiptype", "Channel-End User", "new_currentreseller", "Please select a value in Current Reseller" );
	}
	catch( err )
	{
		window.alert( "function currentreseller_Change error code " + err );
	}
}
*/

/***************************************************************************************/
function onSaveEvent_Validation()
{
	try
	{
		if( DebugModeCompany ) window.alert( "function onSaveEvent_Validation" );
		setLookupPair( "new_relationshiptype", "Channel-End User", "new_currentreseller", "Please select a value in Current Reseller" );
	}
	catch( err )
	{
		window.alert( "function onSaveEvent_Validation error code " + err );
	}
}

/*** End of lines **********************************************************************/
