﻿using SmartParkingApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SmartParkingApplication.Controllers
{
    public class LoginUsController : Controller
    {
        private SmartParkingsEntities db = new SmartParkingsEntities();
        // GET: LoginUs
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(string username, string password)
        {
            if (ModelState.IsValid)
            {



                var data = db.Accounts.Where(s => s.UserName.Equals(username) && s.PassWord.Equals(password)).ToList();
                if (data.Count() > 0)
                {
                    //add session
                    Session["UserName"] = data.FirstOrDefault().UserName;

                    Session["idAccount"] = data.FirstOrDefault().AccountID;
                    return RedirectToAction("Index", "Home");
                }
                else
                {
                    ViewBag.error = "Login failed";
                    return RedirectToAction("Index", "LoginUs");
                }
            }
            return View();
        }
        public ActionResult ll()
        {
            return View();
        }
        public ActionResult forgot()
        {
            return View();
        }

    }
}