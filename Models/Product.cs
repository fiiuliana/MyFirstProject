using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstProject.Models
{
    public class Product
    {
        // adding validations
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [MinLength(10)]
        public string Description { get; set; }
        [Range(10, Double.MaxValue)]
        public double Price { get; set; }
    }
}
