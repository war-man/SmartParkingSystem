﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SmartParkingApplication.Controllers
{
    public class ManageStatisticController : Controller
    {
        // GET: ManageStatistic

        public ActionResult IncomeStatistic()
        {
            return View();
        }

        public ActionResult DensityStatistic()
        {
            return View();
        }
    }
}