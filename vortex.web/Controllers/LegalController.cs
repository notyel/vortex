using Microsoft.AspNetCore.Mvc;

namespace vortex.web.Controllers
{
    public class LegalController : Controller
    {
        private readonly ILogger<LegalController> _logger;

        public LegalController(ILogger<LegalController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View("~/Views/Legal/Pages/Index.cshtml");
        }
    }
}
