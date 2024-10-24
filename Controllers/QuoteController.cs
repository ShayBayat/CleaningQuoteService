using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;


[ApiController]
[Route("[controller]")]
public class QuoteController : ControllerBase
{
    //  store price per square meter and add-ons for each city
    private readonly Dictionary<string, (double PricePerSquareMeter, List<string> AddOns)> _cities = new()
    {
        { "Stockholm", (65, new List<string>()) }, // Stockholm has no add-ons
        { "Uppsala", (55, new List<string> { "Fönsterputs", "Balkongstädning", "Bortforsling av skräp" }) } // Uppsala has specific add-ons
    };

    // GET method to retrieve available add-ons for a specific city
    [HttpGet("addons/{city}")]
    public ActionResult<List<string>> GetAddOns(string city)
    {
        if (_cities.TryGetValue(city, out var cityData))
        {
            return Ok(cityData.AddOns); // Return the list of add-ons if the city is found
        }
        return NotFound(); // Return 404 if the city is not found
    }

    // POST method to calculate the quote based on city, area, and selected add-ons
    [HttpPost("calculate")]
    public ActionResult<Quote> CalculateQuote([FromBody] Quote quote)
    {
        if (_cities.TryGetValue(quote.City, out var cityData))
        {
            quote.TotalPrice = cityData.PricePerSquareMeter * quote.Area; // Calculate base price based on area

            // Add add-on prices
            foreach (var addOn in quote.AddOns)
            {
                if (addOn == "Fönsterputs")
                    quote.TotalPrice += 300; // Additional price for window cleaning
                else if (addOn == "Balkongstädning")
                    quote.TotalPrice += 150; // Additional price for balcony cleaning
                else if (addOn == "Bortforsling av skräp")
                    quote.TotalPrice += 400; // Additional price for junk removal
            }
            return Ok(quote); // Return the calculated quote
        }
        return BadRequest(); // Return 400 if the city is not found
    }
}
