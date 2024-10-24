public class Quote
{
    public string? City { get; set; }  // Made City nullable
    public double Area { get; set; }
    public List<string> AddOns { get; set; } = new List<string>();
    public double TotalPrice { get; set; }
}
