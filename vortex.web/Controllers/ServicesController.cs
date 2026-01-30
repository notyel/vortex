using Microsoft.AspNetCore.Mvc;

namespace vortex.web.Controllers
{
    public class ServicesController : Controller
    {
        private readonly ILogger<ServicesController> _logger;

        public ServicesController(ILogger<ServicesController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View("~/Views/Services/Pages/Index.cshtml");
        }
    }
}
