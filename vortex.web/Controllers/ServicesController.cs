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

        public IActionResult UtilityScale()
        {
            return View("~/Views/Services/Pages/UtilityScale.cshtml");
        }

        public IActionResult DueDiligence()
        {
            return View("~/Views/Services/Pages/DueDiligence.cshtml");
        }

        public IActionResult Distribuida()
        {
            return View("~/Views/Services/Pages/Distribuida.cshtml");
        }

        public IActionResult Electromovilidad()
        {
            return View("~/Views/Services/Pages/Electromovilidad.cshtml");
        }
    }
}
