namespace vortex.web.Models
{
    public class PageHeroViewModel
    {
        public string Title { get; set; } = string.Empty;
        public List<BreadcrumbItem> Breadcrumbs { get; set; } = [];
    }

    public class BreadcrumbItem
    {
        public string Label { get; set; } = string.Empty;
        public string? Url { get; set; }
        public bool IsActive => string.IsNullOrEmpty(Url);
    }
}
