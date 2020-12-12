﻿using SmartParkingApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SmartParkingApplication.Controllers
{
    public class ManageStatisticController : Controller
    {
        // GET: ManageStatistic
        private SmartParkingsEntities db = new SmartParkingsEntities();

        public ActionResult IncomeStatistic()
        {
            return View();
        }

        public JsonResult LoadDataIncome(int id)
        {
            List<double> listIncomeMoto = new List<double>();
            List<double> listIncomeCar = new List<double>();
            for (int i = 0; i < 12; i++)
            {
                var dataMoto = (from tr in db.Transactions
                            where (tr.TimeOutv.Value.Month == DateTime.Now.Month - i) && (tr.TypeOfVerhicleTran == 0) && (tr.ParkingPlaceID == id)
                            select new { tr.TotalPrice }).ToList();
                var sumMoto = dataMoto.Select(s => s.TotalPrice).Sum();
                listIncomeMoto.Add((double)sumMoto);

                var dataCar = (from tr in db.Transactions
                            where (tr.TimeOutv.Value.Month == DateTime.Now.Month - i) && (tr.TypeOfVerhicleTran == 1) && (tr.ParkingPlaceID == id)
                               select new { tr.TotalPrice }).ToList();
                var sumCar = dataCar.Select(s => s.TotalPrice).Sum();
                listIncomeCar.Add((double)sumCar);
            }
            listIncomeMoto.Reverse();
            listIncomeCar.Reverse();
            return Json(new { listIncomeMoto, listIncomeCar }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult DensityStatistic()
        {
            return View();
        }

        //combobox Gender
        public JsonResult ComboboxNameParking()
        {
            var list = (from p in db.ParkingPlaces
                       select new { p.ParkingPlaceID, p.NameOfParking }).ToList();

            return Json(list, JsonRequestBehavior.AllowGet);
        }
    }
}