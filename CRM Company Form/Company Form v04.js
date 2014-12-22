/*
	Adam Ip
	function on Segment checkboxes												2012-04-04
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

/*** End of lines **********************************************************************/
