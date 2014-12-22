/* by Matt Pearson */
function SetReadyForIntegration()
{
	{
		if(crmForm.all.dynamics_isreadyforintegration.DataValue == true)
		{
			crmForm.all.dynamics_isreadyforintegration.Disabled = true;
		}
	}
}
