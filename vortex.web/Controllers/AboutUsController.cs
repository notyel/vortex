using Microsoft.AspNetCore.Mvc;

namespace vortex.web.Controllers
{
    public class AboutUsController : Controller
    {
        private readonly ILogger<AboutUsController> _logger;

        public AboutUsController(ILogger<AboutUsController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View("~/Views/AboutUs/Pages/Index.cshtml");
        }
    }
}
