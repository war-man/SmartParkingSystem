//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SmartParkingApplication.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class MonthlyTicket
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MonthlyTicket()
        {
            this.MonthlyIncomeStatements = new HashSet<MonthlyIncomeStatement>();
        }
    
        public int MonthlyTicketID { get; set; }
        public string CusName { get; set; }
        public Nullable<int> IdentityCard { get; set; }
        public Nullable<int> Phone { get; set; }
        public string Email { get; set; }
        public Nullable<int> TypeOfVehicle { get; set; }
        public string LicensePlates { get; set; }
        public Nullable<System.DateTime> RegisDate { get; set; }
        public Nullable<System.DateTime> ExpiryDate { get; set; }
        public Nullable<int> CardID { get; set; }
        public Nullable<int> ParkingPlaceID { get; set; }
    
        public virtual Card Card { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MonthlyIncomeStatement> MonthlyIncomeStatements { get; set; }
        public virtual ParkingPlace ParkingPlace { get; set; }
    }
}
