using Microsoft.AspNetCore.Mvc;

namespace vortex.web.Controllers
{
    public class ContactController : Controller
    {
        private readonly ILogger<ContactController> _logger;

        public ContactController(ILogger<ContactController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View("~/Views/Contact/Pages/Index.cshtml");
        }
    }
}
