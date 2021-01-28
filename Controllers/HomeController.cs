using Assignment1_JacksonSecrist.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1_JacksonSecrist.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult GradeCalculator()
        {
            return View();
        }

        [HttpPost]
        public ActionResult GradeCalculator(GradeCalculatorModel newFinalGrade)
        {
            return View();
        }
    }
}
