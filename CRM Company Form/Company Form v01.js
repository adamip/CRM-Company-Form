/*
	Adam Ip
	function on Segment checkboxes												2012-04-04
*/
var DebugModeCompany = true;

/***************************************************************************************/
function SegmentsUpdate( sLabel )
{
	var ret = null;
	
	try
	{
		var sDestination = "cust_segments";

		//	if( DebugModeCompany )
		//		window.alert( "function SegmentsUpdate entrance #1\n\t" + sLabel );

		if( sLabel != null && sLabel.length > 0 )
		{
			var myAttribute = sLabel.toLowerCase();
			myAttribute = "cust_segment" + myAttribute.replace( " ", "" );

			//var myControl = Xrm.Page.ui.controls.get( myAttribute );
			//var myControl = Xrm.Page.data.entity.attributes.get( myAttribute );
			var myControl = Xrm.Page.getAttribute( myAttribute );
			
			var prev = Xrm.Page.getAttribute( sDestination ).getValue();

			//	if( DebugModeCompany )
			//		window.alert( "function SegmentsUpdate #2\nsLabel\t\t" + sLabel + "\nmyAttribute\t" + myAttribute + "\nmyControl\t" + myControl + "\nprev\t\t" + prev );
			
			if( myControl != null )
			{		
				var myCheckboxValue = myControl.getValue();
				
				if( DebugModeCompany )
					window.alert( "function SegmentsUpdate #3\nsLabel\t\t" + sLabel + "\nmyAttribute\t" + myAttribute + "\nmyCheckboxValue\t" + myCheckboxValue + "\nprev\t\t" + prev + "\nret\t\t" + ret );

				/* myCheckboxValue == 0 means to remove the substring sLabel */				
				if( myCheckboxValue == false )	
				{
					/* verify whether sLabel exists; -1 means not found */
					if( prev != mull && prev.indexOf( sLabel ) != -1 )
					{
						if( DebugModeCompany )
							window.alert( "function SegmentsUpdate #4\nsLabel\t\t" + sLabel + "\nmyAttribute\t" + myAttribute + "\nmyCheckboxValue\t" + myCheckboxValue + "\nprev\t\t" + prev + "\nret\t\t" + ret );
						/* remomyCheckboxValue operation */
						prev.replace( sLabel, "" );
						/* eliminate all possible double semicolon, if any */
						prev.replace( ";;", ";" );
						ret = prev;
					}
				}	
				else
				{	/* myCheckboxValue == 1 then concatenate sLabel */
					if( DebugModeCompany )
						window.alert( "function SegmentsUpdate #5\nsLabel\t\t" + sLabel + "\nmyAttribute\t" + myAttribute + "\nmyCheckboxValue\t" + myCheckboxValue + "\nprev\t\t" + prev + "\nret\t\t" + ret );
					if( prev == null || prev == "" )
						ret = sLabel;
					else if( prev.indexOf( sLabel ) == -1 )
					{
						prev += ";" + sLabel;
						/* eliminate all possible double semicolon, if any */
						prev.replace( ";;", ";" );			
						ret = prev;
					}		
				}
				if( ret != null )
				{	/* update attribute cust_segments */
					Xrm.Page.getAttribute( sDestination ).setValue( ret );
				}	
			}	
			if( DebugModeCompany )
				window.alert( "function SegmentsUpdate #6\nsLabel\t\t" + sLabel + "\nret\t\t" + ret );
		}	
	}
	catch( err )
	{
		window.alert( "function SegmentsUpdate error code " + err );
	}	
	return;
}

/***************************************************************************************/
function SegmentCallCenter_Change()
{
	try
	{
		if( DebugModeCompany )
			window.alert( "function SegmentCallCenter_Change()" );
	
		SegmentsUpdate( "Call Center" );
	}
	catch( err )
	{
		window.alert( "function SegmentCallCenter_Change error code " + err );
	}
	
	return;
}

/***************************************************************************************/
function SegmentEmbedded_Change()
{
	try
	{
		if( DebugModeCompany )
			window.alert( "function SegmentEmbedded_Change()" );

		SegmentsUpdate( "Embedded" );
	}
	catch( err )
	{
		window.alert( "function SegmentEmbedded_Change error code " + err );
	}
	
	return;
}

/***************************************************************************************/
function SegmentGeneralBusiness_Change()
{
	try
	{
		if( DebugModeCompany )
			window.alert( "function SegmentGeneralBusiness_Change()" );

		SegmentsUpdate( "General Business" );
	}
	catch( err )
	{
		window.alert( "function SegmentGeneralBusiness_Change error code " + err );
	}
	
	return;
}

/***************************************************************************************/
function SegmentPublicSafety_Change()
{
	try
	{
		if( DebugModeCompany )
			window.alert( "function SegmentPublicSafety_Change()" );

		SegmentsUpdate( "Public Safety" );
	}
	catch( err )
	{
		window.alert( "function SegmentPublicSafety_Change error code " + err );
	}
	
	return;
}

/***************************************************************************************/
function SegmentRenewal_Change()
{
	try
	{
		if( DebugModeCompany )
			window.alert( "function SegmentRenewal_Change()" );

		SegmentsUpdate( "Renewal" );
	}
	catch( err )
	{
		window.alert( "function SegmentRenewal_Change error code " + err );
	}
	
	return;
}

/***************************************************************************************/
function SegmentUnifiedCommunications_Change()
{
	try
	{
		if( DebugModeCompany )
			window.alert( "function SegmentUnifiedCommunications_Change()" );

		SegmentsUpdate( "Unified Communications" );
	}
	catch( err )
	{
		window.alert( "function SegmentUnifiedCommunications_Change error code " + err );
	}
	
	return;
}

/*** End of lines **********************************************************************/
