using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Corporate.Pages
{
    public class IndexModel : PageModel
    {
        public string ZaneAge { get; set; }

        public void OnGet()
        {
            var zeroDate = new DateTime(1, 1, 1);
            var birthDate = new DateTime(2018, 7, 14);
            var currDate = DateTime.Now.ToLocalTime();

            var span = currDate - birthDate;

            // because we start at year 1 for the Gregorian 
            // calendar, we must subtract a year here.
            var years = (zeroDate + span).Year - 1;
            var months = (zeroDate + span).Month - 1;
            var days = (zeroDate + span).Day;

            var pluralYears = (years.Equals(1) ? "" : "s");
            var pluralMonths = (months.Equals(1) ? "" : "s");
            var pluralDays = (days.Equals(1) ? "" : "s");
            ZaneAge = years + " year" + pluralYears + ", " + months + " month" + pluralMonths + " and " + days + " day" + pluralDays;
        }
    }
}
