namespace vortex.web.Models
{
    public class FaqItem
    {
        public string Question { get; set; } = string.Empty;
        public string Answer { get; set; } = string.Empty;
    }

    public class FaqViewModel
    {
        public string Title { get; set; } = "Preguntas Frecuentes";
        public List<FaqItem> Items { get; set; } = [];
    }
}
